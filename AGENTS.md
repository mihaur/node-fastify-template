# Project Guidelines

- Use Node.js 22 or later.
- Lint with `npm run lint`; auto-fix with `npm run lint:fix`.
- Run the full test suite using `npm test` (runs lint, unit, integration tests, and coverage).
- Unit tests live under `src/**/__test__` and integration tests in `test/`.
- Do not commit a `.env` file. Copy `.env.example` when needed for local testing.
- The project uses ESM syntax (import/export).
- Commit messages should follow Conventional Commits (e.g. `feat:`, `fix:`, `chore:`).
- Start the application with `npm start`.
