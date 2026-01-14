Kis-j-SkillForge — Leírások és gyors referenciák

Ez a dokumentum rövid, gyakorlatias leírásokat tartalmaz a projekt fontos részeiről: cél, architektúra, API, adatmodell, telepítés és gyakori problémák. Cél: gyors eligazítás a backend kódhoz és a fejlesztési folyamathoz.

1. Projekt cél
- Webes backend, amely „challenge” (tanulási kihívás) entitások CRUD kezelését végzi.
- Token alapú autentikáció Laravel Sanctum segítségével.
- Egyszerű REST API a frontend vagy Postman tesztek számára.

2. Főbb komponensek
- Laravel alkalmazás (app/Models, app/Http/Controllers, routes/api.php)
- Migrations: `database/migrations/` — `create_challenges_table`, kiegészítő mezők migrációi
- Seeders: `database/seeders/ChallengeSeeder.php`, `DatabaseSeeder.php` (minták + teszt user)
- Auth: `app/Http/Controllers/Api/AuthController.php` (register/login/logout), `User` modell HasApiTokens
- Postman gyűjtemény: `postman_collection.json`

3. API gyorsreferencia
Alap URL: http(s)://{host}/api
- POST /api/register — regisztráció, visszaad token-t
- POST /api/login — bejelentkezés, visszaad token-t
- POST /api/logout — logout (auth required)
- GET /api/challenges — lista (public)
- GET /api/challenges/{id} — részletek (public)
- POST /api/challenges — létrehozás (auth:sanctum)
- PUT /api/challenges/{id} — frissítés (auth:sanctum)
- DELETE /api/challenges/{id} — törlés (auth:sanctum)

Validációs szabályok (összefoglaló)
- title: required, string, max 255
- description: required, string
- difficulty: enum (EASY, MEDIUM, HARD)
- category: enum (CODE, DESIGN, DATA, SOFT)
- reward_points / points: integer >= 0
- start_date / end_date: date (opcionális)

4. Adatmodell (összefoglaló)
- Challenge (táblázat: `challenges`)
  - id, title, description, difficulty, points (reward_points), category, start_date, end_date, is_active, timestamps
- User (Laravel default) — HasApiTokens trait a token alapú auth-hoz

5. Telepítés (rövid lépések)
- Előfeltételek: PHP (XAMPP), Composer, MySQL (XAMPP), Node/npm (opcionális), Git
- Gyors parancsok (PowerShell):
  - composer install
  - copy .env.example .env
  - php artisan key:generate
  - szerkeszd `.env` fájlt: DB_CONNECTION, DB_DATABASE=kisujforge, DB_USERNAME, DB_PASSWORD, APP_URL
  - php artisan migrate --force
  - php artisan db:seed
  - php artisan serve

6. Helyi tesztelés és Postman
- Importáld a `postman_collection.json` fájlt.
- Állítsd a `{{base_url}}` változót: `http://127.0.0.1:8000`.
- Regisztrálj / lépj be, szerezd meg a `plainTextToken`-t, majd állítsd be az `Authorization: Bearer {{token}}` fejlécet a védett végpontokhoz.

7. Git és távoli repo megjegyzések
- Remote origin: `https://github.com/misk0lc/Kis-j-SkillForge.git` (HTTPS) vagy SSH változat.
- Figyelem a branch-nevekre:
  - Ha létezik `backend` branch a távoli repóban, akkor a `backend/api` push sikertelen lesz (namespace konfliktus). Használj `backend-api` jellegű, nincs-`/` nevet.
- Hitelesítés: HTTPS -> GitHub PAT; SSH -> SSH kulcs a GitHub profilba.

8. Gyakori hibák és megoldások
- php vagy composer nem található: add `C:\xampp\php` a rendszer PATH-jához és indítsd újra a shell-t.
- Composer zip error: engedélyezd a `zip` extension-t a `php.ini` fájlban.
- Migrate hibák (table exists): ellenőrizd a `migrations` táblát, ha kell töröld a táblákat és futtasd újra vagy jelöld meg a migrációkat futtatottnak (óvatosan).
- `fatal error in commit_refs` pushnál: ne próbálj `backend/api`-t nyitni ha van `backend` branch; töröld/átnevezd a remote `backend`-et vagy válassz más branch nevet.

9. Biztonság és jó gyakorlatok
- Ne push-olj titkos értékeket (`.env`); használj `.env.example` utasításokat.
- Ha mégis történelmi tisztítást végzel, készíts backup-branch-et vagy tag-et a remote-on, mielőtt force-push-olsz.

10. További segédletek, amiben segíthetek
- SSH remote beállítása és teszt push
- PR létrehozása `backend-api` -> `master`
- Remote történet tisztítása biztonsági mentéssel
- Ellenőrző parancsok vagy konkrét hibajavítások futtatása a gépeden


---
Fájl: `DESCRIPTIONS.md` létrehozva a repo gyökerében. Ha szeretnéd, hozzáadok példákat (curl, Postman request formátum), vagy lefordítom angolra is.
