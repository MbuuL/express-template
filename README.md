# Express Backend

An Express 5 + TypeScript backend with authentication, PostgreSQL via Drizzle ORM, security middleware, linting, and hot reload.

## Stack

- **Runtime**: Node.js
- **Framework**: Express 5
- **Language**: TypeScript (strict, ES2022, NodeNext modules)
- **Package manager**: pnpm
- **Dev server**: nodemon + tsx (no build step needed for development)
- **Database**: PostgreSQL + Drizzle ORM
- **Auth**: JWT + bcryptjs
- **Security**: Helmet, CORS
- **Linting**: ESLint (TS + JSON) + Prettier

## Project Structure

```
src/
├── index.ts              # App entry point — middleware setup, server start
├── router.ts             # API v1 routes
├── controllers/
│   ├── auth.ts           # Register and login controllers
│   └── misc.ts           # Health and version controllers
├── middlewares/
│   └── auth.ts           # JWT authentication middleware
└── db/
    ├── index.ts          # Database connection
    └── schema.ts         # Drizzle schema definitions
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy environment file
cp .env.example .env

# Push schema to database
pnpm db:push

# Start development server
pnpm dev
```

The server starts on `http://localhost:3000` (or the port set in `.env`).

## Environment Variables

| Variable        | Description                              |
|-----------------|------------------------------------------|
| `PORT`          | Port to listen on (default: `3000`)      |
| `VERSION`       | API version string (default: `1.0.0`)    |
| `DATABASE_URL`  | PostgreSQL connection URL                |
| `JWT_SECRET`    | Secret key for signing JWTs             |
| `CORS_ORIGIN`   | Allowed origin(s), comma-separated (default: `http://localhost:5173`) |

## API Endpoints

All routes are prefixed with `/api/v1`.

| Method | Path             | Auth | Description                  |
|--------|------------------|------|------------------------------|
| GET    | `/`              | No   | Hello world                  |
| GET    | `/health`        | No   | Returns `{ status: "ok" }`   |
| GET    | `/version`       | No   | Returns current version      |
| POST   | `/auth/register` | No   | Register a new user          |
| POST   | `/auth/login`    | No   | Login and receive a JWT      |
| GET    | `/check-auth`    | Yes  | Validate JWT and return user |

## Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `pnpm dev`        | Start dev server with hot reload     |
| `pnpm build`      | Compile TypeScript to `dist/`        |
| `pnpm db:generate`| Generate Drizzle migration files     |
| `pnpm db:migrate` | Run pending migrations               |
| `pnpm db:push`    | Push schema directly to database     |
| `pnpm db:studio`  | Open Drizzle Studio                  |
