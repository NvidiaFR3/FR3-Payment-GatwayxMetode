# 💳 Dashboard Payment Gateway

Website ini menyediakan **dashboard pembayaran manual** (DANA, Gopay, OVO, QRIS) serta **payment gateway otomatis** terhubung dengan API pihak ketiga dan notifikasi Telegram Bot.

---

## 📂 Struktur Folder
.
├── index.html # Dashboard utama
├── donate/
│ └── index.html # Halaman Payment Gateway Otomatis
├── assets/
│ ├── css/
│ │ └── style.css # Style utama (tema neon dark classic)
│ ├── img/
│ │ └── qris.png # QRIS statis
│ └── js/
│ ├── settings.js # Konfigurasi bot Telegram & API
│ └── main.js # Script utama (toggle, zoom, download, payment)
├── README.md
└── LICENSE

yaml
Salin kode

---

## 🚀 Fitur
- 📱 **Dashboard pembayaran manual**
  - DANA, Gopay (nomor tampil dengan klik kartu)
  - OVO (status tidak tersedia)
  - QRIS (tampilkan gambar QR, zoom, dan download)
- 🤖 **Payment Gateway Otomatis**
  - Generate QR pembayaran (kadaluarsa 5 menit)
  - Cek status transaksi setiap detik
  - Kirim notifikasi ke Telegram Bot jika sukses
- 🎨 **UI/UX**
  - Tema **light neon dark**
  - Animasi transisi slide & fade

---

## ⚙️ Konfigurasi
1. Buka `assets/js/settings.js`
2. Isi variabel berikut:
   ```javascript
   export const TELEGRAM_BOT_TOKEN = "ISI_TOKEN_BOTMU";
   export const TELEGRAM_CHAT_ID   = "ISI_ID_OWNERMU";
Simpan dan jalankan website.

🔌 API yang Digunakan
Payment gateway otomatis ini menggunakan API dari nvidiabotz.xyz.

1️⃣ Create Payment
Digunakan untuk membuat transaksi baru.

arduino
Salin kode
POST https://api.nvidiabotz.xyz/orderkuota/createpayment?amount={NOMINAL}&codeqr={DATA_QRIS}
Contoh respon:

json
{
  "creator": "FR3HOSTING",
  "status": true,
  "result": {
    "idtransaksi": "FR3DEV-B52D",
    "jumlah": "160000",
    "expired": "2025-07-30T04:00:27.460Z",
    "imageqris": {
      "url": "https://img1.pixhost.to/images/7583/626966319_fr3.png"
    }
  }
}
⚠️ Catatan: expired hanya berlaku 5 menit.

2️⃣ Cek Mutasi (Status Transaksi)
Digunakan untuk mengecek apakah transfer QRIS sudah masuk.

nginx
Salin kode
GET https://api.nvidiabotz.xyz/orderkuota/mutasiqr?username=USERNAME&token=TOKEN
Contoh respon:

json
Salin kode
{
  "creator": "FR3HOSTING",
  "status": true,
  "result": [
    {
      "id": 163500122,
      "kredit": "5000",
      "keterangan": "NOBU / KH*********",
      "tanggal": "07/08/2025 16:36",
      "status": "IN",
      "brand": {
        "name": "DANA",
        "logo": "https://app.orderkuota.com/assets/qris/dana.png"
      }
    }
  ]
}
Sistem akan polling setiap 1 detik sampai status transaksi terdeteksi masuk.

☕ Dukung Developer
Kalau project ini bermanfaat, kamu bisa traktir kopi agar development terus jalan 🚀

🔗 Scan QRIS Berikut:
<p align="center"> <img src="assets/img/qris.png" alt="QRIS Beli Kopi" width="250"/> </p>
