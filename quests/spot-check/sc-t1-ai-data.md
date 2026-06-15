# 🔍 Spot Check · T1 AI / Data

**Сфера:** T · **Квест:** T1

## 🎯 Мета
ChatGPT SQL «looks perfect» — **wrong JOIN key**, confident tone.

## 📋 Сценарій
AI query joins `users.id` to `orders.user_uuid`. Runs without error. Revenue 3× inflated.

## 🕵️ Твоє завдання
1. Why no error?
2. Human check before ship?
3. Prompt fix?

## ⚠️ Пастка
Fluent SQL ≠ correct SQL.

---

<details>
<summary>✅ Перевір себе (лише після своєї відповіді)</summary>

Types match syntactically maybe wrong semantically. Always profile keys, row counts, sample joins.

</details>

→ [Повний квест у Quest Viewer](../../quest.html#T-1)
