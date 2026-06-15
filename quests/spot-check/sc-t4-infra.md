# 🔍 Spot Check · T4 Infra & Repro

**Сфера:** T · **Квест:** T4

## 🎯 Мета
«Works on my machine» docker — **:latest** tags, no lockfile.

## 📋 Сценарій
Dockerfile `FROM python:latest`; pip install no versions; rebuild next month breaks.

## 🕵️ Твоє завдання
1. 2 reproducibility sins.
2. Fix one line each.
3. Who pays downtime?

## ⚠️ Пастка
Latest is a moving target.

---

<details>
<summary>✅ Перевір себе (лише після своєї відповіді)</summary>

Pin base image digest + requirements.txt hashes; CI rebuild weekly catch drift.

</details>

→ [Повний квест у Quest Viewer](../../quest.html#T-4)
