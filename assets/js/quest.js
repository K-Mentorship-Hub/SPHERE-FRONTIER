// Quest Viewer — loads markdown from GitHub and renders it
const REPO = 'K-Mentorship-Hub';
const BRANCH = 'main';
const BASE = `https://raw.githubusercontent.com/${REPO}`;
const FRONTIER_BASE = `${BASE}/SPHERE-FRONTIER/${BRANCH}`;

const PLAY_INTROS = [
  { path: 'quests/play/d00-7-days.md', label: '🧭 Play · 7 Days' },
  { path: 'quests/play/d01-ai-data.md', label: '🚰 Play · AI & Data' },
  { path: 'quests/play/d02-code.md', label: '🧱 Play · Code' },
  { path: 'quests/play/d03-cyber.md', label: '🔐 Play · Cyber' },
  { path: 'quests/play/d04-product.md', label: '🗺️ Play · Product' },
  { path: 'quests/play/d05-design.md', label: '🪧 Play · Design' },
  { path: 'quests/play/d06-med-bio.md', label: '🔬 Play · Med / Bio' },
  { path: 'quests/play/d07-green.md', label: '🌱 Play · Green' },
  { path: 'quests/play/d08-agtech.md', label: '🌾 Play · AgTech' },
  { path: 'quests/play/d09-miltech.md', label: '🛂 Play · MilTech' },
  { path: 'quests/play/d10-hardtech.md', label: '🔧 Play · HardTech' },
  { path: 'quests/play/d11-chemtech.md', label: '🧪 Play · ChemTech' },
  { path: 'quests/play/d12-learning.md', label: '📅 Play · Learning' },
  { path: 'quests/play/d13-language.md', label: '💬 Play · Language' },
  { path: 'quests/play/d14-people.md', label: '🤝 Play · People' }
];

const QUESTS = {
  S: [
    { repo: 'SPHERE-I-SCIENCE', path: 'quests/%F0%9F%A9%BA-S1-HealthTech.md', label: '🩺 S1 — HealthTech' },
    { repo: 'SPHERE-I-SCIENCE', path: 'quests/%F0%9F%8C%BF-S2-Green-Sustainability.md', label: '🌿 S2 — Green / Sustainability' },
    { repo: 'SPHERE-I-SCIENCE', path: 'quests/%F0%9F%8C%BE-S3-AgTech-Food.md', label: '🌾 S3 — AgTech & Food' },
    { repo: 'SPHERE-I-SCIENCE', path: 'quests/%F0%9F%93%9A-S4-Human-Systems.md', label: '📚 S4 — Human Systems' },
  ],
  E: [
    { repo: 'SPHERE-II-ENTREPRENEURSHIP', path: 'quests/%F0%9F%92%BC-E1-Venture-Product.md', label: '💼 E1 — Venture / Product' },
    { repo: 'SPHERE-II-ENTREPRENEURSHIP', path: 'quests/%F0%9F%93%8A-E2-Validation-GTM.md', label: '📊 E2 — Validation / GTM' },
    { repo: 'SPHERE-II-ENTREPRENEURSHIP', path: 'quests/%F0%9F%A4%9D-E3-Ecosystem-Partners.md', label: '🤝 E3 — Ecosystem & Partners' },
    { repo: 'SPHERE-II-ENTREPRENEURSHIP', path: 'quests/%F0%9F%93%8B-E4-Founder-Ops.md', label: '📋 E4 — Founder Ops' },
  ],
  T: [
    { repo: 'SPHERE-III-TECHNOLOGY', path: 'quests/%F0%9F%A4%96-T1-AI-Data-Analytics.md', label: '🤖 T1 — AI / Data' },
    { repo: 'SPHERE-III-TECHNOLOGY', path: 'quests/%F0%9F%92%BB-T2-Software-Engineering.md', label: '💻 T2 — Software Engineering' },
    { repo: 'SPHERE-III-TECHNOLOGY', path: 'quests/%F0%9F%96%A5%EF%B8%8F-T3-Dashboards-Interfaces.md', label: '🖥️ T3 — Dashboards' },
    { repo: 'SPHERE-III-TECHNOLOGY', path: 'quests/%E2%9A%99%EF%B8%8F-T4-Infra-Reproducibility.md', label: '⚙️ T4 — Infra & Repro' },
  ]
};

const content = document.getElementById('questContent');
const stats = document.getElementById('stats');
let activeLink = null;

// Build stats
const statCards = [
  { label: 'Total Quests', value: 12, className: '' },
  { label: 'Play Intros', value: PLAY_INTROS.length, className: '' },
  { label: 'Science', value: QUESTS.S.length, className: 'science' },
  { label: 'Entrepreneurship', value: QUESTS.E.length, className: 'entrepreneurship' },
  { label: 'Technology', value: QUESTS.T.length, className: 'technology' },
];
stats.innerHTML = '';
for (const c of statCards) {
  const el = document.createElement('article');
  el.className = `stat-card ${c.className}`;
  el.innerHTML = `<div class="stat-value">${c.value}</div><div class="stat-label">${c.label}</div>`;
  stats.appendChild(el);
}

// Build Play Intro nav
const navPlay = document.getElementById('navPlay');
PLAY_INTROS.forEach((item) => {
  const a = document.createElement('a');
  a.textContent = item.label;
  a.href = '#';
  a.addEventListener('click', (e) => {
    e.preventDefault();
    loadPlayIntro(item, a);
  });
  navPlay.appendChild(a);
});

// Build nav
Object.entries(QUESTS).forEach(([sphere, quests]) => {
  const container = document.getElementById(
    sphere === 'S' ? 'navScience' :
    sphere === 'E' ? 'navEntrepreneurship' : 'navTechnology'
  );
  quests.forEach(q => {
    const a = document.createElement('a');
    a.textContent = q.label;
    a.href = '#';
    a.addEventListener('click', e => {
      e.preventDefault();
      loadQuest(q, sphere, a);
    });
    container.appendChild(a);
  });
});

async function loadPlayIntro(item, link) {
  if (activeLink) activeLink.classList.remove('active');
  link.classList.add('active');
  activeLink = link;

  content.className = 'md-content sphere-bridge';
  content.innerHTML = '<p style="color:var(--muted);font-style:italic">Loading…</p>';

  try {
    const url = `${FRONTIER_BASE}/${item.path}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    const md = await res.text();
    content.innerHTML = marked.parse(md, { gfm: true, breaks: true });
    content.scrollTop = 0;
    window.scrollTo(0, 0);
  } catch (err) {
    content.innerHTML = `<p style="color:var(--muted)">Failed to load: ${err.message}</p>`;
  }
}

async function loadQuest(q, sphere, link) {
  if (activeLink) activeLink.classList.remove('active');
  link.classList.add('active');
  activeLink = link;

  content.className = `md-content sphere-${sphere}`;
  content.innerHTML = '<p style="color:var(--muted);font-style:italic">Loading…</p>';

  try {
    const url = `${BASE}/${q.repo}/${BRANCH}/${q.path}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    const md = await res.text();
    content.innerHTML = marked.parse(md, { gfm: true, breaks: true });
    content.scrollTop = 0;
    window.scrollTo(0, 0);
  } catch (err) {
    content.innerHTML = `<p style="color:var(--muted)">Failed to load: ${err.message}</p>`;
  }
}

// Auto-load from hash
const hash = location.hash.slice(1);
if (hash) {
  const [s, i] = hash.split('-');
  const idx = parseInt(i) - 1;
  if (QUESTS[s] && QUESTS[s][idx]) {
    const q = QUESTS[s][idx];
    const container = document.querySelector(`.nav-${s}`);
    const links = container.querySelectorAll('a');
    if (links[idx]) loadQuest(q, s, links[idx]);
  }
}
