<!-- # 💬 Realtime Chat API — Group & Private Chat

Proyek ini adalah backend chat realtime menggunakan **Node.js**, **Express**, **TypeScript**, **Prisma**, **Zod**, dan **Socket.IO**. Mendukung komunikasi chat dalam **grup** maupun secara **privat (1-on-1)**, dengan validasi data, struktur database relasional, dan koneksi realtime antar pengguna.

---

## 🚀 Fitur

- 🧑‍🤝‍🧑 Group Chat: Buat grup, kirim pesan ke anggota
- 👥 Private Chat: Obrolan pribadi antara dua user
- 🔄 Realtime via Socket.IO
- ✅ Validasi input dengan Zod
- 🗃 ORM Prisma untuk pengelolaan database
- ⚡ Dibangun dengan TypeScript dan Express

---

## 🧰 Teknologi yang Digunakan

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- Zod (validator)
- Socket.IO (realtime)
- SQLite (default, bisa diganti PostgreSQL/MySQL)

--- -->

## 📦 Instalasi & Setup

### 1. Clone Repo dan Install Dependency

```bash
git clone https://github.com/your-org/realtime-chat-api.git
cd realtime-chat-api
```
Install package
```
npm install
```

### 2. Buat file ".env" pada root project
Isi dari file .env chat saja
### 3. Buat database (mysql) dengan nama: pekanit
### 4. Migrasi Prisma
Jalankan pada terminal:
```
npx prisma migrate dev --create-only --name init
```
Akses file migration.sql pada folder prisma/migrations/..._init.

Pergi pada query pembuatan tabel "user_profile" lalu paste query berikut pada bagian paling bawah.
```
CREATE SPATIAL INDEX `idx_user_profile_position` ON `user_profile` (`position`);
```
Lalu
```
npx prisma migrate dev --name add_user_profile_table
npx prisma generate
```
### 5. Dokumentasi API
1. Install ekstension "OpenAPI (Swagger) Editor"
2. Lalu cek file api-spec.json
3. Jalankan file tersebut menggunakan Open Api Swagger (Pakai Preview)

### 6. Dahs
