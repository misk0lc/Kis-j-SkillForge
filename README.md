# Kisúj SkillForge

Egy modern kihíváskezelő alkalmazás Angular frontend és Laravel backend technológiákkal.

---

## Tartalomjegyzék

- [Projekt leírása](#projekt-leírása)
- [Technológiák](#technológiák)
- [Telepítés](#telepítés)
  - [Frontend telepítés](#1-frontend-telepítés-angular)
  - [Backend telepítés](#2-backend-telepítés-laravel)
- [Funkciók](#funkciók)
- [API végpontok](#api-végpontok)
- [Használat](#használat)
- [Fejlesztők](#fejlesztők)

---

## Projekt leírása

A **Kisúj SkillForge** egy kihíváskezelő platform, ahol felhasználók különböző nehézségű és kategóriájú kihívásokat hozhatnak létre, kezelhetnek és követhetnek nyomon.

### Funkciók:
- Kihívások létrehozása, szerkesztése, törlése
- Dashboard statisztikákkal (aktív kihívások, pontok)
- Szűrés kategória és nehézség szerint
- Reszponzív, modern UI
- Pontrendszer

---

## Technológiák

### Frontend
- **Framework:** Angular 19
- **Nyelv:** TypeScript
- **Styling:** CSS3
- **HTTP Client:** Angular HttpClient

### Backend
- **Framework:** Laravel 11
- **Adatbázis:** MySQL / SQLite
- **API:** RESTful API

---

## Telepítés

### Előfeltételek
- **Node.js** (v18 vagy újabb) - [Letöltés](https://nodejs.org/)
- **Angular CLI** - `npm install -g @angular/cli`
- **PHP** (v8.2 vagy újabb) - [Letöltés](https://www.php.net/)
- **Composer** - [Letöltés](https://getcomposer.org/)
- **Git** - [Letöltés](https://git-scm.com/)

---

### 1. Frontend telepítés (Angular)

#### 1.1 Repository klónozása
```bash
git clone https://github.com/misk0lc/Kis-j-SkillForge.git
cd Kis-j-SkillForge
```

#### 1.2 Frontend branch-re váltás
```bash
git checkout frontend
```

#### 1.3 Navigálás a frontend mappába
```bash
cd kisujForgeFrontend
```

#### 1.4 Függőségek telepítése
```bash
npm install
```

#### 1.5 Fejlesztői szerver indítása
```bash
ng serve
```

Az alkalmazás elérhető lesz: **http://localhost:4200**

#### 1.6 Production build (opcionális)
```bash
ng build --configuration production
```
A build kimenete a `dist/` mappában lesz.

---

### 2. Backend telepítés (Laravel)

#### 2.1 Backend branch-re váltás
```bash
git checkout backend
```

#### 2.2 Függőségek telepítése
```bash
composer install
```

#### 2.3 .env fájl létrehozása
```bash
cp .env.example .env
```

#### 2.4 Alkalmazás kulcs generálása
```bash
php artisan key:generate
```

#### 2.5 Adatbázis beállítása
Szerkeszd a `.env` fájlt és állítsd be az adatbázis kapcsolatot:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=skillforge
DB_USERNAME=root
DB_PASSWORD=
```

#### 2.6 Adatbázis migrációk futtatása
```bash
php artisan migrate
```

#### 2.7 Backend szerver indítása
```bash
php artisan serve
```

Az API elérhető lesz: **http://localhost:8000/api**

---

## Funkciók

### 1. Dashboard
- Aktív kihívások száma
- Összes megszerezhető pont
- Összes kihívás áttekintése
- Gyors navigáció

### 2. Kihívások listázása
- Grid layout
- Szűrés nehézség szerint (Könnyű, Közepes, Nehéz)
- Szűrés kategória szerint (Kódolás, Design, Adattudomány, Soft skill)
- Színkódolás nehézség szerint:
  - **Könnyű** - Zöld
  - **Közepes** - Sárga/Narancs
  - **Nehéz** - Piros

### 3. Kihívás részletei
- Teljes leírás megjelenítése
- Kategória, nehézség, pontok
- Kezdés és befejezés dátuma
- Szerkesztés és törlés lehetőség

### 4. Kihívás létrehozása / szerkesztése
- Űrlap validáció
- Dátum ellenőrzés (befejezés nem lehet korábbi, mint kezdés)
- Aktív/inaktív státusz beállítása
- Kategória és nehézség kiválasztása

---

## API végpontok

| Metódus | Végpont                    | Leírás                      |
|---------|----------------------------|-----------------------------|
| GET     | `/api/challenges`          | Összes kihívás lekérése     |
| GET     | `/api/challenges/{id}`     | Egy kihívás lekérése ID-val |
| POST    | `/api/challenges`          | Új kihívás létrehozása      |
| PATCH   | `/api/challenges/{id}`     | Kihívás frissítése          |
| DELETE  | `/api/challenges/{id}`     | Kihívás törlése             |

### Példa kérés (POST /api/challenges):
```json
{
  "title": "React alapok elsajátítása",
  "category": "CODE",
  "difficulty": "MEDIUM",
  "rewardPoints": 150,
  "startDate": "2026-01-15",
  "endDate": "2026-02-15",
  "isActive": true,
  "description": "Tanulj meg React-et a dokumentáció alapján."
}
```

---

## Használat

### Kihívás létrehozása
1. Kattints az **"Új kihívás"** gombra
2. Töltsd ki az űrlapot
3. Kattints a **"Létrehozás"** gombra

### Kihívás szerkesztése
1. Kattints a kihívás kártyán a **"Szerkeszt"** gombra
2. Módosítsd az adatokat
3. Kattints a **"Frissítés"** gombra

### Kihívás törlése
1. Kattints a **"Töröl"** gombra
2. Erősítsd meg a törlést

---

## Fejlesztők

- **Frontend fejlesztő:** [Név]
- **Backend fejlesztő:** [Név]

---

## Licenc

Ez a projekt oktatási célokat szolgál.

---

## Hibajelentés

Ha hibát találsz, kérlek nyiss egy **Issue**-t a GitHub-on!

---

## Köszönet

Köszönjük, hogy használod a Kisúj SkillForge-ot!
