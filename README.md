# 🕋 Jadwal Sholat Indonesia Modern

Aplikasi web responsif untuk memantau jadwal sholat di seluruh kota di Indonesia secara *real-time*. Proyek ini menggunakan arsitektur **Serverless** untuk memastikan performa tinggi dan data yang akurat.

## ✨ Fitur Unggulan

* 🔍 **Pencarian Autocomplete**: Akses ke database lengkap seluruh kota di Indonesia tanpa limit.
* 🕒 **Jam Digital Live**: Penunjuk waktu presisi yang diperbarui setiap detik.
* ⏳ **Sistem Countdown**: Mengetahui sisa waktu tepat ke jam sholat berikutnya.
* 🌍 **Smart Timezone**: Deteksi otomatis label waktu (**WIB**, **WITA**, **WIT**) berdasarkan lokasi perangkat pengguna.
* 🎨 **Modern UI**: Desain bersih dengan kartu informatif dan highlight otomatis pada waktu sholat yang aktif.

## 🚀 Cara Menjalankan

### Persiapan File
Pastikan struktur direktori Anda sesuai dengan standar Netlify:
- `/public/index.html` - Antarmuka pengguna.
- `/functions/index.js` - Logika pemanggilan API (Backend).
- `netlify.toml` - Konfigurasi deploy.

### Konfigurasi Netlify
Untuk performa optimal, atur versi Node.js di environment variabel Netlify:
```env
NODE_VERSION = 22
