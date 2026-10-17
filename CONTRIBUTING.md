# Contributing

Thanks for helping improve Ixia Starter and `create-ixia`. Issues and pull requests are welcome.

## Before You Start

For substantial changes, open an issue first to discuss the proposed approach. Keep pull requests focused, describe the user-visible effect, and include tests or steps to verify behavioral changes.

## Development Setup

Use Node.js 24 or newer and pnpm. From the repository root, install dependencies:

```bash
vp install
```

Before opening a pull request, run the checks relevant to your change:

```bash
vp check
vp test
pnpm --filter create-ixia build
```

The CLI build is especially relevant when changing files under `packages/create-ixia` or its templates. Pull requests should target `main`.

## Commit Messages

Use Conventional Commit messages because release versions and notes are generated from commit history. Examples:

```text
feat(cli): add a template option
fix(scaffold): preserve existing files
docs: clarify setup instructions
```

Use `!` or a `BREAKING CHANGE:` footer for breaking changes.
