# Contributing to Lumière Docs

We appreciate your interest in helping improve the Lumière documentation. Whether you're fixing a typo, adding a new feature guide, or improving the layout, your help is welcome.

By participating in this project, you agree to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## How to Help

### Reporting Issues

If you find a bug, a broken link, or a mistake in the documentation:

* [Open an issue](https://github.com/Mahito0x/Lumiere-Docs/issues) describing what's wrong and where.
* If you already know the fix, feel free to skip the issue and go straight to a [pull request](https://github.com/Mahito0x/Lumiere-Docs/pulls).
* Found a command that no longer exists or works differently than documented? Flag it — outdated docs are one of the most valuable things you can report, even without a fix in hand.

### Making Changes

1. **Fork the repo** and create a new branch (`fix/typo-in-moderation`, `docs/new-backup-page`).
2. **Edit the MDX files** in `content/docs/`.
3. **Run the site locally** (`npm install && npm run dev`) and check your changes render correctly, including any links.
4. **Commit** with a clear, descriptive message.
5. **Open a pull request** explaining what changed and why.

Keep PRs focused — one page or one fix per PR is easier to review than a bundle of unrelated changes.

---

## Content Structure

Every feature section under `content/docs/` follows the same shape:

```
section-name/
├── meta.json          # nav order, title, icon
├── overview.mdx        # what the feature does, why you'd use it
├── some-capability.mdx  # one page per capability
└── commands.mdx        # full command reference table for the section
```

**`meta.json`** needs a title, a valid [lucide-react](https://lucide.dev/icons) icon name, and its page order:

```json
{
  "title": "Section Name",
  "icon": "LucideIconName",
  "pages": ["overview", "some-capability", "commands"]
}
```

**Every `.mdx` file** needs frontmatter:

```yaml
---
title: Page Title
description: One sentence, shown in nav and search.
---
```

## Writing Style

* **Plain language.** Write for someone who's never touched a Discord bot before, not for a developer reading the source.
* **Real commands only.** Every command, option, and permission mentioned must exist in the actual bot. If you're not sure a command still exists, say so in the PR rather than guessing.
* **Short over clever.** Concrete examples over long explanatory paragraphs.
* **Member vs. admin.** If a feature has parts that only apply to server admins, say so explicitly rather than mixing both audiences in one unlabeled block.
* **No filler.** A short, accurate page beats a long, vague one padded to "look complete."

---

## Technical Details

* **Framework:** Next.js
* **Documentation Engine:** Fumadocs
* **Styling:** Tailwind CSS (v4)
* **Content Format:** MDX

If you're adding a new component, keep it consistent with the existing design system rather than introducing a new visual style — check how similar components are already styled elsewhere in the docs before building from scratch.

---

## Need Help?

If you have questions about how to structure a page, or want to discuss a larger change before starting, join us on Discord:

**[Join the Lumière Discord](https://discord.gg/RZP3A9dq7S)**