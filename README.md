# Dawn UI Starter

A full-stack React 19 starter built with [TanStack Start](https://tanstack.com/start) for type-safe routing and server rendering, using [Vite+](https://viteplus.dev/) as its toolchain and [Dawn UI](https://github.com/PHNTMbandit/dawn-ui-react) for components. Includes Better Auth, Drizzle ORM, theming, and English/Japanese internationalization.

[![Use this template](https://img.shields.io/badge/Use%20this%20template-2ea44f?style=for-the-badge&logo=github)](https://github.com/PHNTMbandit/dawn-ui-starter/generate)
[![Sponsor](https://img.shields.io/badge/Sponsor-DB61A2?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/PHNTMbandit)

## Features

### Frontend

- **React 19** with the new React Compiler for automatic memoization
- **TanStack Router** — Type-safe file-based routing with SSR support
- **TanStack Query** — Powerful data fetching and caching
- **TanStack Form** — Type-safe form handling with server actions
- **TanStack Table** — Headless table utilities
- [**Dawn UI**](https://github.com/PHNTMbandit/dawn-ui-react) — Component library with light and dark themes
- **Tailwind CSS v4** — Utility-first styling with the Vite plugin
- **Shiki** — Beautiful syntax highlighting with GitHub themes

### Backend

- **TanStack Start** — Full-stack SSR framework powered by Nitro
- **Better Auth** — Secure authentication with session management
- **Drizzle ORM** — Type-safe database queries
- **Neon DB** — Serverless PostgreSQL database

### Internationalization

- **Paraglide** — Compiled i18n with type-safe messages
- Pre-configured for English and Japanese

### Developer Experience

- **Vite+** — Unified toolchain for development, builds, testing, linting, formatting, and Git hooks
- **OXC** — Lightning-fast formatting and linting (oxfmt + oxlint)
- **Vitest** — Fast unit and integration testing with Playwright browser tests
- **Storybook 10** — Component development and visual testing
- **Commitizen** — Conventional commits with interactive prompts
- **GitHub Actions** — CI workflow for PRs (format, lint, test, build)

## Use This Template

1. Select **Use this template** above and create a repository under your GitHub account or organization.
2. Clone the repository you just created and open it locally:

```bash
git clone https://github.com/<your-account>/<your-repository>.git
cd <your-repository>
```

3. Replace this starter's name, description, links, and branding with your own. Update `package.json`, the README, and any deployment metadata that applies to your app.
4. Follow the setup steps below to configure your database and authentication.

For the button on this repository to work, its owner must open **Settings > General** and enable **Template repository**. After creating a copy, update the badge links to point to your repository.

## Getting Started

### Prerequisites

- [Node.js 24+](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn/bun

### 1. Create a Neon Database

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy your connection string from the dashboard

### 2. Configure Environment Variables

```bash
cp .env-template .env.local
```

Edit `.env.local` with your values:

```env
# Database - Neon PostgreSQL
DATABASE_URL=postgresql://user:password@your-neon-host.neon.tech/dbname?sslmode=require

# Better Auth
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-secret-here  # Generate with: openssl rand -base64 32
```

### 3. Install Dependencies

```bash
vp install
```

### 4. Set Up the Database

Generate and push the database schema:

```bash
vp run db:generate
vp run db:push
```

### 5. Generate Auth Tables

Better Auth requires additional tables for users, sessions, and accounts. Generate them:

```bash
pnpm dlx auth@latest generate
```

This creates auth schema in `src/db/`. Then push to your database:

```bash
vp run db:push
```

### 6. Enable Git Hooks

The `.vite-hooks` directory contains the hook definitions. Enable them once in each local clone to register the Vite+ dispatcher with Git:

```bash
vp hooks enable
```

### 7. Start Development Server

```bash
vp dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command              | Description                     |
| -------------------- | ------------------------------- |
| `vp dev`             | Start the development server    |
| `vp build`           | Build for production            |
| `vp preview`         | Preview the production build    |
| `vp test`            | Run all tests                   |
| `vp check`           | Format, lint, and type-check    |
| `vp run storybook`   | Start Storybook on port 6006    |
| `vp run db:studio`   | Open Drizzle Studio             |
| `vp run db:generate` | Generate database migrations    |
| `vp run db:push`     | Push schema changes to database |
| `vp run db:migrate`  | Run database migrations         |

## Project Structure

```
src/
├── components/        # Shared UI components
├── db/               # Database schema and migrations
├── features/         # Feature-based modules
│   └── auth/         # Authentication feature
├── hooks/            # Custom React hooks
├── integrations/     # Third-party integrations
├── lib/              # Core utilities (auth, shiki, etc.)
├── middleware/       # Server middleware
├── paraglide/        # Generated i18n files
├── routes/           # File-based routes
│   ├── _secure/      # Protected routes (requires auth)
│   └── api/          # API routes
├── styles/           # Global styles
├── tests/            # Test setup and utilities
└── utils/            # Helper functions
```

## Authentication

This starter uses [Better Auth](https://better-auth.com) with:

- Email/password authentication
- Username support
- Secure session management (7-day expiry, cookie caching)
- Protected routes via `_secure` layout

### Protected Routes

Routes under `src/routes/_secure/` are automatically protected. Users are redirected to `/sign-in` if not authenticated.

## Theming

Dawn UI supports light and dark modes out of the box. The theme toggle component is pre-configured and persists user preference to localStorage.

## Internationalization

Add or edit translations in `messages/`:

```json
// messages/en.json
{
  "auth.signIn.title": "Hello there!"
}
```

Access translations in components:

```tsx
import { m } from '#/paraglide/messages'
;<h1>{m['auth.signIn.title']()}</h1>
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Commit using `pnpm commit` for conventional commits
4. Push and open a PR

Vite+ Git hooks run staged checks before commits, validate commit messages, and run checks, tests, and a production build before pushes.

## Support This Project

If this starter saves you time, consider [sponsoring its development on GitHub](https://github.com/sponsors/PHNTMbandit). Sponsorship helps fund ongoing maintenance and improvements.

## License

[MIT](LICENSE)
