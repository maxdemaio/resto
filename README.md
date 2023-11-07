# Resto

</3

---

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                                                  | Action                                           |
| :------------------------------------------------------- | :----------------------------------------------- |
| `pnpm i`                                                 | Installs dependencies                            |
| `pnpm dev`                                               | Starts local dev server at `localhost:4321`      |
| `pnpm run build`                                         | Build your production site to `./dist/`          |
| `pnpm run preview`                                       | Preview your build locally, before deploying     |
| `pnpm run astro ...`                                     | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help`                               | Get help using the Astro CLI                     |
| `pnpm prettier --write . --plugin=prettier-plugin-astro` | prettier          |
