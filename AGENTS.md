# Instructions for AI assistants editing these docs

This repository is the source of docs.leantime.io (Astro Starlight). Pages are in `src/content/docs/`.

1. Follow [CONTRIBUTING.md](CONTRIBUTING.md): page structure, the `glance` front matter, heading rules, components and the word list.
2. Check facts against the code before writing them. Leantime is at https://github.com/Leantime/leantime: settings are in `config/.env.sample` and `app/Core/Configuration/`, and interface labels are in `app/Language/en-US.ini`. Docker details are at https://github.com/Leantime/docker-leantime. Don't document a setting, command or button you haven't found there.
3. Never invent features, plugin capabilities, prices or version numbers. If you can't verify something, leave it out and say so in the pull request.
4. Run `npm run build` before you finish. It fails on heading-level mistakes and broken internal links.
