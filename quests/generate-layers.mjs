import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "layers-data.json"), "utf8"));

function writeSpotCheck(item) {
  const body = `# 🔍 Spot Check · ${item.title}

**Сфера:** ${item.sphere} · **Напрям:** ${item.label}

## 🎯 Мета
${item.spot.hook}

## 📋 Сценарій
${item.spot.scenario}

## 🕵️ Твоє завдання
${item.spot.tasks.map((t, i) => `${i + 1}. ${t}`).join("\n")}

## ⚠️ Пастка
${item.spot.trap}

---

<details>
<summary>✅ Перевір себе (лише після своєї відповіді)</summary>

${item.spot.answer}

</details>

→ [Quest Brief](../briefs/${item.briefFile}) · [Play Intro](../play/${item.playFile}) · [Dashboard](../../dashboard.html)
`;
  fs.writeFileSync(path.join(__dirname, "spot-check", item.spotFile), body);
}

function writeBrief(item) {
  const body = `# 📋 Quest Brief · ${item.title}

**Сфера:** ${item.sphere} · **Перший практичний крок**

## 🎯 Мета
${item.brief.goal}

## 🕵️ Кроки
${item.brief.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}

## ⚠️ Не роби так
${item.brief.trap}

## 👇 Старт
${item.brief.start}

→ [Spot Check](../spot-check/${item.spotFile}) · [Launch Mission на Dashboard](../../dashboard.html)
`;
  fs.writeFileSync(path.join(__dirname, "briefs", item.briefFile), body);
}

fs.mkdirSync(path.join(__dirname, "spot-check"), { recursive: true });
fs.mkdirSync(path.join(__dirname, "briefs"), { recursive: true });

const directionManifest = [];
for (const item of data.directions) {
  writeSpotCheck(item);
  writeBrief(item);
  directionManifest.push({
    id: item.id,
    directionId: item.directionId,
    title: item.title,
    sphere: item.sphere,
    skill: item.skill,
    spotFile: item.spotFile,
    briefFile: item.briefFile,
    playFile: item.playFile
  });
}

const sphereManifest = [];
for (const item of data.sphereQuests) {
  const body = `# 🔍 Spot Check · ${item.title}

**Сфера:** ${item.sphere} · **Квест:** ${item.questId}

## 🎯 Мета
${item.spot.hook}

## 📋 Сценарій
${item.spot.scenario}

## 🕵️ Твоє завдання
${item.spot.tasks.map((t, i) => `${i + 1}. ${t}`).join("\n")}

## ⚠️ Пастка
${item.spot.trap}

---

<details>
<summary>✅ Перевір себе (лише після своєї відповіді)</summary>

${item.spot.answer}

</details>

→ [Повний квест у Quest Viewer](../../quest.html#${item.questHash})
`;
  fs.writeFileSync(path.join(__dirname, "spot-check", item.spotFile), body);
  sphereManifest.push({
    id: item.id,
    questId: item.questId,
    sphere: item.sphere,
    title: item.title,
    skill: item.skill,
    spotFile: item.spotFile,
    questHash: item.questHash
  });
}

fs.writeFileSync(
  path.join(__dirname, "spot-check", "manifest.json"),
  JSON.stringify({ version: 1, rule: "Think first. No peeking.", directions: directionManifest, sphereQuests: sphereManifest }, null, 2)
);

fs.writeFileSync(
  path.join(__dirname, "briefs", "manifest.json"),
  JSON.stringify({ version: 1, rule: "Steps without spoilers.", directions: directionManifest.map(({ id, directionId, title, sphere, briefFile, playFile, spotFile }) => ({ id, directionId, title, sphere, briefFile, playFile, spotFile })) }, null, 2)
);

console.log(`Generated ${directionManifest.length} direction pairs + ${sphereManifest.length} sphere spot checks.`);
