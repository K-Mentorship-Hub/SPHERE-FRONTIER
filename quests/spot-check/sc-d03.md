# 🔍 Spot Check · Cyber & Infrastructure

**Сфера:** T · **Напрям:** 3

## 🎯 Мета
CI зелений ✅ — але секрет уже в історії git.

## 📋 Сценарій
У PR `.env` видалили, але в коментарі лишилось:
`DATABASE_URL=postgres://user:SECRET@host/db`
І в `docker-compose.yml` порт `5432:5432` на публічному VPS без firewall rule.

## 🕵️ Твоє завдання
1. Що небезпечніше: файл чи коментар?
2. Чому «видалили .env» недостатньо?
3. Назви 2 дії до merge.

## ⚠️ Пастка
Зелений pipeline ≠ безпечний деплой.

---

<details>
<summary>✅ Перевір себе (лише після своєї відповіді)</summary>

Секрет у коментарі = в історії git назавжди → rotate credentials, rewrite history або revoke.

Публічний порт БД → scan bots. **Дії:** rotate secret, BFG/git filter, закрити port/firewall, secrets у vault, never in PR comments.

</details>

→ [Quest Brief](../briefs/brief-d03.md) · [Play Intro](../play/d03-cyber.md) · [Dashboard](../../dashboard.html)
