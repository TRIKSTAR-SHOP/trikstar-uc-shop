# TRIKSTAR TopUp UC PUBG

Website top-up UC PUBG Mobile cepat, aman, dan terpercaya.  
Pembayaran lengkap (QRIS, e-wallet, transfer bank), order otomatis, notifikasi WhatsApp admin via API Fonnte.

---

## Struktur Folder

```
ProjectTopUpTRIKSTAR/
├── frontend/
│   └── index.html
├── backend/
│   ├── server.js
│   └── package.json
└── README.md
```

---

## Cara Menjalankan

### 1. Jalankan Backend
```bash
cd backend
npm install
node server.js
```
- **Edit**: Isi nomor admin & Fonnte API Key di `backend/server.js`.

### 2. Jalankan Frontend
- Buka `frontend/index.html` di browser.

---

## Setting Fonnte
- Daftar & login di [fonnte.com](https://fonnte.com).
- Buat device, ambil API Key.
- Isi di `backend/server.js` pada bagian:
  ```js
  const ADMIN_WA = '6285180771860';
  const FONNTE_TOKEN = 'zMobWTgHpWbr9zZgNctP';
  ```

---

## Fitur
- Pilihan UC Fast, Slow, Sultan.
- Admin dashboard lokal.
- Notifikasi WhatsApp otomatis ke admin (via backend).
- Tampilan responsif dan modern.

---

## Lisensi
MIT