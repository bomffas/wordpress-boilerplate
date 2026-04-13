![image](https://s.w.org/style/images/about/WordPress-logotype-standard.png)

# WordPress Boilerplate

A Docker-based WordPress boilerplate with modern frontend tooling — Vite, TypeScript, and Sass.

## Tech Stack

- **Backend:** WordPress, MariaDB, Docker Compose
- **Frontend:** Vite, TypeScript, Sass, PostCSS
- **Libraries:** jQuery, Slick Carousel, Motion
- **Code Quality:** Stylelint, Prettier, Biome, Commitlint, Lefthook

## Prerequisites

- [Docker](https://www.docker.com/) & Docker Compose
- [Node.js](https://nodejs.org/) v22.12.0 (see `.nvmrc`)
- [pnpm](https://pnpm.io/)

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd wordpress-boilerplate
```

2. Create your environment file:

```bash
cp .env.example .env
```

3. Update `.env` with your project values (`APP_NAME`, `DB_NAME`, `DB_TABLE_PREFIX`).

4. Start the Docker containers:

```bash
docker compose up -d
```

5. Install dependencies:

```bash
pnpm install:deps
```

6. Start the theme development server:

```bash
cd src/themes/default-theme
pnpm dev
```

7. Access the services:

| Service    | URL                    |
| ---------- | ---------------------- |
| WordPress  | http://localhost       |
| phpMyAdmin | http://localhost:8080  |

## Project Structure

```
.
├── config/                  # PHP and phpMyAdmin configuration
├── database/                # MariaDB data persistence
├── dump/                    # Database backups
├── src/
│   ├── themes/
│   │   └── default-theme/   # Custom WordPress theme
│   │       ├── assets/
│   │       │   ├── fonts/
│   │       │   ├── images/
│   │       │   ├── sass/    # SCSS stylesheets
│   │       │   └── ts/      # TypeScript source
│   │       ├── dist/        # Compiled output
│   │       ├── views/       # Template files
│   │       └── functions.php
│   ├── plugins/
│   ├── languages/
│   └── uploads/
├── docker-compose.yml
└── package.json
```

## Theme Development

Run these scripts from `src/themes/default-theme/`:

| Script              | Description                              |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Start Vite development server            |
| `pnpm build`        | Compile TypeScript and build with Vite   |
| `pnpm watch`        | Build and watch for changes              |
| `pnpm sass:build`   | Compile SCSS to CSS with PostCSS         |
| `pnpm sass:watch`   | Watch and compile SCSS                   |
| `pnpm browser-sync` | Live reload for `.ts`, `.scss`, `.twig`  |

## Code Quality

| Tool        | Purpose                    | Command                   |
| ----------- | -------------------------- | ------------------------- |
| Stylelint   | SCSS linting               | `pnpm stylelint:scss`     |
| Prettier    | SCSS formatting            | `pnpm format:check`       |
| Commitlint  | Conventional commit format | Runs via Lefthook on commit |
| Lefthook    | Git hooks manager          | Automatic on commit       |

## Environment Variables

Defined in `.env.example`:

| Variable          | Description                  | Default         |
| ----------------- | ---------------------------- | --------------- |
| `APP_NAME`        | Project/container name       | `clientProjet`  |
| `DB_HOST`         | Database host                | `db`            |
| `DB_NAME`         | Database name                | `clientProjet`  |
| `DB_USER`         | Database user                | `dbuser`        |
| `DB_PASS`         | Database password            | `dbpass`        |
| `DB_ROOT_PASSWORD`| MariaDB root password        | `rootpass`      |
| `DB_TABLE_PREFIX` | WordPress table prefix       | `clientProjet_` |
