---
publish: false
---


# Materi HTML: Fondasi, Struktur, dan Konten

Ini adalah materi lanjutan untuk kelas X PPLG setelah pengenalan awal HTML. Materi ini dibagi menjadi dua pertemuan untuk memastikan pemahaman yang mendalam, terutama mengingat siswa masih dalam tahap adaptasi dengan koding.

---

##  Pertemuan 1: Memperkuat Fondasi HTML

**Tujuan Pembelajaran:**
1.  Siswa dapat menjelaskan perbedaan antara tag, elemen, dan atribut.
2.  Siswa dapat menjelaskan fungsi `id` dan `class` sebagai selector.
3.  Siswa memahami konsep dasar Document Object Model (DOM) sebagai struktur pohon.
4.  Siswa dapat membuat struktur dasar halaman web menggunakan tag semantik.

### 1. Review Singkat

Pada pertemuan sebelumnya, kita sudah belajar bahwa:
-   HTML adalah kerangka dari sebuah website.
-   Ada tag pembuka (`<html>`) dan penutup (`</html>`).
-   Struktur dasar terdiri dari `<head>` (untuk informasi browser) dan `<body>` (untuk konten yang tampil).
-   Tag `<h1>` sampai `<h6>` digunakan untuk membuat judul.

Hari ini, kita akan perdalam konsep-konsep tersebut agar lebih paham "aturan main" di HTML.

### 2. Konsep Inti HTML

Bayangkan HTML itu seperti membangun rumah dengan balok LEGO.

#### a. Tag dan Elemen
-   **Tag**: Ibarat label pada jenis balok LEGO. Contoh: `<p>`, `<h1>`, `<body>`. Ada tag pembuka (`<p>`) dan tag penutup (`</p>`).
-   **Elemen**: Ibarat balok LEGO yang sudah utuh. Elemen adalah gabungan dari **tag pembuka, konten, dan tag penutup**.

```html
<p>Ini adalah konten teks di dalam sebuah elemen paragraf.</p>
```

#### b. Atribut
-   **Atribut**: Ibarat instruksi tambahan atau properti khusus untuk sebuah balok LEGO. Atribut memberikan informasi tambahan pada elemen.
-   Atribut selalu ditulis di dalam **tag pembuka**.
-   Formatnya selalu `nama="nilai"`.

Contoh: Atribut `lang` pada tag `<html>` memberitahu browser bahwa bahasa halaman ini adalah Indonesia.
```html
<html lang="id">
```

#### c. ID dan Class
`id` dan `class` adalah atribut spesial yang berfungsi seperti "pengenal" untuk elemen. Ini akan sangat penting saat kita belajar CSS.

-   **`id` (Identifier)**
    -   Ibarat **Nomor Induk Kependudukan (NIK)**. Unik, hanya boleh ada **satu** di seluruh halaman.
    -   Digunakan untuk menandai satu elemen yang sangat spesifik.
    -   Contoh: `<div id="header-utama">...</div>`

-   **`class` (Kelas)**
    -   Ibarat **keanggotaan grup** atau "kelas" (misal: "Siswa Kelas X PPLG"). Bisa digunakan oleh **banyak** elemen.
    -   Digunakan untuk mengelompokkan beberapa elemen yang punya gaya atau fungsi serupa.
    -   Contoh:
        ```html
        <p class="teks-peringatan">Jangan lupa simpan pekerjaanmu.</p>
        <div class="teks-peringatan">Waktu hampir habis!</div>
        ```
        Kedua elemen di atas sama-sama anggota "kelas" `teks-peringatan`.

### 3. Konsep DOM (Document Object Model)

-   **Analogi**: Bayangkan DOM itu seperti **struktur keluarga** atau silsilah.
-   Browser tidak melihat kode HTML kita sebagai teks, tapi sebagai sebuah **struktur pohon** yang saling berhubungan. `<html>` adalah akarnya, lalu punya anak `<head>` dan `<body>`. `<body>` punya anak-anaknya sendiri, dan seterusnya.

```
html
├── head
│   └── title
└── body
    ├── header
    │   └── h1
    └── main
        └── p
```

Memahami konsep ini akan sangat membantu saat kita ingin memanipulasi elemen menggunakan JavaScript nanti.

### 4. Struktur Semantik HTML

Dulu, orang membuat layout web hanya menggunakan tag `<div>` untuk semua bagian.
```html
<div id="header">...</div>
<div id="content">...</div>
<div id="footer">...</div>
```
Ini tidak salah, tapi "tidak informatif". Bayangkan semua kotak penyimpanan di rumahmu hanya berlabel "Kotak".

HTML5 memperkenalkan **tag semantik**, yaitu tag yang namanya punya arti dan tujuan jelas.

-   `<header>`: Untuk bagian kepala website (berisi logo, judul utama, navigasi).
-   `<nav>`: Untuk menampung menu navigasi.
-   `<main>`: Untuk konten utama dan paling penting dari halaman tersebut.
-   `<article>`: Untuk sebuah konten mandiri (seperti postingan blog, berita).
-   `<section>`: Untuk mengelompokkan konten dengan tema yang sama.
-   `<aside>`: Untuk konten sampingan (sidebar).
-   `<footer>`: Untuk bagian kaki website (berisi info copyright, kontak).

**Keuntungannya:**
-   **Mudah dibaca** oleh developer lain.
-   **Lebih disukai mesin pencari** (SEO) seperti Google.
-   **Membantu teknologi aksesibilitas** (misal: screen reader untuk tunanetra).

### Latihan Pertemuan 1:

Buatlah sebuah file `struktur-biodata.html` yang berisi kerangka halaman biodata menggunakan tag semantik. Kosongkan saja isinya, fokus pada strukturnya.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Struktur Halaman Biodata</title>
</head>
<body>

    <header>
        <!-- Bagian header akan diisi nanti -->
    </header>

    <nav>
        <!-- Bagian navigasi akan diisi nanti -->
    </nav>

    <main>
        <section>
            <!-- Bagian "Tentang Saya" akan diisi nanti -->
        </section>

        <section>
            <!-- Bagian "Hobi" akan diisi nanti -->
        </section>
    </main>

    <footer>
        <!-- Bagian footer akan diisi nanti -->
    </footer>

</body>
</html>
```

---

## Pertemuan 2: Menambahkan Teks, Gambar, dan Link

**Tujuan Pembelajaran:**
1.  Siswa dapat menggunakan tag paragraf (`<p>`) dan list (`<ul>`, `<ol>`, `<li>`).
2.  Siswa dapat menyisipkan gambar menggunakan tag `<img>` beserta atributnya.
3.  Siswa dapat membuat tautan/link menggunakan tag `<a>` beserta atributnya.
4.  Siswa dapat membuat halaman biodata sederhana yang berisi teks, gambar, dan link.

### 1. Review Pertemuan 1

Kita sudah belajar tentang **konsep inti HTML** (tag, elemen, atribut) dan pentingnya menggunakan **struktur semantik** (`<header>`, `<main>`, `<footer>`, dll). Hari ini kita akan mengisi struktur tersebut dengan konten.

### 2. Elemen Teks Dasar

-   **Paragraf (`<p>`)**: Digunakan untuk membungkus teks yang membentuk sebuah paragraf.
    ```html
    <p>Ini adalah paragraf pertama. Saya seorang siswa di SMK.</p>
    <p>Ini adalah paragraf kedua. Cita-cita saya menjadi seorang software developer.</p>
    ```

-   **List/Daftar**: Ada dua jenis list.
    1.  **Unordered List (`<ul>`)**: Daftar tak berurutan, biasanya tampil sebagai *bullet points*.
    2.  **Ordered List (`<ol>`)**: Daftar berurutan, biasanya tampil sebagai angka (1, 2, 3, ...).
    
    Keduanya menggunakan tag `<li>` (List Item) untuk setiap item di dalamnya.

    ```html
    <!-- Contoh Unordered List -->
    <h4>Hobi Saya:</h4>
    <ul>
        <li>Bermain game</li>
        <li>Membaca buku</li>
        <li>Menonton film</li>
    </ul>

    <!-- Contoh Ordered List -->
    <h4>Langkah-langkah menyeduh kopi:</h4>
    <ol>
        <li>Masak air hingga mendidih.</li>
        <li>Siapkan gelas dan kopi.</li>
        <li>Tuangkan air panas ke dalam gelas.</li>
    </ol>
    ```

### 3. Elemen Gambar (`<img>`)

Tag `<img>` digunakan untuk menampilkan gambar. Tag ini unik karena **tidak memiliki tag penutup**. Tag ini wajib memiliki 2 atribut:

-   `src` (Source): Berisi alamat atau path menuju file gambar.
-   `alt` (Alternative Text): Teks yang akan muncul jika gambar gagal dimuat. **Sangat penting untuk aksesibilitas!**

```html
<img src="foto_profil.jpg" alt="Foto profil saya dari depan">

<!-- Bisa juga dari URL di internet -->
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Logo_Kemendikbudristek.png" alt="Logo Kemendikbudristek" width="100">
```
> **Tips:** Atribut `width` dan `height` bisa ditambahkan untuk mengatur ukuran gambar, tapi cara terbaik nanti adalah menggunakan CSS.

### 4. Elemen Link/Tautan (`<a>`)

Tag `<a>` (Anchor) digunakan untuk membuat link ke halaman lain atau website lain. Atribut utamanya adalah:

-   `href` (Hypertext Reference): Berisi URL atau alamat tujuan link.

```html
<!-- Link ke website eksternal -->
<p>Kalian bisa mencari referensi di <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Web Docs</a>.</p>

<!-- Link ke file HTML lain di folder yang sama -->
<a href="halaman-kontak.html">Hubungi Saya</a>
```

### Latihan Pertemuan 2: Membuat Halaman Biodata Sederhana

Sekarang, mari kita gabungkan semua yang telah dipelajari. Modifikasi file `struktur-biodata.html` dari pertemuan sebelumnya atau buat file baru `biodata.html` dan isi dengan kode berikut. Ganti isinya sesuai dengan data dirimu!

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biodata Nama Kamu</title>
</head>
<body>

    <header>
        <h1>Biodata Diri</h1>
    </header>

    <main>
        <section>
            <h2>Tentang Saya</h2>
            <img src="https://via.placeholder.com/150" alt="Foto profil placeholder" width="150">
            <p>Halo! Nama saya [Nama Kamu]. Saya adalah seorang siswa kelas 10 PPLG di [Nama Sekolah].</p>
            <p>Saya sangat tertarik dengan dunia teknologi, khususnya dalam pengembangan perangkat lunak dan web. </p>
        </section>

        <section>
            <h2>Hobi</h2>
            <ul>
                <li>[Hobi 1]</li>
                <li>[Hobi 2]</li>
                <li>[Hobi 3]</li>
            </ul>
        </section>

        <section>
            <h2>Kontak</h2>
            <p>
                Kamu bisa menemukan saya di <a href="https://github.com">GitHub</a>.
            </p>
        </section>
    </main>

    <footer>
        <p>Hak Cipta &copy; 2025 [Nama Kamu]. Dibuat dengan HTML.</p>
    </footer>

</body>
</html>
```
> **Tugas Tambahan:** Coba ganti gambar placeholder (`https://via.placeholder.com/150`) dengan foto kamu sendiri. Simpan file fotomu di folder yang sama dengan file `biodata.html` agar mudah dipanggil.

---

### Penutup

Selamat! Kalian sekarang sudah bisa membuat halaman web statis sederhana yang terstruktur dan berisi konten. Pada pertemuan selanjutnya, kita akan mulai "menghias" halaman ini menggunakan **CSS** agar terlihat lebih menarik.
