<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Kis-j-SkillForge — Laravel backend

Short description

This repository contains the Laravel backend for the Kis-j-SkillForge project. It provides a REST API for managing learning challenges (CRUD) and token-based authentication (Laravel Sanctum).

## Contents
- API endpoints for `challenges` (public read, authenticated write)
- Authentication endpoints (register, login, logout)
- Database migrations and seeders (sample challenges + test user)
- Postman collection: `postman_collection.json` (in project root)

## Prerequisites
- Windows with XAMPP (PHP CLI available at e.g. `C:\xampp\php\php.exe`)
- Composer (v2+)
- Node / npm (for optional frontend build tasks)
- MySQL (XAMPP) or another supported database
- Git (HTTPS or SSH configured)

## Quick setup (developer machine)

1. Clone or open the repository in your workspace.

2. Install PHP dependencies:
```powershell
cd C:\xampp\htdocs\kisujForgeBackend\kisujForgeBackend
composer install
```

3. Copy `.env` and set database credentials (example for XAMPP):
```powershell
copy .env.example .env
# edit .env: set DB_DATABASE=kisujforge, DB_USERNAME=your_db_user, DB_PASSWORD=your_db_pass, APP_URL=http://127.0.0.1:8000
php artisan key:generate
```

4. Create the database (example using MySQL):
- Using phpMyAdmin or mysql client create database `kisujforge` and a DB user with privileges.

5. Run migrations + seeders:
```powershell
php artisan migrate --force
php artisan db:seed
```
Note: some migrations (Sanctum) may already be applied depending on prior runs. If you see table-exists errors check `migrations` table and `php artisan migrate:status`.

6. Start the local server:
```powershell
php artisan serve
# Open http://127.0.0.1:8000
```

## Auth and testing
- The API uses Laravel Sanctum (token-based). Use the `POST /api/register` or `POST /api/login` endpoints to obtain a token.
- A seeded test user exists (if seeders were run): `test@example.com` / `password`.
- Import `postman_collection.json` and set the `{{base_url}}` collection variable to `http://127.0.0.1:8000`.

## Git and remote notes
- This project has been pushed to the remote `origin` branch `backend-api`. If you need to push, make sure you are authenticated with GitHub (PAT or SSH):
  - HTTPS pushes require a GitHub Personal Access Token for authentication.
  - SSH requires a configured SSH key and `git@github.com:owner/repo.git` remote URL.
- There is an existing remote history on `backend-api`. If you want to rewrite remote history (destructive), coordinate with the team and create backups first.

## Useful commands
```powershell
# show remotes
git remote -v
# push the current branch to origin
git push -u origin HEAD
# push and force (destructive) - USE WITH CAUTION
git push --force origin HEAD:master
```

## Troubleshooting
- "git push" authentication failed: create a GitHub PAT and use it as password for HTTPS or switch remote to SSH and ensure your public key is added to GitHub.
- Composer errors about zip extension: enable the PHP zip extension in `php.ini` or install required PHP extensions via XAMPP.
- Migration errors about existing tables: inspect the `migrations` table and the database state; if necessary, back up DB and adjust migration records.

## Contact / next steps
- If you want me to: set up SSH remote, force-clean remote history (I will create a backup first), or create a PR from `backend-api` to `master`, tell me which action to perform and I will run the exact commands.
