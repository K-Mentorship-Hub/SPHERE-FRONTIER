// Quest Viewer — loads markdown from GitHub and renders it
const REPO = 'K-Mentorship-Hub';
const BRANCH = 'main';
const BASE = `https://raw.githubusercontent.com/${REPO}`;
const FRONTIER_BASE = `${BASE}/SPHERE-FRONTIER/${BRANCH}`;

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

async function loadFrontierMd(path, link, className, eyebrow) {
  if (activeLink) activeLink.classList.remove('active');
  link.classList.add('active');
  activeLink = link;

  content.className = className;
  content.innerHTML = '<p style="color:var(--muted);font-style:italic">Loading…</p>';

  try {
    const url = `${FRONTIER_BASE}/${path}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    const md = await res.text();
    content.innerHTML = `<p class="eyebrow">${eyebrow}</p>` + marked.parse(md, { gfm: true, breaks: true });
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

function buildNav(container, items, handler) {
  items.forEach((item) => {
    const a = document.createElement('a');
    a.textContent = item.label;
    a.href = '#';
    a.addEventListener('click', (e) => {
      e.preventDefault();
      handler(item, a);
    });
    container.appendChild(a);
  });
}

async function initQuestViewer() {
  let playItems = [];
  let briefItems = [];
  let spotDirectionItems = [];
  let spotSphereItems = [];

  try {
    const [playRes, briefRes, spotRes] = await Promise.all([
      fetch('./quests/play/manifest.json'),
      fetch('./quests/briefs/manifest.json'),
      fetch('./quests/spot-check/manifest.json')
    ]);
    if (playRes.ok) {
      playItems = (await playRes.json()).cards.map((c) => ({
        path: `quests/play/${c.file}`,
        label: `🎮 ${c.title}`
      }));
    }
    if (briefRes.ok) {
      briefItems = (await briefRes.json()).directions.map((c) => ({
        path: `quests/briefs/${c.briefFile}`,
        label: `📋 ${c.title}`
      }));
    }
    if (spotRes.ok) {
      const spotData = await spotRes.json();
      spotDirectionItems = spotData.directions.map((c) => ({
        path: `quests/spot-check/${c.spotFile}`,
        label: `🔍 ${c.title}`
      }));
      spotSphereItems = spotData.sphereQuests.map((c) => ({
        path: `quests/spot-check/${c.spotFile}`,
        label: `🔍 ${c.title}`
      }));
    }
  } catch (err) {
    console.warn('Layer manifests not loaded', err);
  }

  const statCards = [
    { label: 'Deep Quests', value: 12, className: '' },
    { label: 'Play + Brief', value: briefItems.length, className: 'entrepreneurship' },
    { label: 'Spot Checks', value: spotDirectionItems.length + spotSphereItems.length, className: 'science' },
    { label: 'Spheres', value: 3, className: 'technology' },
  ];
  stats.innerHTML = '';
  for (const c of statCards) {
    const el = document.createElement('article');
    el.className = `stat-card ${c.className}`;
    el.innerHTML = `<div class="stat-value">${c.value}</div><div class="stat-label">${c.label}</div>`;
    stats.appendChild(el);
  }

  buildNav(document.getElementById('navPlay'), playItems, (item, a) =>
    loadFrontierMd(item.path, a, 'md-content sphere-bridge', 'Play Intro')
  );
  buildNav(document.getElementById('navBrief'), briefItems, (item, a) =>
    loadFrontierMd(item.path, a, 'md-content sphere-bridge', 'Quest Brief')
  );
  buildNav(document.getElementById('navSpot'), spotDirectionItems, (item, a) =>
    loadFrontierMd(item.path, a, 'md-content sphere-bridge', 'Spot Check · Direction')
  );
  buildNav(document.getElementById('navSpotSphere'), spotSphereItems, (item, a) =>
    loadFrontierMd(item.path, a, 'md-content sphere-bridge', 'Spot Check · S/E/T Quest')
  );

  Object.entries(QUESTS).forEach(([sphere, quests]) => {
    const container = document.getElementById(
      sphere === 'S' ? 'navScience' :
      sphere === 'E' ? 'navEntrepreneurship' : 'navTechnology'
    );
    quests.forEach((q) => {
      const a = document.createElement('a');
      a.textContent = q.label;
      a.href = '#';
      a.addEventListener('click', (e) => {
        e.preventDefault();
        loadQuest(q, sphere, a);
      });
      container.appendChild(a);
    });
  });

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
}

initQuestViewer();
