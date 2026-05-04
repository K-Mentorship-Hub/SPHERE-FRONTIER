// Docs Viewer — renders markdown docs from GitHub
const REPO = 'K-Mentorship-Hub';
const BRANCH = 'main';
const BASE = `https://raw.githubusercontent.com/${REPO}/SPHERE-FRONTIER/${BRANCH}`;

const DOCS = [
  { path: 'docs/SET-GUIDEBOOK.md', label: '📖 SET Guidebook' },
  { path: 'docs/REPO-SYSTEM.md', label: '🗂️ Repo System' },
  { path: 'docs/DIRECTION-LIBRARY.md', label: '🧭 Direction Library' },
  { path: 'docs/DISCORD-BLUEPRINT.md', label: '💬 Discord Blueprint' },
  { path: 'docs/CONTRIBUTION-BRIDGE.md', label: '🌉 Contribution Bridge' },
  { path: 'README.md', label: '📋 README' },
];

const content = document.getElementById('docContent');
const docList = document.getElementById('docList');
const docStats = document.getElementById('docStats');
let activeLink = null;

// Build sidebar
DOCS.forEach((d, i) => {
  const a = document.createElement('a');
  a.textContent = d.label;
  a.href = '#';
  a.addEventListener('click', e => {
    e.preventDefault();
    loadDoc(d, a);
  });
  docList.appendChild(a);
});

// Stats
const cards = [
  { label: 'Documents', value: DOCS.length, className: '' },
  { label: 'Spheres', value: 3, className: 'science' },
  { label: 'Quests', value: 12, className: 'technology' },
];
docStats.innerHTML = '';
for (const c of cards) {
  const el = document.createElement('article');
  el.className = `stat-card ${c.className}`;
  el.innerHTML = `<div class="stat-value">${c.value}</div><div class="stat-label">${c.label}</div>`;
  docStats.appendChild(el);
}

async function loadDoc(d, link) {
  if (activeLink) activeLink.classList.remove('active');
  link.classList.add('active');
  activeLink = link;

  content.innerHTML = '<p style="color:var(--muted);font-style:italic">Loading…</p>';

  try {
    const url = `${BASE}/${d.path}`;
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
  const idx = parseInt(hash);
  if (DOCS[idx]) {
    const links = docList.querySelectorAll('a');
    if (links[idx]) loadDoc(DOCS[idx], links[idx]);
  }
} else {
  // Default: load first doc
  const firstLink = docList.querySelector('a');
  if (firstLink) loadDoc(DOCS[0], firstLink);
}
