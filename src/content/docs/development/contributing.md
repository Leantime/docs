---
title: "Contributing to Leantime"
description: "Leantime is open source, and contributions of every kind help: reporting a bug, translating, improving these docs, answering someone's question, or…"
---

Leantime is open source, and contributions of every kind help: reporting a bug, translating, improving these docs, answering someone's question, or writing code.

## How can I help without writing code?

- **Report a bug.** Open an [issue on GitHub](https://github.com/Leantime/leantime/issues). Say what you did, what you expected and what happened instead, and include your Leantime version, how you installed it, and any lines from `storage/logs/`.
- **Translate Leantime.** Translations are managed on [Crowdin](https://crowdin.com/project/leantime), not through pull requests, so they stay in sync.
- **Improve the docs.** These pages live in the [Leantime/docs](https://github.com/Leantime/docs) repository. Every change goes through a pull request, so you can fix a typo or add a missing step right on GitHub.
- **Help others** in the [community chat](https://discord.gg/4zMzJtAq9z). It's also the quickest place to ask questions while you get started.

Found a security issue? Don't report it in public. Follow the [security policy](https://github.com/Leantime/leantime/blob/master/SECURITY.md) instead.

## How do I contribute code?

1. **Set up Leantime for development** (see [Development setup](/installation/development/)).
2. **Fork the repository** and create a branch from `master`: `feature/your-feature`, `fix/what-you-fixed` or `docs/what-you-documented`.
3. **Make your change,** with tests for anything new. Leantime follows the [PSR-12](https://www.php-fig.org/psr/psr-12/) coding style.
4. **Check it** before you open the pull request:

```bash
make test-code-style
make phpstan
make unit-test
```

5. **Open a pull request** against `master`. Add screenshots for anything that changes the interface.
6. **Sign the Contributor License Agreement** when the bot asks, on your first pull request.

The [contributing guide](https://github.com/Leantime/leantime/blob/master/CONTRIBUTING.md) in the repository has the details, including naming conventions. For bigger changes, ask in the [community chat](https://discord.gg/4zMzJtAq9z) first, so you know the direction fits before you put in the time.

## Where do I start in the code?

- [Development setup](/installation/development/): run Leantime locally with Docker or on your own machine
- [Plugin development](/development/plugin-development/): build a plugin instead of changing core
- [Event hooks and filters](/technical/hooks/): extend Leantime without touching its code
- [API](/api/usage/): build on Leantime from outside
