# PRD — Website Elang Dua 3D Motion

## 1. Informasi Dokumen

- Nama proyek: Elang Dua Website Rebuild
- Jenis proyek: Company profile dan product showcase
- Platform: Website responsif
- Status: Build from scratch
- Bahasa utama: Bahasa Indonesia
- Target deployment: Vercel
- Framework utama: Next.js
- Styling: Tailwind CSS
- Animasi: Motion for React
- 3D: React Three Fiber dan Drei
- Coding agent: Codex di VS Code

---

## 2. Ringkasan Produk

Website Elang Dua akan dibangun ulang dari nol sebagai website perusahaan yang modern, premium, cepat, responsif, dan memiliki pengalaman visual 3D yang halus.

Website harus menampilkan identitas merek Elang Dua, sejarah perusahaan, daftar produk, keunggulan, area distribusi, lokasi, serta jalur kontak yang jelas.

Bagian hero harus menjadi fokus utama dengan tampilan produk 3D bergerak yang tetap ringan dan tidak mengganggu performa.

Website harus tetap dapat digunakan dengan baik pada perangkat yang tidak mendukung WebGL atau perangkat dengan performa rendah.

---

## 3. Tujuan Produk

1. Membuat citra Elang Dua terlihat lebih modern dan profesional.
2. Memperkenalkan produk secara visual dan mudah dipahami.
3. Menampilkan produk unggulan melalui pengalaman 3D interaktif.
4. Mempermudah calon pelanggan, distributor, dan mitra menghubungi perusahaan.
5. Meningkatkan kredibilitas perusahaan melalui tampilan, sejarah, dan informasi yang konsisten.
6. Menyediakan website yang cepat, responsif, dan SEO-friendly.
7. Memudahkan pengembangan lanjutan oleh Codex di VS Code.

---

## 4. Sasaran Pengguna

### 4.1 Konsumen umum

Pengguna yang ingin mengetahui produk Elang Dua, jenis produk, kegunaan, dan cara membelinya.

### 4.2 Distributor atau reseller

Pengguna yang ingin mengetahui profil perusahaan, area distribusi, dan cara menghubungi bagian penjualan.

### 4.3 Mitra bisnis

Pengguna yang ingin menilai kredibilitas perusahaan dan membuka peluang kerja sama.

### 4.4 Pengunjung lokal

Pengguna yang mencari alamat, lokasi Google Maps, nomor WhatsApp, atau media sosial resmi.

---

## 5. Ruang Lingkup Versi Pertama

Website versi pertama berupa single-page company profile dengan beberapa section utama.

### Section wajib

1. Navbar
2. Hero dengan produk 3D
3. Tentang Elang Dua
4. Produk unggulan
5. Keunggulan produk
6. Sejarah perusahaan
7. Area distribusi
8. Lokasi perusahaan
9. Kontak
10. Footer

### Fitur wajib

1. Produk 3D berputar perlahan.
2. Produk 3D bereaksi ringan terhadap gerakan pointer.
3. Animasi masuk saat scroll.
4. Navigasi smooth scroll.
5. Tampilan responsif desktop, tablet, dan mobile.
6. Tombol WhatsApp.
7. Tautan Google Maps.
8. Tautan Instagram dan Facebook.
9. Form kontak.
10. Fallback gambar jika 3D gagal dimuat.
11. SEO metadata dasar.
12. Open Graph image.
13. Loading state untuk aset 3D.
14. Halaman 404 sederhana.

---

## 6. Di Luar Ruang Lingkup Versi Pertama

Fitur berikut tidak perlu dibuat pada versi pertama:

1. Login admin.
2. Dashboard CMS.
3. E-commerce.
4. Keranjang belanja.
5. Pembayaran online.
6. Akun pelanggan.
7. Sistem distributor kompleks.
8. Multi-language.
9. Blog dinamis.
10. Integrasi database.
11. Integrasi marketplace.
12. AR product preview.

Fitur-fitur tersebut dapat ditambahkan pada fase berikutnya.

---

## 7. Arah Desain

### 7.1 Karakter visual

- Modern
- Premium
- Bersih
- Hangat
- Kuat
- Berkarakter lokal
- Tidak terlihat seperti template generik
- Tidak terlalu ramai
- Fokus pada produk

### 7.2 Palet warna awal

Gunakan CSS variables agar warna mudah diubah.

- Merah utama: `#8F1D1D`
- Merah gelap: `#4E0E0E`
- Emas: `#D2A84A`
- Krem: `#F6F0E4`
- Putih: `#FFFFFF`
- Hitam lembut: `#171717`
- Abu teks: `#6B6B6B`

### 7.3 Tipografi

Gunakan font Google yang mudah dibaca.

Rekomendasi:

- Heading: `Playfair Display` atau `Cormorant Garamond`
- Body: `Inter` atau `Manrope`

Font harus dimuat menggunakan `next/font`.

### 7.4 Layout

- Maksimum lebar konten: 1280 px
- Padding desktop: 64–96 px
- Padding tablet: 32–48 px
- Padding mobile: 20–24 px
- Border radius: 20–32 px
- Spacing besar antar-section
- Gunakan whitespace yang cukup
- Hindari card terlalu banyak

---

## 8. Struktur Halaman

## 8.1 Navbar

### Isi

- Logo Elang Dua
- Beranda
- Tentang
- Produk
- Sejarah
- Lokasi
- Kontak
- Tombol WhatsApp

### Perilaku

- Transparan saat berada di bagian paling atas.
- Menjadi solid ketika pengguna scroll.
- Sticky di bagian atas.
- Menu mobile menggunakan drawer atau sheet.
- Klik menu mengarah ke section terkait.
- Navbar tidak menutupi isi saat anchor navigation.

---

## 8.2 Hero 3D

### Tujuan

Menampilkan kesan pertama yang kuat melalui produk Elang Dua dalam bentuk 3D.

### Konten

- Eyebrow: `Sejak 1965`
- Heading utama
- Deskripsi singkat
- Tombol `Lihat Produk`
- Tombol `Hubungi Kami`
- Area produk 3D
- Elemen dekoratif ringan

### Contoh heading

`Cita Rasa Legendaris dari Singkawang`

### Contoh deskripsi

`Produk bumbu pilihan yang telah menjadi bagian dari berbagai masakan keluarga dan usaha kuliner.`

### Spesifikasi 3D

- Format model: `.glb`
- Produk berputar otomatis secara perlahan.
- Produk bergerak naik-turun maksimal 8–14 px.
- Rotasi pointer sangat ringan.
- Kamera tidak boleh bergerak berlebihan.
- Lighting lembut dengan satu key light dan satu fill light.
- Gunakan environment ringan.
- Hindari bayangan berat.
- Jangan membuat animasi yang menyebabkan motion sickness.
- Disable atau sederhanakan gerakan pada mobile.
- Hormati `prefers-reduced-motion`.
- Sediakan gambar `.webp` sebagai fallback.

### Placeholder awal

Jika model produk asli belum tersedia, gunakan placeholder botol 3D sederhana atau gambar produk 2D dengan efek depth.

Model sementara harus mudah diganti tanpa mengubah layout utama.

---

## 8.3 Tentang Elang Dua

### Konten

- Profil singkat perusahaan
- Lokasi Singkawang, Kalimantan Barat
- Tahun berdiri
- Nilai utama perusahaan
- Foto fasilitas atau ilustrasi pendukung

### Desain

- Layout dua kolom pada desktop
- Satu kolom pada mobile
- Gunakan angka besar untuk tahun berdiri
- Animasi reveal ringan saat masuk viewport

---

## 8.4 Produk Unggulan

### Produk awal

Gunakan data sementara berikut dan buat agar mudah diedit dari satu file data:

1. Kecap Manis
2. Kecap Asin
3. Cuka Makan
4. Produk Varian Ekonomis

### Isi card produk

- Foto produk
- Nama produk
- Deskripsi singkat
- Ukuran atau varian
- Tombol `Lihat Detail`

### Perilaku

- Hover lift maksimal 6 px.
- Gambar sedikit zoom saat hover.
- Jangan menggunakan animasi berlebihan.
- Pada mobile tampil sebagai horizontal scroll atau grid satu kolom.
- Semua produk berasal dari file data, bukan hardcode berulang di komponen.

---

## 8.5 Keunggulan Produk

### Isi awal

- Rasa konsisten
- Pengalaman sejak 1965
- Diproduksi dengan standar kualitas
- Cocok untuk rumah tangga dan usaha kuliner
- Jangkauan distribusi berkembang

### Desain

Gunakan 3–5 item dengan ikon sederhana.

Tidak perlu memakai card penuh jika layout dapat dibuat lebih bersih dengan garis, nomor, atau icon badge.

---

## 8.6 Sejarah Perusahaan

### Bentuk

Timeline vertikal atau horizontal.

### Data awal

- 1965: Perusahaan mulai berdiri
- Fase pertumbuhan produksi
- Perluasan variasi produk
- Perluasan distribusi
- Era modernisasi merek

Data final harus mudah diedit dari satu file.

### Perilaku

- Timeline muncul bertahap saat scroll.
- Pada mobile gunakan timeline vertikal.
- Jangan menggunakan animasi horizontal berat.

---

## 8.7 Area Distribusi

### Isi

- Penjelasan singkat area pemasaran
- Daftar kota atau wilayah
- Visual peta sederhana
- CTA menjadi distributor

### Versi pertama

Peta tidak harus interaktif. Gunakan ilustrasi SVG ringan atau layout daftar wilayah.

Jangan gunakan API peta berbayar.

---

## 8.8 Lokasi

### Isi

- Nama perusahaan
- Alamat
- Jam operasional
- Tombol Google Maps
- Map embed opsional

### Catatan

Jika map embed memperlambat halaman, gunakan gambar preview peta dan buka Google Maps pada tab baru.

---

## 8.9 Kontak

### Isi form

- Nama
- Nomor WhatsApp
- Email
- Subjek
- Pesan
- Tombol kirim

### Validasi

- Nama wajib
- Salah satu dari WhatsApp atau email wajib
- Pesan wajib
- Tampilkan pesan error yang jelas
- Tampilkan loading saat mengirim
- Tampilkan status berhasil atau gagal

### Implementasi awal

Gunakan salah satu:

1. Formspree
2. Resend melalui Next.js Route Handler
3. Link WhatsApp dengan pesan otomatis

Jika environment variable belum tersedia, form harus tetap tampil dan menggunakan fallback WhatsApp.

---

## 8.10 Footer

### Isi

- Logo
- Deskripsi singkat
- Navigasi
- Kontak
- Media sosial
- Copyright dinamis

Format copyright:

`© [tahun berjalan] Elang Dua. Seluruh hak cipta dilindungi.`

---

## 9. Sistem Animasi

Gunakan Motion for React.

### Prinsip

- Halus
- Singkat
- Tidak mengganggu
- Tidak mengurangi keterbacaan
- Tidak membuat halaman berat

### Durasi

- Micro interaction: 150–250 ms
- Reveal section: 400–700 ms
- Page entrance: maksimal 900 ms
- 3D idle motion: lambat dan berulang

### Jenis animasi

- Fade up
- Fade in
- Stagger children
- Parallax ringan
- Hover scale maksimal 1.02
- Scroll progress opsional
- Navbar transition
- Product image hover

### Larangan

- Tidak menggunakan animasi bounce berlebihan.
- Tidak membuat teks terus bergerak.
- Tidak membuat kamera 3D berputar cepat.
- Tidak memakai parallax berat di mobile.
- Tidak memblokir interaksi sampai animasi selesai.

---

## 10. Responsivitas

### Breakpoint utama

- Mobile: 360–767 px
- Tablet: 768–1023 px
- Desktop: 1024 px ke atas
- Large desktop: 1440 px ke atas

### Ketentuan

- Tidak ada horizontal overflow.
- Teks hero tetap terbaca pada lebar 360 px.
- Tombol utama tidak terpotong.
- Objek 3D tidak menutupi heading.
- Navbar mobile dapat dibuka dan ditutup.
- Form dapat digunakan dengan satu tangan.
- Ukuran target klik minimal 44 px.
- Produk 3D disederhanakan pada perangkat lemah.

---

## 11. Arsitektur Teknis

### Stack

- Next.js versi stabil terbaru
- App Router
- TypeScript
- Tailwind CSS
- Motion for React
- `@react-three/fiber`
- `@react-three/drei`
- React Hook Form
- Zod
- Lucide React
- ESLint
- Prettier

### Package manager

Gunakan `npm`.

### Rendering

- Gunakan Server Components sebagai default.
- Gunakan Client Components hanya untuk:
  - Animasi interaktif
  - 3D canvas
  - Form
  - Mobile navigation
- Gunakan dynamic import untuk komponen 3D.
- Nonaktifkan SSR pada canvas 3D bila diperlukan.

---

## 12. Struktur Folder

```text
src/
  app/
    api/
      contact/
        route.ts
    globals.css
    layout.tsx
    page.tsx
    not-found.tsx

  components/
    layout/
      Navbar.tsx
      Footer.tsx

    sections/
      HeroSection.tsx
      AboutSection.tsx
      ProductsSection.tsx
      AdvantagesSection.tsx
      HistorySection.tsx
      DistributionSection.tsx
      LocationSection.tsx
      ContactSection.tsx

    three/
      ProductScene.tsx
      ProductModel.tsx
      ProductFallback.tsx

    ui/
      Button.tsx
      Container.tsx
      SectionHeading.tsx
      Reveal.tsx

  data/
    products.ts
    timeline.ts
    navigation.ts
    company.ts

  lib/
    constants.ts
    utils.ts
    validations.ts

  types/
    product.ts
    company.ts

public/
  images/
    products/
    company/
    social/
  models/
    elang-dua-product.glb
  icons/
```

---

## 13. Data dan Konten

Semua konten yang sering berubah harus diletakkan pada folder `src/data`.

Jangan menyebarkan data perusahaan di banyak komponen.

### Data perusahaan

Buat satu file `src/data/company.ts` berisi:

- Nama perusahaan
- Tahun berdiri
- Alamat
- WhatsApp
- Email
- Instagram
- Facebook
- Google Maps URL
- Jam operasional
- Deskripsi singkat
- Deskripsi lengkap

### Placeholder

Jika data final belum tersedia, gunakan placeholder yang jelas dan diberi komentar:

`TODO: Ganti dengan data resmi Elang Dua.`

Jangan mengarang alamat, nomor telepon, email, atau klaim sertifikasi.

---

## 14. SEO

### Metadata wajib

- Title
- Description
- Keywords dasar
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter card
- Robots
- Sitemap

### Structured data

Tambahkan JSON-LD tipe:

- Organization
- LocalBusiness jika data alamat sudah final
- Product untuk produk utama jika datanya lengkap

### Ketentuan

- Satu H1 pada halaman.
- Struktur heading berurutan.
- Semua gambar memiliki alt text.
- URL bersih.
- Konten utama tetap dapat dibaca tanpa JavaScript berat.

---

## 15. Performa

### Target Lighthouse

- Performance: minimal 85
- Accessibility: minimal 90
- Best Practices: minimal 90
- SEO: minimal 90

### Target Core Web Vitals

- LCP di bawah 2,5 detik pada koneksi normal
- CLS di bawah 0,1
- INP di bawah 200 ms jika memungkinkan

### Strategi

- Gunakan `next/image`.
- Format gambar WebP atau AVIF.
- Lazy load gambar di bawah fold.
- Dynamic import untuk 3D.
- Kompres model `.glb`.
- Ukuran model target di bawah 3 MB.
- Jangan gunakan video besar pada hero.
- Hindari library UI berat.
- Preload hanya aset penting.
- Sediakan static fallback untuk 3D.

---

## 16. Aksesibilitas

- Warna teks harus memiliki kontras yang cukup.
- Semua tombol dapat digunakan melalui keyboard.
- Menu mobile memiliki aria label.
- Form memiliki label yang jelas.
- Error form dibaca screen reader.
- Animasi mengikuti `prefers-reduced-motion`.
- Canvas 3D memiliki fallback text atau gambar.
- Fokus keyboard harus terlihat.
- Jangan menyampaikan informasi hanya melalui warna.

---

## 17. Keamanan

- Validasi semua input form dengan Zod.
- Sanitasi data sebelum diproses.
- Jangan menaruh secret di source code.
- Gunakan environment variables.
- Tambahkan rate limiting sederhana jika API kontak digunakan.
- Jangan menampilkan stack trace kepada pengguna.
- Link eksternal memakai `rel="noopener noreferrer"`.

---

## 18. Environment Variables

Contoh `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=
CONTACT_TO_EMAIL=
RESEND_API_KEY=
```

Jangan commit file `.env.local`.

---

## 19. Testing

### Testing manual wajib

1. Website terbuka tanpa error.
2. Tidak ada error console.
3. Navbar bekerja.
4. Semua anchor navigation tepat.
5. Menu mobile bekerja.
6. Model 3D tampil.
7. Fallback tampil jika WebGL gagal.
8. Tombol WhatsApp bekerja.
9. Link Google Maps bekerja.
10. Semua link sosial bekerja.
11. Form menampilkan validasi.
12. Form menampilkan status loading.
13. Layout benar pada 360 px.
14. Layout benar pada 768 px.
15. Layout benar pada 1440 px.
16. Tidak ada horizontal overflow.
17. Reduced motion bekerja.
18. Website dapat dibuild tanpa error.

### Perintah wajib

```bash
npm run lint
npm run build
npm run dev
```

Jika tersedia:

```bash
npm run typecheck
```

---

## 20. Deployment

### Alur

1. Buat repository GitHub.
2. Push project awal.
3. Hubungkan repository ke Vercel.
4. Gunakan preview deployment untuk setiap perubahan besar.
5. Masukkan environment variables melalui Vercel.
6. Uji preview.
7. Deploy production setelah semua acceptance criteria terpenuhi.

### Branch

- `main`: production
- `develop`: development
- `feature/*`: fitur terpisah

---

## 21. Tahapan Pengerjaan

### Phase 1 — Fondasi

- Setup Next.js dan TypeScript
- Setup Tailwind CSS
- Setup font
- Setup warna dan design tokens
- Setup struktur folder
- Setup data perusahaan
- Setup layout utama

### Phase 2 — Halaman dan Komponen

- Navbar
- Hero statis
- Tentang
- Produk
- Keunggulan
- Sejarah
- Distribusi
- Lokasi
- Kontak
- Footer

### Phase 3 — Motion

- Reveal animations
- Navbar transition
- Product card hover
- Timeline animation
- Smooth scroll
- Reduced motion

### Phase 4 — 3D

- Setup React Three Fiber
- Tambahkan model produk
- Loading state
- Auto rotation
- Pointer interaction
- Lighting
- Mobile simplification
- Static fallback

### Phase 5 — Integrasi dan Validasi

- Form kontak
- WhatsApp
- Google Maps
- Social links
- SEO
- Structured data
- Accessibility
- Performance optimization

### Phase 6 — Deployment

- GitHub
- Vercel preview
- Final testing
- Production deployment

---

## 22. Acceptance Criteria

Website dianggap selesai jika:

1. Project dapat dijalankan menggunakan `npm install` dan `npm run dev`.
2. `npm run build` berhasil tanpa error.
3. Tidak ada error TypeScript.
4. Tidak ada error console utama.
5. Semua section tersedia.
6. Navbar desktop dan mobile berfungsi.
7. Hero menampilkan produk 3D atau fallback.
8. Gerakan 3D halus dan tidak berlebihan.
9. Website responsif dari 360 px sampai 1440 px.
10. Tidak ada horizontal overflow.
11. Semua tombol CTA bekerja.
12. Form kontak memiliki validasi.
13. Link WhatsApp, Maps, dan sosial mudah diganti melalui file data.
14. Data produk tersentralisasi.
15. Metadata SEO tersedia.
16. Reduced motion didukung.
17. Lighthouse mencapai target minimum atau disertai catatan perbaikan.
18. Website berhasil dideploy pada Vercel preview.
19. Tidak ada secret yang masuk repository.
20. README menjelaskan cara setup dan mengganti konten.

---

## 23. Instruksi untuk Codex

Codex harus:

1. Membaca seluruh file ini sebelum menulis kode.
2. Membangun project secara bertahap sesuai phase.
3. Tidak mengarang data resmi perusahaan.
4. Menggunakan placeholder dengan komentar `TODO` jika data belum tersedia.
5. Menjaga komponen tetap modular.
6. Menghindari satu file halaman yang terlalu besar.
7. Menjalankan lint dan build setelah perubahan besar.
8. Memperbaiki error sampai build berhasil.
9. Tidak menghapus fitur yang sudah berfungsi tanpa alasan.
10. Mengutamakan performa dan responsivitas.
11. Menggunakan gambar fallback saat model 3D belum tersedia.
12. Membuat README dengan instruksi setup.
13. Membuat `.env.example`.
14. Tidak langsung menghubungkan domain production sebelum preview disetujui.

---

## 24. Data yang Masih Dibutuhkan

Data berikut perlu diberikan kemudian:

- Logo resmi
- Foto produk
- Model 3D produk atau foto referensi
- Deskripsi resmi perusahaan
- Alamat lengkap
- Nomor WhatsApp resmi
- Email resmi
- Instagram
- Facebook
- Google Maps URL
- Jam operasional
- Daftar ukuran produk
- Daftar wilayah distribusi
- Foto fasilitas atau pabrik
- Klaim sertifikasi resmi jika ada

Sebelum data final tersedia, gunakan placeholder yang mudah diganti.

---

## 25. Definisi Hasil Akhir

Hasil akhir berupa website Elang Dua yang:

- Terlihat lebih modern daripada website lama
- Memiliki hero 3D bergerak
- Responsif
- Cepat
- Mudah diedit
- Mudah dideploy
- Aman untuk dikembangkan lebih lanjut
- Siap digunakan sebagai company profile dan product showcase
