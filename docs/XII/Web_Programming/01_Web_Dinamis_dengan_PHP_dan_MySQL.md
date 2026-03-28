---
tags:
  - web-dinamis
  - php
  - mysql
  - analisis-data
  - ai-konseptual
  - kelas-xii
  - modul-ajar
creation-date: 2025-09-08
author: Japar, dan Gemini
publish: false
---
# Modul Ajar - Bab 1: Web Dinamis dengan PHP & MySQL

> [!INFO]
> **Topik Utama:** Koneksi PHP ke Database, Operasi CRUD di Lingkungan Web, dan Pengantar Analisis Data.
> **Tujuan:** Setelah mempelajari modul ini, siswa diharapkan mampu membuat halaman web dinamis yang dapat menampilkan dan menyimpan data ke dalam database, serta memahami bagaimana data yang terkumpul dapat menjadi dasar untuk analisis dan Kecerdasan Buatan (AI).

---

## 1. Kenapa Web Statis Tidak Cukup?

Pada kelas X dan XI, kita telah belajar membuat website menggunakan HTML, CSS, dan JavaScript. Website seperti ini disebut **web statis**, karena kontennya tidak berubah kecuali kita mengubah kode sumbernya secara manual.

**Keterbatasan Web Statis:**
-   Tidak bisa berinteraksi dengan pengguna (misal: menyimpan komentar).
-   Tidak bisa menampilkan data yang selalu update (misal: daftar produk terbaru).
-   Tidak bisa memiliki sistem pengguna (login/register).

Untuk mengatasi ini, kita memerlukan **web dinamis**, yaitu website yang bisa berinteraksi dengan database untuk menyimpan, mengubah, dan menampilkan data. Di sinilah peran **PHP** sebagai bahasa pemrograman sisi server dan **MySQL** sebagai database-nya.

```mermaid
graph TD
    A[User/Browser] -- HTTP Request --> B{Web Server (Apache)};
    B -- Menjalankan Script --> C[PHP];
    C -- Query (SELECT, INSERT, dll.) --> D[(MySQL Database)];
    D -- Mengirimkan Data --> C;
    C -- Membuat Halaman HTML --> B;
    B -- HTTP Response (HTML jadi) --> A;
```

---

## 2. Koneksi Pertama: Menghubungkan PHP ke Database

Langkah pertama sebelum bisa berinteraksi dengan database adalah membuat koneksi. Buat sebuah file baru bernama `koneksi.php`.

```php
<?php
// Parameter koneksi database
$host = "localhost";    // Nama host server database
$user = "root";         // Username database
$pass = "";             // Password database (kosongkan jika tidak ada)
$db   = "db_sekolah";   // Nama database

// Membuat koneksi
$koneksi = mysqli_connect($host, $user, $pass, $db);

// Cek koneksi
if (!$koneksi) {
  // Jika gagal, hentikan script dan tampilkan pesan error
  die("Koneksi gagal: " . mysqli_connect_error());
}

// Jika berhasil, bisa ditambahkan pesan (opsional)
// echo "Koneksi berhasil!";
?>
```
> [!TIP]
> File `koneksi.php` ini akan sering kita gunakan. Dengan memisahkannya, kita tidak perlu menulis ulang kode koneksi di setiap halaman. Cukup panggil dengan `include 'koneksi.php';`.

---

## 3. Menampilkan Data dari Database (Read)

Ini adalah inti dari halaman dinamis. Kita akan mengambil data dari tabel `siswa` yang sudah kita pelajari di materi SQL sebelumnya dan menampilkannya dalam bentuk tabel HTML.

**Studi Kasus: Membuat Halaman `daftar_siswa.php`**

```php
<!DOCTYPE html>
<html>
<head>
  <title>Daftar Siswa</title>
</head>
<body>

  <h1>Daftar Siswa PPLG</h1>

  <table border="1" cellpadding="10" cellspacing="0">
    <tr>
      <th>No.</th>
      <th>NIS</th>
      <th>Nama</th>
      <th>Kelas</th>
    </tr>

    <?php
    // 1. Panggil file koneksi
    include 'koneksi.php';

    // 2. Buat query SQL untuk mengambil data
    $sql = "SELECT * FROM siswa";
    $hasil = mysqli_query($koneksi, $sql);
    $nomor = 1;

    // 3. Tampilkan data menggunakan perulangan
    while ($data = mysqli_fetch_assoc($hasil)) {
    ?>
      <tr>
        <td><?php echo $nomor++; ?></td>
        <td><?php echo $data['nis']; ?></td>
        <td><?php echo $data['nama']; ?></td>
        <td><?php echo $data['kelas']; ?></td>
      </tr>
    <?php
    }
    ?>
  </table>

</body>
</html>
```
Sekarang, setiap kali ada data baru di tabel `siswa`, halaman ini akan otomatis menampilkannya tanpa perlu mengubah kode HTML.

---

## 4. Jembatan Konseptual ke AI: Data adalah "Bahan Bakar"

Setiap kali seorang siswa mendaftar melalui form, atau memberikan komentar di web, kita sedang melakukan **pengumpulan data**. Tabel `siswa` yang kita buat adalah contoh dataset (kumpulan data) dalam skala kecil.

**Bagaimana AI Menggunakan Data Ini?**
Sistem Kecerdasan Buatan (AI) tidak "berpikir" dari nol. Ia **belajar dari pola** yang ada di dalam data.
- **Analisis Data:** Dari tabel `siswa`, kita bisa melakukan analisis sederhana: "Berapa banyak siswa di setiap kelas?" atau "Siapa siswa yang paling pertama mendaftar?". Ini adalah dasar dari **analisis data**.
- **Prediksi:** Jika kita punya ribuan data siswa beserta nilai dan status kelulusan mereka, model AI bisa dilatih untuk menemukan pola. Misalnya, AI menemukan bahwa "siswa dengan kehadiran di atas 95% dan nilai rata-rata > 80 cenderung lulus tepat waktu". Dengan pola ini, AI bisa **memprediksi** potensi kelulusan siswa baru berdasarkan data kehadirannya.

**SQL dan PHP adalah alat untuk mengumpulkan bahan bakar tersebut. AI adalah mesin yang menggunakan bahan bakar itu untuk menghasilkan informasi atau prediksi yang berharga.**

---

## 5. Ulasan Singkat Python untuk Analisis Data

Meskipun PHP sangat andal untuk membuat web dan mengumpulkan data, bahasa yang paling populer untuk **menganalisis data** adalah **Python** dengan library-nya seperti **Pandas**.

Seorang analis data mungkin akan mengambil data yang sudah dikumpulkan oleh web PHP kita (misalnya dalam bentuk file `.csv`), lalu menganalisisnya dengan Python.

**Contoh Kode Python (Hanya untuk Wawasan):**
```python
# Menggunakan library pandas untuk membaca dan menganalisis data
import pandas as pd

# Membaca data yang diekspor dari database kita
df = pd.read_csv('export_data_siswa.csv')

# Menghitung jumlah siswa per kelas
print("Jumlah siswa per kelas:")
print(df['kelas'].value_counts())

# Menampilkan statistik deskriptif untuk kolom nilai (jika ada)
# print(df['nilai_rata_rata'].describe())
```
Ini menunjukkan bagaimana dua teknologi (PHP untuk web, Python untuk data) bisa bekerja sama dalam satu alur kerja industri.

---

## 6. Latihan

### a. Teori
1.  Jelaskan perbedaan mendasar antara web statis dan web dinamis!
2.  Mengapa kita perlu memisahkan kode koneksi database ke dalam file `koneksi.php` sendiri?
3.  Dalam konteks web dinamis, jelaskan peran dari:
    -   HTML
    -   PHP
    -   MySQL

### b. Praktek
Buatlah sebuah sistem **Buku Tamu** sederhana dengan dua file:
1.  `bukutamu.php`:
    -   Menampilkan semua pesan yang ada di dalam tabel `tamu` di database.
    -   Memiliki sebuah form HTML (`<form>`) dengan input untuk `nama` dan `pesan`. Form ini mengirimkan datanya ke `simpan_pesan.php`.
2.  `simpan_pesan.php`:
    -   File ini tidak perlu menampilkan HTML apa pun.
    -   Tugasnya adalah menangkap data `nama` dan `pesan` yang dikirim dari form.
    -   Menyimpan data tersebut ke dalam tabel `tamu` menggunakan query `INSERT`.
    -   Setelah berhasil menyimpan, arahkan pengguna kembali ke halaman `bukutamu.php` agar mereka bisa melihat pesan yang baru ditambahkan.

> [!TIP]
> Buatlah tabel `tamu` di database `db_sekolah` terlebih dahulu dengan kolom: `id` (INT, AUTO_INCREMENT, PRIMARY KEY), `nama` (VARCHAR), `pesan` (TEXT), dan `waktu` (TIMESTAMP, default CURRENT_TIMESTAMP).

---
> [!NOTE] Salinan Prompt
> buatkan LKS / materi / modul pembelajaran siswa dengan resource berupa gabungan dari beberapa kriteria berikut:
> 1. Web > AI, AI hanya konseptual, boleh ada tentang python tapi sebetulnya target untuk para siswa adalah menjadi programmer web / junior web programmer.
> 2. Materi untuk Kelas XII, tetap sesuaikan dengan CP/ATP nya untuk mapel KKA (koding dan kecerdasan artifical @03_Teaching/01_Perencanaan/21. Acuan Pembelajaran untuk SMK.pdf seperti algoritma pemrograman, dan analisis data, dsb.
> 3. Materi SQL sebelumnya dan 'harusnya' sekarang (juga) adalah @03_Teaching/02_Materi_Pelajaran/XI/Web_Programming/Basis_Data_dan_Pemrograman_Web.md , jadi jika materi ini pembahasannya lebih rumit atau lebih banyak diatas materi tersebut, maka akan digunakan untuk pertemuan selanjutnya saja.
> 4. Jika ternyata python yang muncul pada jawaban ini (materi ini), maka usahakan tidak terlalu rumit, melainkan kembali mengulas materi sebelumnya namun sedikit lebih dalam.
> 5. Target Siswa adalah menjadi web programmer, dengan target pencapaian pada kelas 3 setidaknya mengerti fundamental into intermediate PHP, agar di kelas 3 bisa masuk ke framework (laravel).
> 6. Karena keterbatasan tidak adanya power point yang daapat langsung dibuat dari materi ini, maka cukup buatkan modul/lks/shared materi yang digunakan guru untuk mengajar sekaligus dapat diterima dan mudah dimengerti oleh murid itu sendiri seperti @03_Teaching/02_Materi_Pelajaran/X/Modul_Ajar_Bab_2_Logika_dan_Algoritma.md . 
> 7. Salin juga isi prompt ini dalam dokumen obsidian note yang sama dengan materi yang dibuat dari prompt ini!
