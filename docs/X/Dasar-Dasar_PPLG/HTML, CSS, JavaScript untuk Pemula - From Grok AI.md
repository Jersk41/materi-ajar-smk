---
publish: false
---

# Dokumen Sumber: Roadmap Belajar Koding untuk Mata Pelajaran Dasar-dasar Pengembangan Perangkat Lunak dan Gim (PPLG) Kelas 10 SMK (Kurikulum Merdeka)

## Pendahuluan

Dokumen ini dirancang sebagai sumber materi lengkap untuk pengembangan pembelajaran mata pelajaran **Dasar-dasar Pengembangan Perangkat Lunak dan Gim (PPLG)** bagi siswa kelas 10 Program Keahlian Rekayasa Perangkat Lunak (RPL) atau Pengembangan Perangkat Lunak dan Gim (PPLG) di SMK, sesuai dengan Kurikulum Merdeka dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) Republik Indonesia. Materi ini berfokus pada roadmap belajar koding dasar, yang mencakup pengembangan web statis menggunakan HTML, CSS, dan JavaScript, serta konsep dasar algoritma dengan implementasi flowchart dan pseudocode.

Mata pelajaran ini bertujuan membekali siswa dengan pengetahuan dan keterampilan dasar di bidang pengembangan perangkat lunak dan gim, termasuk proses bisnis menyeluruh, perkembangan dunia kerja, profesi, dan kewirausahaan di sektor tersebut. Pembelajaran dirancang untuk membangun etos kerja melalui soft skills seperti komunikasi, kolaborasi, dan pemecahan masalah, sambil menekankan pemahaman konsep dasar pemrograman.

Dokumen ini dapat digunakan sebagai input untuk layanan seperti NotebookLM untuk menghasilkan audio overview, quiz interaktif, timeline pembelajaran, atau media visual seperti infografis dan video ringkasan. Struktur dokumen mencakup penjelasan teks, contoh kode, latihan, referensi terpercaya, dan saran media pembelajaran. Materi disesuaikan dengan Capaian Pembelajaran (CP) dan Alur Tujuan Pembelajaran (ATP) fase E (kelas 10), di mana siswa diharapkan mampu:

### Capaian Pembelajaran (CP) yang Direncanakan
Berdasarkan CP resmi Kemendikbudristek untuk fase E, siswa pada akhir kelas 10 diharapkan:
- Memahami proses bisnis menyeluruh bidang pengembangan perangkat lunak dan gim, termasuk perkembangan dunia kerja, profesi, dan kewirausahaan (job creation).
- Memahami dan membuat web statis menggunakan HTML, CSS, dan JavaScript untuk membangun halaman web sederhana dengan elemen interaktif dasar.
- Memahami konsep algoritma dan implementasinya menggunakan flowchart dan pseudocode, termasuk tipe data, operator, percabangan, dan perulangan.
- Menerapkan konsep dasar Object-Oriented Programming (OOP) sederhana melalui JavaScript, seperti fungsi dan objek, sebagai persiapan untuk pengembangan lebih lanjut di kelas 11 (misalnya, PHP).
- Mengembangkan soft skills seperti etos kerja, komunikasi, dan pemecahan masalah melalui proyek mini.

CP ini selaras dengan dokumen resmi, di mana siswa dibekali dasar pengetahuan, keterampilan, dan sikap untuk memecahkan masalah nyata di bidang TI.

### Alur Tujuan Pembelajaran (ATP)
ATP fase E disusun secara berurutan untuk mencapai CP, dengan total 216 jam pelajaran. Alur utama:
1. **Modul 1: Pengenalan Bidang PPLG** (Proses bisnis, profesi) – 20 JP.
2. **Modul 2: Dasar Pemrograman Web (HTML, CSS, JS)** – 60 JP, termasuk struktur HTML, styling CSS, interaktivitas JS.
3. **Modul 3: Konsep Algoritma Dasar** – 50 JP, mencakup algoritma, flowchart, pseudocode, dan implementasi sederhana.
4. **Modul 4: Proyek Terintegrasi** – 40 JP, seperti halaman profil web dengan elemen algoritma.
5. **Modul 5: Etos Kerja dan Kewirausahaan** – 46 JP, integrasi soft skills.

Setiap modul dilengkapi penilaian formatif (latihan, quiz) dan sumatif (proyek). ATP ini fleksibel, disesuaikan dengan konteks sekolah, dan fokus pada Profil Pelajar Pancasila (beriman, bertakwa, berkebinekaan global, gotong royong, mandiri, bernalar kritis, kreatif).

## Roadmap Belajar Koding: Langkah demi Langkah

Roadmap ini dirancang progresif, mulai dari dasar web statis hingga konsep algoritma, dengan JavaScript sebagai bahasa implementasi untuk menjembatani web dan logika pemrograman. Setiap bagian mencakup tujuan, penjelasan, contoh, latihan, dan estimasi waktu (dalam Jam Pelajaran/JP).

### 1. Struktur Dasar HTML (10 JP)
**Tujuan:** Siswa memahami struktur dokumen HTML sebagai fondasi web statis, sesuai ATP Modul 2.

**Penjelasan:** HTML (HyperText Markup Language) adalah bahasa markup untuk menyusun konten web. Struktur dasar mencakup elemen `<html>`, `<head>` (metadata), dan `<body>` (konten utama). Gunakan tag semantik seperti `<header>`, `<main>`, `<footer>` untuk aksesibilitas.

**Contoh Kode:**
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil Saya</title>
</head>
<body>
    <header>
        <h1>Selamat Datang di Web Saya</h1>
    </header>
    <main>
        <p>Ini adalah paragraf pertama.</p>
    </main>
</body>
</html>
```

**Latihan:** Buat dokumen HTML sederhana dengan judul dan paragraf tentang diri sendiri. Validasi menggunakan validator.w3.org.

### 2. Elemen Teks, Gambar, dan Media Dasar (15 JP)
**Tujuan:** Siswa dapat menambahkan konten teks, gambar, dan link, membangun halaman web informatif.

**Penjelasan:** Gunakan tag teks seperti `<h1>-<h6>` untuk heading, `<p>` untuk paragraf, `<ul>/<ol>` untuk list. Untuk gambar, gunakan `<img src="gambar.jpg" alt="Deskripsi">`. Tambahkan link dengan `<a href="url">Teks Link</a>`.

**Contoh Kode:**
```
<body>
    <h2>Biodata Saya</h2>
    <ul>
        <li>Nama: John Doe</li>
        <li>Umur: 16 tahun</li>
    </ul>
    <img src="foto.jpg" alt="Foto Profil" width="200">
    <a href="https://www.instagram.com/">Kunjungi Instagram</a>
</body>
```

**Latihan:** Tambahkan gambar profil dan list hobi ke dokumen HTML sebelumnya.

### 3. CSS Dasar: Warna, Font, dan Layout (15 JP)
**Tujuan:** Siswa dapat menstylish halaman web menggunakan CSS eksternal/internal.

**Penjelasan:** CSS (Cascading Style Sheets) mengatur tampilan. Gunakan selector seperti `h1 { color: blue; }`, font dengan `font-family: Arial;`, dan layout dasar seperti `margin`/`padding`.

**Contoh Kode (file style.css):**
```
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}
h1 {
    color: #333;
    text-align: center;
}
img {
    border: 2px solid #000;
    border-radius: 50%;
}
```

Hubungkan ke HTML: `<link rel="stylesheet" href="style.css">`.

**Latihan:** Ubah warna latar belakang dan font halaman biodata.

### 4. Box Model dan Flexbox (20 JP)
**Tujuan:** Siswa memahami model kotak untuk layout responsif.

**Penjelasan:** Box model terdiri dari content, padding, border, margin. Flexbox (`display: flex;`) untuk layout satu dimensi, seperti align items dengan `justify-content: center;`.

**Contoh Kode:**
```
.main {
    display: flex;
    justify-content: space-around;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
}
```

**Latihan:** Buat layout flexbox untuk menata foto dan teks biodata secara horizontal.

### 5. Mini Project: Buat Halaman Profil Sederhana (20 JP)
**Tujuan:** Integrasi HTML/CSS untuk proyek akhir Modul 2.

**Instruksi Proyek:** Buat halaman profil diri dengan struktur HTML, styling CSS (warna, font, flexbox), termasuk gambar, list, dan link. Host di GitHub Pages atau localhost.

**Rubrik Penilaian:** 
- Struktur semantik (30%), Styling konsisten (40%), Responsif dasar (30%).

**Contoh Output:** Halaman dengan header foto profil, section biodata, footer link sosial.

### 6. JavaScript Dasar: Tipe Data, Operator, Percabangan, Perulangan, dan OOP Sederhana (30 JP)
**Tujuan:** Siswa membuat web statis interaktif, sesuai CP web statis dengan JS.

**Penjelasan:** JS menambahkan logika. Tipe data: string, number, boolean. Operator: +, -, ==. Percabangan: if/else. Perulangan: for/while. OOP dasar: fungsi sebagai objek.

**Contoh Kode (script.js, hubungkan `<script src="script.js"></script>`):**
```
// Tipe Data & Operator
let nama = "John"; // string
let umur = 16; // number
let dewasa = umur >= 18; // boolean, operator

// Percabangan
if (dewasa) {
    console.log("Dewasa");
} else {
    console.log("Remaja");
}

// Perulangan
for (let i = 1; i <= 5; i++) {
    console.log("Hobi ke-" + i);
}

// OOP Sederhana: Fungsi sebagai Objek
function Profil(nama, umur) {
    this.nama = nama;
    this.umur = umur;
    this.tampilkan = function() {
        alert("Nama: " + this.nama);
    };
}
let profilSaya = new Profil("John", 16);
profilSaya.tampilkan();
```

**Latihan:** Tambahkan tombol di halaman profil yang menampilkan alert biodata menggunakan if/else berdasarkan umur.

### 7. Pembelajaran Algoritma Dasar: Flowchart dan Pseudocode (40 JP)
**Tujuan:** Siswa memahami algoritma sebagai langkah pemecahan masalah, sesuai CP algoritma.

**Penjelasan:** Algoritma adalah urutan langkah logis. Flowchart: simbol visual (oval=start, persegi=proses, belah ketupat=decision). Pseudocode: kode mirip bahasa alami, e.g., IF kondisi THEN...

**Contoh:**
- **Masalah:** Hitung rata-rata nilai 3 mata pelajaran.
- **Pseudocode:**
```
ALGORITMA RataRataNilai
INPUT: Nilai1, Nilai2, Nilai3
RATA = (Nilai1 + Nilai2 + Nilai3) / 3
IF RATA >= 80 THEN
    OUTPUT: "Lulus"
ELSE
    OUTPUT: "Tidak Lulus"
END IF
```

- **Flowchart Deskripsi:** Start → Input nilai → Hitung rata-rata → Decision (rata >=80?) → Ya: Output Lulus → Tidak: Output Tidak Lulus → End.

**Implementasi JS:** Gunakan pseudocode di atas dalam fungsi JS untuk validasi di web profil.

**Latihan:** Buat flowchart dan pseudocode untuk "Cek kelulusan siswa", lalu implementasikan di JS.

## Referensi Terpercaya
- Capaian Pembelajaran PPLG: https://guru.kemdikbud.go.id/kurikulum/referensi-penerapan/capaian-pembelajaran/smk/dasar-dasar-pengembangan-perangkat-lunak-dan-gim/
- ATP PPLG Kelas 10: https://lamnesia.com/cp-atp-pplg-kelas-x/ dan https://id.scribd.com/document/688110304/Atp-Dasar-Dasar-Pplg
- HTML/CSS Dasar: MDN Web Docs (https://developer.mozilla.org/en-US/docs/Learn), W3Schools (https://www.w3schools.com)
- JavaScript Pemula: Petani Kode (https://www.petanikode.com/html-dasar/)
- Algoritma & Flowchart: Modul Pemrograman Dasar SMK (https://www.smkm08paciran.sch.id/upload/file/38660806PemrogDasarSMK-X-Smt1.pdf) dan https://id.scribd.com/presentation/512810830/Algoritma-pseucode-flowchart

## Saran Media Pembelajaran untuk NotebookLM
Untuk pengembangan lebih lanjut di NotebookLM (upload dokumen ini untuk generate):
1. **Audio Overview:** Ringkasan 5 menit per modul, dengan suara narator Indonesia.
2. **Quiz Interaktif:** 10 soal MCQ per bagian (e.g., "Apa fungsi `<head>` di HTML?"), dengan jawaban otomatis.
3. **Timeline Visual:** Roadmap sebagai garis waktu interaktif, dari HTML ke proyek.
4. **Infografis:** Diagram flowchart algoritma dan box model CSS.
5. **Video Ringkasan:** Generate script untuk video 2-3 menit, integrasikan dengan YouTube playlist seperti https://www.youtube.com/playlist?list=PL1Z-C0_J_9daLDNnmfAR94txv-Esvb88m (tutorial HTML/CSS/JS pemula) atau https://www.youtube.com/watch?v=QyY5cfz2390 (pseudocode).
6. **Proyek Ekstensi:** FAQ interaktif untuk troubleshooting kode, atau simulasikan GitHub repo untuk kolaborasi.

Dokumen ini dapat direvisi berdasarkan umpan balik guru, dengan total estimasi 150 JP untuk implementasi penuh.