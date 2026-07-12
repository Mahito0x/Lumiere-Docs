# Security Policy

This policy covers the **Lumière documentation site** (this repository) — the Next.js/Fumadocs application serving docs.lumierelabs.xyz. It does not cover the Lumière Discord bot itself, which lives in a separate, private repository.

## Reporting a Vulnerability

If you discover a security issue in this repository — for example, a cross-site scripting (XSS) vector in MDX rendering, an exposed secret, a dependency vulnerability, or an open redirect — please report it privately rather than opening a public issue.

**To report:**

* Email **[security@lumierelabs.xyz](mailto:security@lumierelabs.xyz)**,

Please do not disclose the issue publicly (including in GitHub issues, Discord, or social media) until we've had a chance to investigate and, if needed, ship a fix.

## What to Include

To help us triage quickly, include:

* A clear description of the issue and its potential impact
* Steps to reproduce, or a proof of concept
* The URL, file, or component affected
* Your assessment of severity, if you have one

## Response Process

* **Acknowledgment:** within 48 hours of your report
* **Initial assessment:** within 5 business days, including whether we can reproduce it and an estimated severity
* **Resolution:** timeline depends on severity — critical issues (e.g. secret exposure, RCE-class bugs) are prioritized immediately; lower-severity issues are fixed in the next regular release cycle

We'll keep you updated throughout and credit you in the fix (in the changelog or release notes) unless you'd prefer to stay anonymous.

## Scope

**In scope:**

* This repository's source code (Next.js app, MDX rendering, API routes)
* Build and deployment configuration that's part of this repo
* Dependency vulnerabilities introduced by this project

**Out of scope:**

* The Lumière Discord bot itself — if you've found a vulnerability in the bot (not the docs site), please report it via the same [security@lumierelabs.xyz](mailto:security@lumierelabs.xyz) address and we'll route it appropriately; it lives in a different, private codebase
* Third-party services this site depends on but doesn't control (Vercel, Discord's API, etc.) — please report those directly to the relevant vendor
* Issues requiring physical access to a maintainer's device
* Social engineering attacks against maintainers or contributors

## Safe Harbor

We consider security research conducted under this policy to be authorized. We won't pursue legal action against anyone who:

* Makes a good-faith effort to avoid privacy violations, data destruction, or service disruption
* Reports a vulnerability promptly and doesn't exploit it beyond what's necessary to demonstrate the issue
* Doesn't publicly disclose the issue before we've had a reasonable opportunity to address it

## Supported Versions

This is a continuously deployed documentation site — only the version currently live at [docs.lumierelabs.xyz](docs.lumierelabs.xyz) is supported. There are no older versions maintained in parallel.

Thank you for helping keep Lumière's documentation and its users safe.