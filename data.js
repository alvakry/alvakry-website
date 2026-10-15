/**
 * data.js — alvakry portfolio content loader
 *
 * Priority order:
 *   1. GitHub raw URL (live, cross-device)
 *   2. Hardcoded defaults (offline fallback)
 *
 * GitHub config — update GITHUB_USER / GITHUB_REPO if repo changes.
 * TOKEN is never stored here — only used in admin.html.
 */

(function () {

  var GITHUB_USER    = 'alvakry';
  var GITHUB_REPO    = 'alva';
  var CONTENT_FILE   = 'content.json';
  var GITHUB_RAW_URL = 'https://raw.githubusercontent.com/' +
                       GITHUB_USER + '/' + GITHUB_REPO +
                       '/main/' + CONTENT_FILE;

  /* ── Hardcoded defaults (used if GitHub fetch fails) ── */
  var defaults = {
    settings: {
      heroHeadline: {
        en: "I build things the internet deserves.",
        id: "Saya bikin hal-hal yang internet layak dapat."
      },
      heroSubtitle: {
        en: "Designer and developer. I make <strong>interfaces, tools, and bad jokes</strong> — in that order of quality. Powered by caffeine and mild existential dread. The government didn't fund this. Shockingly.",
        id: "Desainer sekaligus developer. Saya bikin <strong>antarmuka, tools, dan lelucon garing</strong> — urutan itu sesuai kualitasnya. Bahan bakar: kafein dan rasa eksistensial yang samar. Tidak disponsori pemerintah. Mengejutkan sekali."
      },
      aboutText: {
        en: "I'm a designer-developer hybrid based in Pekanbaru.",
        id: "Saya adalah hybrid desainer-developer yang tinggal di Pekanbaru."
      },
      statusText: {
        en: "online — probably procrastinating",
        id: "online — kemungkinan lagi nunda-nunda kerjaan"
      },
      contactIntro: {
        en: "Open to freelance, full-time, and anything that doesn't require explaining myself to a committee.",
        id: "Terbuka untuk freelance, full-time, dan apapun yang tidak mengharuskan saya menjelaskan diri ke sebuah komite."
      }
    },
    works: [],
    thoughts: []
  };

  /* ── Notify pages that data is ready ── */
  function dispatch(data) {
    window.PORTFOLIO_DATA = data;
    document.dispatchEvent(new CustomEvent('portfolioReady', { detail: data }));
  }

  /* ── Fetch from GitHub with cache-busting ── */
  var url = GITHUB_RAW_URL + '?t=' + Date.now();

  fetch(url)
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function (data) {
      dispatch(data);
    })
    .catch(function (err) {
      console.warn('[data.js] GitHub fetch failed, using defaults.', err.message);
      dispatch(defaults);
    });

})();
