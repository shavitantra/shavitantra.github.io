(function () {
  // Idiomas disponibles; las traducciones están en lang/<idioma>.json
  const LANGS = ["en", "es", "fr", "pt"];
  const dictCache = {};
  let langRequest = 0;

  // Descarga (una sola vez) el diccionario de un idioma
  function loadDict(lang) {
    if (!dictCache[lang]) {
      dictCache[lang] = fetch("lang/" + lang + ".json").then(function (r) {
        if (!r.ok) throw new Error("No se pudo cargar lang/" + lang + ".json");
        return r.json();
      });
      // Si falla, permite reintentar más tarde
      dictCache[lang].catch(function () { delete dictCache[lang]; });
    }
    return dictCache[lang];
  }

  function langFromUrl() {
    try {
      let q = new URLSearchParams(window.location.search).get("lang");
      if (q) {
        q = q.toLowerCase().slice(0, 2);
        if (LANGS.indexOf(q) !== -1) return q;
      }
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  function getLang() {
    let fromUrl = langFromUrl();
    if (fromUrl) return fromUrl;
    try {
      let stored = localStorage.getItem("lang");
      if (stored && LANGS.indexOf(stored) !== -1) return stored;
    } catch (e) {
      console.error(e);
    }
    // Los buscadores deben ver la versión principal en inglés (público objetivo extranjero);
    // las demás versiones las encuentran por los enlaces hreflang (?lang=es, ?lang=fr…).
    if (/bot|crawl|spider|slurp|lighthouse|facebookexternalhit|whatsapp/i.test(navigator.userAgent || "")) return "en";
    const nav = (navigator.language || navigator.userLanguage || "en").slice(0, 2).toLowerCase();
    if (LANGS.indexOf(nav) !== -1) return nav;
    return "en";
  }

  function updateUrl(lang) {
    try {
      const url = new URL(window.location.href);
      // El inglés es la URL principal, sin ?lang (coincide con la canónica).
      if (lang === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      // Keep hash (e.g. #contacto) if present
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (e) {
      console.error(e);
    }
  }

  function setLang(lang, opts) {
    if (LANGS.indexOf(lang) === -1) lang = "en";
    opts = opts || {};
    // Si se pulsan varios idiomas seguidos, solo se aplica el último
    let request = ++langRequest;
    loadDict(lang).then(function (dict) {
      if (request === langRequest) applyLang(lang, dict, opts);
    }).catch(console.error);
  }

  function applyLang(lang, dict, opts) {
    // Keep <html lang> in sync with the visible language (screen readers, SEO tools, spellcheck).
    document.documentElement.setAttribute("lang", lang);
    document.title = dict.metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", dict.metaDescription);
    let pageUrl = "https://shavitantra.com/" + (lang === "en" ? "" : "?lang=" + lang);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", pageUrl);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", pageUrl);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      let key = el.dataset.i18n;
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.dataset.i18nHtml;
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      const key = el.dataset.i18nAlt;
      if (dict[key] != null) el.setAttribute("alt", dict[key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.dataset.i18nAria;
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });
    document.querySelectorAll("[data-carousel]").forEach(function (el) {
      if (dict["carousel.label"]) el.setAttribute("aria-label", dict["carousel.label"]);
    });
    document.querySelectorAll("[data-carousel-dots]").forEach(function (el) {
      if (dict["carousel.dots"]) el.setAttribute("aria-label", dict["carousel.dots"]);
      el.querySelectorAll("button").forEach(function (dot, i) {
        if (dict["carousel.goto"]) {
          dot.setAttribute("aria-label", dict["carousel.goto"] + " " + (i + 1));
        }
      });
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });

    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      console.error(e);
    }
    if (opts.updateUrl !== false) updateUrl(lang);
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.dataset.lang);
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear().toString();

  /* Photo carousel (El lugar) */
  (function initCarousels() {
    let reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let intervalMs = 5500;

    document.querySelectorAll("[data-carousel]").forEach(function (root) {
      let slides = Array.prototype.slice.call(root.querySelectorAll(".carousel-slide"));
      if (slides.length < 2) return;

      let dotsWrap = root.querySelector("[data-carousel-dots]");
      let prevBtn = root.querySelector("[data-carousel-prev]");
      let nextBtn = root.querySelector("[data-carousel-next]");
      let index = Math.max(0, slides.findIndex(function (s) { return s.classList.contains("is-active"); }));
      let timer = null;
      let touchX = null;

      slides.forEach(function (slide, i) {
        let dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", "Foto " + (i + 1));
        if (i === index) dot.setAttribute("aria-current", "true");
        dot.addEventListener("click", function () { goTo(i); restart(); });
        dotsWrap.appendChild(dot);
      });
      let dots = Array.prototype.slice.call(dotsWrap.querySelectorAll("button"));

      function goTo(i) {
        index = (i + slides.length) % slides.length;
        slides.forEach(function (slide, j) {
          slide.classList.toggle("is-active", j === index);
        });
        dots.forEach(function (dot, j) {
          if (j === index) dot.setAttribute("aria-current", "true");
          else dot.removeAttribute("aria-current");
        });
      }

      function next() { goTo(index + 1); }
      function prev() { goTo(index - 1); }

      function stop() {
        if (timer) { clearInterval(timer); timer = null; }
      }
      function start() {
        if (reduceMotion || timer) return;
        timer = setInterval(next, intervalMs);
      }
      function restart() { stop(); start(); }

      if (prevBtn) prevBtn.addEventListener("click", function () { prev(); restart(); });
      if (nextBtn) nextBtn.addEventListener("click", function () { next(); restart(); });

      root.addEventListener("mouseenter", stop);
      root.addEventListener("mouseleave", start);
      root.addEventListener("focusin", stop);
      root.addEventListener("focusout", function (e) {
        if (!root.contains(e.relatedTarget)) start();
      });

      root.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { e.preventDefault(); prev(); restart(); }
        if (e.key === "ArrowRight") { e.preventDefault(); next(); restart(); }
      });

      root.addEventListener("touchstart", function (e) {
        if (e.changedTouches && e.changedTouches[0]) touchX = e.changedTouches[0].clientX;
      }, { passive: true });
      root.addEventListener("touchend", function (e) {
        if (touchX == null || !e.changedTouches || !e.changedTouches[0]) return;
        var dx = e.changedTouches[0].clientX - touchX;
        touchX = null;
        if (Math.abs(dx) < 40) return;
        if (dx < 0) next(); else prev();
        restart();
      }, { passive: true });

      document.addEventListener("visibilitychange", function () {
        if (document.hidden) stop(); else start();
      });

      start();
    });
  })();

  // Traduce la página (después del carrusel, para que también traduzca sus botones)
  setLang(getLang());
})();
