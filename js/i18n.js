(function () {
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const lang = 'en'; // Force English for Flynn Maxwel's portfolio
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  window.__I18N_LANG = lang;

  window.getCharHTML = function (ch) {
    if (ch === ' ') return '&nbsp;';
    if (ch === '🡲' || ch === '🡺') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></svg>';
    if (ch === '🡼') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-135 42 42.5)"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></g></svg>';
    if (ch === '🞣') return '<svg style="width: 0.9em; height: 0.9em; vertical-align: -0.1em; transform: translateY(-0.1em);" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"/></svg>';
    return ch;
  };

  const T = {
    'meta.description': "Computer Science student specializing in Artificial Intelligence and Machine Learning.",

    'index.title': 'Flynn Maxwel',
    'index.h1': 'Flynn Maxwel — Computer Science student specializing in Artificial Intelligence and Machine Learning.',
    'index.hero.tagline': 'Learning how systems work.<br><span class="other-accent">Designing how they feel.</span>',
    'index.about.text': 'I don\'t just build software. I explore the systems behind it. I\'m Flynn Maxwel, a Computer Science student specializing in <span class="other-accent">Artificial Intelligence</span> and <span class="other-accent">Machine Learning</span>, creating digital experiences where engineering precision meets thoughtful design.',
    'index.about.sub': "As a Computer Science student, I enjoy building software that solves real problems, combining clean design with solid engineering to create experiences that are simple, intuitive, and reliable.",
    'index.cg.phrase': "Every project is an opportunity to <span class=\"other-accent\">learn</span>, <span class=\"other-accent\">experiment</span>, and build with purpose.",
    'index.skills.subtitle': 'Skills',
    'index.skills.text': 'Computer Science student specializing in Artificial Intelligence and Machine Learning, building intuitive and high-performance software.',
    'index.skills.systems': 'Systems',
    'index.skills.interfaces': 'Interfaces',
    'index.skills.intelligence': 'Intelligence',
    'index.skills.security': 'Security & Tools',
    'index.contact.title': 'Contact',
    'index.contact.dispo1': "Open to <span class=\"other-accent\">innovative projects</span>, research collaborations, and software engineering opportunities.",
    'index.contact.dispo2': "Available for <span class=\"other-accent\">freelance work worldwide</span> and ambitious technical challenges.",
    'index.proj.label': 'Preview',
    'index.detail.back': '🡼BACK',

    'info.title': 'Info — Flynn Maxwel',
    'info.eyebrow': 'About',
    'info.role': 'Computer Science student specializing in Artificial Intelligence & Machine Learning.',
    'info.desc': "I don't just build software. I explore the systems behind it. I'm Flynn Maxwel, a Computer Science student specializing in Artificial Intelligence and Machine Learning, creating digital experiences where engineering precision meets thoughtful design.",
    'info.meta.based': 'Based in',
    'info.meta.status': 'Status',
    'info.meta.based.value': 'Worldwide',
    'info.meta.status.value': 'Available',
    'info.skills.systems': 'Systems',
    'info.skills.interfaces': 'Interfaces',
    'info.skills.intelligence': 'Intelligence',
    'info.skills.security': 'Security & Tools',

    'contact.title': 'Contact — Flynn Maxwel',
    'contact.panel.title': "Let's build something extraordinary.",
    'contact.panel.copy': "Feel free to reach out for software engineering collaborations, AI/ML projects, or freelance inquiries.",
    'contact.meta.base': 'Location',
    'contact.meta.status': 'Status',
    'contact.meta.delay': 'Response time',
    'contact.meta.base.value': 'Global / Remote',
    'contact.meta.status.value': 'Available',
    'contact.meta.delay.value': 'Within 24h',
    'contact.eyebrow': 'Contact',
    'contact.role': 'Computer Science student specializing in AI & Machine Learning.',
    'contact.desc': "Whether you have a project idea or want to discuss AI systems, I'd love to connect.",
    'contact.shortcuts': 'Direct Links',
    'contact.brief': 'Project format',
    'contact.maildirect': 'Email',
    'contact.brief.product': 'Project Vision',
    'contact.brief.deadline': 'Timeline',
    'contact.brief.stack': 'Tech Stack',
    'contact.brief.deliverables': 'Deliverables',

    'works.title': 'Work — Flynn Maxwel',
    'works.h1': 'Projects — Flynn Maxwel. Discover my work in software development, AI, and interactive systems.',

    'common.aria.back': 'Back to home',
    'common.aria.menu': 'Main navigation',
    'common.aria.social': 'Social links',
    'common.aria.footer': 'Footer navigation',

    '404.title': '404 — Flynn Maxwel',
    '404.subtitle': 'This page got lost in the system.<br><span class="subtitle-dim">It doesn\'t exist, or no longer does.</span>',
    '404.ticker': '— PAGE NOT FOUND — SIGNAL LOST — ERROR 0x404 — THIS PAGE DOESN\'T EXIST — COORDINATES: NULL — UNKNOWN DESTINATION — ',
    '404.aria.back': 'Back to home',
  };

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (T[key] != null) el.innerHTML = T[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split('|').forEach(function (pair) {
      const idx = pair.indexOf(':');
      if (idx < 0) return;
      const attr = pair.slice(0, idx).trim();
      const key = pair.slice(idx + 1).trim();
      if (T[key] != null) el.setAttribute(attr, T[key]);
    });
  });

  const titleKey = document.documentElement.getAttribute('data-i18n-title');
  if (titleKey && T[titleKey]) document.title = T[titleKey];

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && T['meta.description']) descMeta.setAttribute('content', T['meta.description']);

  window.__t = function (key) { return T[key]; };
})();
