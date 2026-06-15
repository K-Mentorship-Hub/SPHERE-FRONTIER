# Learning Layers — K Mentorship Hub

Three layers **before and during** every direction quest. Labs (de-lab, devops-lab) are separate — deeper code practice.

## The Stack

| Layer | Time | Question | Folder |
| --- | --- | --- | --- |
| **🎮 Play Intro** | ~30 sec | «Навіщо цей напрям?» | [`quests/play/`](../quests/play/) |
| **📋 Quest Brief** | ~5 min read | «Що робити руками першим?» | [`quests/briefs/`](../quests/briefs/) |
| **🔍 Spot Check** | ~5–10 min think | «Що тут **не так**?» | [`quests/spot-check/`](../quests/spot-check/) |
| **Mission Lab** | hours | «Зроби артефакт + twist» | [`dashboard.html`](../dashboard.html) |
| **Sphere quests** | days | «Повний S/E/T квест у репо» | [`quest.html`](../quest.html) |

**Order for mentees:** Play → Brief → (optional Spot Check before or after first try) → Mission → deep quest.

## Coverage

| Set | Count | Skills (examples) |
| --- | --- | --- |
| Directions 0–14 | 15 each layer | joins, validation, evidence, UX, ethics, learning, … |
| S/E/T deep quests | 12 Spot Checks | one trap per S1–T4 quest |

Spot Checks are **not SQL-only**: product leading questions, greenwashing, chart axes, team retro, reproducibility, etc.

## Rules

1. **One metaphor** per Play card — no mixed images.
2. **Quest Brief** — steps without spoiling the artifact.
3. **Spot Check** — answer only inside `<details>`; think first.
4. Do **not** replace Mission Lab or sphere quest markdown — **add** these layers on top.

## For Maintainers

- Edit content: [`quests/layers-data.json`](../quests/layers-data.json)
- Regenerate markdown: `node quests/generate-layers.mjs`
- Play cards (separate): [`quests/play/manifest.json`](../quests/play/manifest.json)

## Where to Open

- **Dashboard** — 🎮 Play · 📋 Brief · 🔍 Check · Launch Mission
- **Quest Viewer** — sidebar sections for all three layers + S/E/T quests
- **Docs** — this page

See also: [`PLAY-LAYER.md`](./PLAY-LAYER.md) · [`DIRECTION-LIBRARY.md`](./DIRECTION-LIBRARY.md)
