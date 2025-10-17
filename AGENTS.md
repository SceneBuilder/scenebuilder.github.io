# Repository Guidelines

## Project Structure & Module Organization
SceneBuilder’s SvelteKit app lives under `src/`. Shared UI and helpers sit in `src/lib`, while each route-specific page component stays in `src/routes` with the `+page.svelte`/`+layout.svelte` pattern. Specs reside beside their subjects (for example, `src/routes/page.svelte.spec.ts`) and demos live in `src/demo.spec.ts`. Static assets live in `static/`, and `bun run build` outputs to `build/`. Repository-wide configuration sits at the root (`vite.config.ts`, `svelte.config.js`, `tsconfig.json`, and `components.json` for shadcn-Svelte aliases plus Tailwind wiring).

## Build, Test, and Development Commands
- `bun install` bootstraps dependencies (keep `bun.lock` committed after updates).
- `bun run dev` starts the Vite dev server with hot module reload.
- `bun run build` produces the optimized output in `build/`.
- `bun run preview` verifies the built site locally.
- `bun run check` runs `svelte-check` with the repo’s `tsconfig.json`.
- `bun run lint` executes Prettier (check mode) followed by ESLint.
- `bun run format` rewrites files with Prettier’s Svelte and Tailwind plugins.
- `bun run test` calls Vitest in headless mode; add `--ui` locally for the browser runner.

## Coding Style & Naming Conventions
Prettier (with `prettier-plugin-svelte` and `prettier-plugin-tailwindcss`) enforces two-space indentation, single quotes in TypeScript, and class name ordering. Favor PascalCase for exported Svelte components in `src/lib`, kebab-case for route directories (e.g., `comparison/+page.svelte`), and camelCase for variables and utilities. Keep Tailwind utility stacks concise, extract shared patterns into `src/lib/components`, and lean on the aliases declared in `components.json`. Run `bun run format && bun run lint` before pushing to ensure deterministic output.

## Testing Guidelines
Vitest is the primary test runner; colocate unit specs next to components with a `.spec.ts` suffix. Use `vitest-setup-client.ts` for shared mocks instead of duplicating setup per suite. Run `bun run check` and `bun run test` before opening a PR, and extend coverage whenever you touch logic in `src/lib` or introduce new routes. If a spec interacts with Three.js scenes, mock heavy dependencies to keep runs fast.

## Commit & Pull Request Guidelines
Recent history favors short, sentence-case summaries (e.g., “Added button group”). Keep each commit focused and prefer the imperative mood when describing changes. For pull requests, include a bullet summary, linked issues (`Fixes #123`), any UI screenshots or recordings, and a checklist of the commands you ran (`bun run build`, `bun run test`). Call out required configuration tweaks (env vars, registry entries) and request a reviewer familiar with the routes or components you modified.
