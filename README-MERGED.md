# Kisúj SkillForge - Full Stack Application

Egy modern kihíváskezelő alkalmazás Angular frontend és Laravel backend technológiákkal.

---

## Projekt struktúra

```
Kis-j-SkillForge/
├── Kis-j-SkillForge-master/    # Laravel Backend (API)
└── kisujForgeFrontend/          # Angular Frontend
```

---

## Telepítés

### Előfeltételek
- **Node.js** (v18+) - [Letöltés](https://nodejs.org/)
- **Angular CLI** - `npm install -g @angular/cli`
- **PHP** (v8.2+) - [Letöltés](https://www.php.net/)
- **Composer** - [Letöltés](https://getcomposer.org/)
- **MySQL** - Adatbázis szerver

---

### 1. Repository klónozása

```bash
git clone https://github.com/misk0lc/Kis-j-SkillForge.git
cd Kis-j-SkillForge
git checkout merged
```

---

### 2. Backend telepítés (Laravel)

```bash
cd Kis-j-SkillForge-master

# Függőségek telepítése
composer install

# .env fájl létrehozása
cp .env.example .env

# Alkalmazás kulcs generálása
php artisan key:generate

# Adatbázis beállítása (.env fájlban)
# Szerkeszd a DB_* változókat

# Migrációk és seeder futtatása
php artisan migrate:fresh --seed

# Backend indítása
php artisan serve
```

Backend elérhető: **http://127.0.0.1:8000**

---

### 3. Frontend telepítés (Angular)

Új terminálban:

```bash
cd kisujForgeFrontend

# Függőségek telepítése
npm install

# Frontend indítása
npm start
# vagy
ng serve
```

Frontend elérhető: **http://localhost:4200**

---

## API végpontok

| Metódus | Végpont                    | Leírás                      |
|---------|----------------------------|-----------------------------|
| GET     | `/api/challenges`          | Összes kihívás lekérése     |
| GET     | `/api/challenges/{id}`     | Egy kihívás lekérése ID-val |
| POST    | `/api/challenges`          | Új kihívás létrehozása      |
| PATCH   | `/api/challenges/{id}`     | Kihívás frissítése          |
| DELETE  | `/api/challenges/{id}`     | Kihívás törlése             |

### Backend adatformátum (snake_case):
```json
{
  "id": 1,
  "title": "Challenge címe",
  "category": "CODE",
  "difficulty": "MEDIUM",
  "reward_points": 150,
  "start_date": "2026-01-15",
  "end_date": "2026-02-15",
  "is_active": true,
  "description": "Leírás"
}
```

---

## Technológiák

### Backend
- Laravel 11
- MySQL
- Laravel Sanctum (API token kezelés)
- CORS engedélyezve

### Frontend
- Angular 19
- TypeScript
- Standalone components
- HttpClient
- Reactive Forms

---

## Fejlesztés

### Backend watch mód
```bash
php artisan serve --host=0.0.0.0 --port=8000
```

### Frontend watch mód
```bash
ng serve --open
```

---

## Hibaelhárítás

### CORS hibák
A backend `config/cors.php` fájlban minden domain engedélyezve van (`'allowed_origins' => ['*']`).

### Adatbázis hiba
Ellenőrizd a `.env` fájlban az adatbázis beállításokat.

### Port foglalt
Ha a 4200 vagy 8000 port foglalt, módosítsd:
- Frontend: `ng serve --port 4201`
- Backend: `php artisan serve --port 8001`

---

## Licenc

Ez a projekt oktatási célokat szolgál.

---

## Köszönet

Köszönjük, hogy használod a Kisúj SkillForge-ot!
