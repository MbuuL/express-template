# Express Template

A minimal Express 5 + TypeScript starter with security middleware, linting, and hot reload.

## Stack

- **Runtime**: Node.js
- **Framework**: Express 5
- **Language**: TypeScript (strict, ES2022, NodeNext modules)
- **Package manager**: pnpm
- **Dev server**: nodemon + tsx (no build step needed for development)
- **Security**: Helmet, CORS
- **Linting**: ESLint (TS + JSON) + Prettier

## Project Structure

```
src/
├── index.ts          # App entry point — middleware setup, server start
├── router.ts         # API v1 routes
└── controllers/
    └── misc.ts       # Health and version controllers
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy environment file
cp .env.example .env

# Start development server
pnpm dev
```

The server starts on `http://localhost:9999` (or the port set in `.env`).

## Environment Variables

| Variable  | Default | Description        |
|-----------|---------|--------------------|
| `PORT`    | `3000`  | Port to listen on  |
| `VERSION` | `1.0.0` | API version string |

## API Endpoints

All routes are prefixed with `/api/v1`.

| Method | Path       | Description              |
|--------|------------|--------------------------|
| GET    | `/`        | Hello world              |
| GET    | `/health`  | Returns `{ status: "ok" }` |
| GET    | `/version` | Returns current version  |

## Scripts

| Command    | Description                          |
|------------|--------------------------------------|
| `pnpm dev` | Start dev server with hot reload     |
