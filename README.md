# Dawn UI Starter

A modern, full-stack React starter template with authentication, theming, internationalization, and best-in-class developer experience.

## Features

### Frontend

- **React 19** with the new React Compiler for automatic memoization
- **TanStack Router** — Type-safe file-based routing with SSR support
- **TanStack Query** — Powerful data fetching and caching
- **TanStack Form** — Type-safe form handling with server actions
- **TanStack Table** — Headless table utilities
- **Dawn UI** — Modern component library with light/dark mode theming
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

- **OXC** — Lightning-fast formatting and linting (oxfmt + oxlint)
- **Vitest** — Fast unit and integration testing with Playwright browser tests
- **Storybook 10** — Component development and visual testing
- **Lefthook** — Git hooks for pre-commit formatting, linting, and testing
- **Commitizen** — Conventional commits with interactive prompts
- **GitHub Actions** — CI workflow for PRs (format, lint, test, build)

## Getting Started

### Prerequisites

- [Node.js 24+](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn/bun

### 1. Clone the Repository

```bash
git clone https://github.com/PHNTMbandit/dawn-ui-starter.git
cd dawn-ui-starter
```

### 2. Create a Neon Database

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy your connection string from the dashboard

### 3. Configure Environment Variables

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

### 4. Install Dependencies

```bash
pnpm install
```

### 5. Set Up the Database

Generate and push the database schema:

```bash
pnpm db:generate
pnpm db:push
```

### 6. Generate Auth Tables

Better Auth requires additional tables for users, sessions, and accounts. Generate them:

```bash
pnpm dlx auth@latest generate
```

This creates auth schema in `src/db/`. Then push to your database:

```bash
pnpm db:push
```

### 7. Setup CI/CD

Install Lefthook for git hooks:

```bash
pnpm dlx lefthook install
```

### 8. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command            | Description                           |
| ------------------ | ------------------------------------- |
| `pnpm dev`         | Start development server on port 3000 |
| `pnpm build`       | Build for production                  |
| `pnpm preview`     | Preview production build              |
| `pnpm test`        | Run all tests                         |
| `pnpm fmt`         | Format code with oxfmt                |
| `pnpm lint`        | Lint code with oxlint                 |
| `pnpm storybook`   | Start Storybook on port 6006          |
| `pnpm db:studio`   | Open Drizzle Studio                   |
| `pnpm db:generate` | Generate database migrations          |
| `pnpm db:push`     | Push schema changes to database       |
| `pnpm db:migrate`  | Run database migrations               |

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

Lefthook will automatically format, lint, and test your code on commit and push.

## License

[MIT](LICENSE)
