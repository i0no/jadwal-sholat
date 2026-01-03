# 🕋 Sholatdulu
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
- `/public/index.html`
- `/functions/index.js` 
- `netlify.toml`

### Konfigurasi Netlify
Untuk performa optimal, atur versi Node.js di environment variabel Netlify:
```env
NODE_VERSION = 22
```

### 🛠️ Instalasi & Persiapan
Jika Anda ingin menjalankan proyek ini secara lokal:

Clone repositori ini:

```Bash
git clone https://github.com/username-anda/nama-repo.git
cd nama-repo
```

Struktur Folder: Pastikan struktur folder Anda seperti ini:

```Plaintext
├── functions/
│   └── index.js       # Netlify Function (Backend)
├── public/
│   └── index.html     # Tampilan Utama (Frontend)
├── netlify.toml       # Konfigurasi Redirect & Functions
└── package.json
```

### Deploy ke Netlify:

Hubungkan repositori GitHub Anda ke Netlify.

Pastikan Build Command dikosongkan (jika menggunakan HTML statis).

Pastikan Publish directory diarahkan ke folder public.

Set variabel lingkungan (Environment Variable) NODE_VERSION ke 20 atau 22 di panel kontrol Netlify.

## 📝 Catatan Teknis
Aplikasi ini menggunakan Netlify Functions sebagai bridge (jembatan) untuk menghindari masalah keamanan atau pembatasan akses langsung dari sisi klien.

Pencarian: Menggunakan debounce selama 300ms untuk menghemat kuota pemanggilan API saat pengguna mengetik.

Zona Waktu: Menggunakan getTimezoneOffset() dari browser untuk menentukan label waktu (WIB/WITA/WIT) secara dinamis.

## 🤝 Kontribusi
Kontribusi selalu terbuka! Jika Anda ingin meningkatkan fitur (misalnya: menambahkan notifikasi Adzan atau dukungan multibahasa), silakan lakukan fork dan buat pull request.

## 📄 Lisensi
Proyek ini dilisensikan di bawah MIT License.

Dibuat dengan ❤️ untuk umat Muslim di Indonesia.
