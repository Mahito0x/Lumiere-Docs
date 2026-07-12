# Lumière Documentation

The official documentation for [Lumière](https://lumierelabs.xyz) — a multi-purpose Discord bot for moderation, roles, voice management, community tools, games, stats, and full server backups.

- **Documentation**: [docs.lumierelabs.xyz](https://docs.lumierelabs.xyz)
- **Invite**: [lumierelabs.xyz](https://lumierelabs.xyz)

## About this repo

This repository contains the source for Lumière's documentation site — every command, feature, and setup guide for both server admins and members. It does **not** contain the bot's source code, which is closed-source.

Built with [Next.js](https://nextjs.org) and [Fumadocs](https://www.fumadocs.dev/).

## Tech stack

- **Framework:** Next.js (App Router)
- **Docs engine:** Fumadocs (MDX-based)
- **Content:** MDX + `meta.json` for navigation
- **Deployment:** Vercel

## Getting started

```bash
git clone https://github.com/Mahito0x/Lumiere-Docs.git
cd Lumiere-Docs
pnpm install
pnpm run dev
```

The site will be running at `http://localhost:3000`.

## Project structure

```
content/docs/
├── getting-started/
├── free-vs-plus/
├── moderation/
├── roles-and-access/
├── voice-and-channels/
├── community-tools/
├── engagement-and-games/
├── stats-and-leaderboards/
├── server-backups/
├── administration/
├── reference/
└── troubleshooting/
```

Each section follows a consistent shape: an `overview.mdx`, one page per capability, and a `commands.mdx` reference table. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full content conventions before opening a PR.