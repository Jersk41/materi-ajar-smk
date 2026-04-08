---
publish: false
---
# Panduan Praktikum Simple Blog (PHP Dasar)

Dokumen ini dipakai siswa saat praktikum mapel Pemrograman Web dan Basis Data.

## 1. Tujuan Praktikum

Setelah praktikum ini, siswa mampu:

1. Membuat aplikasi blog sederhana berbasis PHP dan MySQL.
2. Menampilkan, menambah, mengubah, dan menghapus data kategori dan post.
3. Menerapkan tampilan web yang rapi menggunakan CSS dasar.
4. Menambahkan interaksi dasar menggunakan JavaScript.
5. Memahami alur data dari form ke database lalu ditampilkan kembali.

## 2. Tools dan Persiapan

1. Editor kode (misalnya VS Code).
2. Server lokal (XAMPP/Laragon/Docker).
3. Database MySQL aktif.
4. Browser untuk uji hasil.

## 3. Struktur Folder Praktikum

```text
simple-blog/
  config/
    koneksi.php
  categories/
    index.php
    create.php
    insert.php
    edit.php
    update.php
    delete.php
  posts/
    index.php
    create.php
    insert.php
    edit.php
    update.php
    delete.php
  assets/
    style.css
    scripts.js
  index.php
```

## 4. Rancangan Database

Buat database: `db_simple_blog`

Skema inti (wajib, fokus CRUD):

1. Tabel `categories`.
2. Tabel `posts`.
3. Relasi `posts.category_id -> categories.id`.

```sql
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(120) NOT NULL UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(220) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_posts_category FOREIGN KEY (category_id)
    REFERENCES categories(id) ON DELETE RESTRICT
);
```

## 5. Langkah Praktikum

### Langkah A - Koneksi Database

1. Buat file `config/koneksi.php`.
2. Simpan konfigurasi host, username, password, dan nama database.
3. Uji koneksi berhasil sebelum lanjut.

Target:

1. Tidak ada error koneksi saat file dipanggil.

### Langkah B - CRUD Kategori

1. Buat folder `categories` berisi file CRUD sederhana.
2. Tambahkan data kategori minimal 3 item.
3. Pastikan nama kategori unik.

Target:

1. Data kategori siap dipakai pada form post.

### Langkah C - Tampil Data Post (Read)

1. Buka `posts/index.php`.
2. Panggil file koneksi.
3. Jalankan query `JOIN` agar nama kategori ikut tampil.
4. Tampilkan hasilnya dalam tabel HTML.

Contoh query:

```sql
SELECT posts.id, posts.title, categories.name AS category_name, posts.created_at
FROM posts
INNER JOIN categories ON categories.id = posts.category_id
ORDER BY posts.id DESC;
```

Target:

1. Data post tampil beserta kategori di browser.

### Langkah D - Form Tambah Data (Create Form)

1. Buat `posts/create.php`.
2. Isi form: judul, kategori, dan isi post.
3. Form mengarah ke `posts/insert.php` dengan method `POST`.

Target:

1. Form bisa ditampilkan dan diisi.

### Langkah E - Proses Simpan (Insert)

1. Buat `posts/insert.php`.
2. Ambil data dari `$_POST`.
3. Validasi data tidak kosong.
4. Pastikan `category_id` valid dari tabel `categories`.
5. Jalankan query `INSERT`.
6. Redirect kembali ke `posts/index.php`.

Target:

1. Data baru berhasil masuk ke tabel `posts`.

### Langkah F - Form Edit

1. Tambahkan tombol edit di `posts/index.php`.
2. Buat `posts/edit.php?id=...`.
3. Ambil data lama berdasarkan `id`.
4. Tampilkan data lama ke dalam form.

Target:

1. Data lama muncul di form edit.

### Langkah G - Proses Update

1. Buat `posts/update.php`.
2. Ambil `id`, `category_id`, `title`, dan `content` dari `$_POST`.
3. Validasi data.
4. Jalankan query `UPDATE`.
5. Redirect ke `posts/index.php`.

Target:

1. Data post berhasil diubah.

### Langkah H - Hapus Data

1. Tambahkan tombol hapus di `posts/index.php`.
2. Arahkan ke `posts/delete.php?id=...`.
3. Jalankan query `DELETE` berdasarkan `id`.
4. Redirect kembali ke daftar post.

Target:

1. Data terhapus dari tabel.

### Langkah I - Styling Tampilan (CSS)

1. Rapikan tampilan halaman list kategori, list post, dan form.
2. Gunakan gaya konsisten untuk tabel, tombol, input, dan alert.
3. Atur responsif dasar agar tampilan tetap nyaman di layar mobile.

Target:

1. Halaman tidak hanya berjalan, tetapi juga rapi dan mudah dibaca.

### Langkah J - Interaksi Dasar (JavaScript)

1. Tambahkan konfirmasi sebelum hapus data.
2. Tambahkan validasi klien sederhana untuk field wajib.
3. Tambahkan interaksi kecil seperti tutup pesan alert.

Target:

1. Interaksi penting berjalan tanpa mengganggu alur CRUD.

## 6. Aturan Penulisan Kode

1. Nama file harus sesuai fungsi.
2. Gunakan nama variabel yang jelas.
3. Pisahkan file tampilan dan file proses.
4. Gunakan validasi input sebelum query dijalankan.
5. Hindari hardcode berulang untuk konfigurasi koneksi.
6. Gunakan penamaan kelas CSS yang konsisten.
7. Gunakan JavaScript hanya untuk interaksi yang relevan.

## 7. Standar Tampilan Minimum (Wajib)

1. Layout halaman rapi dengan jarak antar elemen yang konsisten.
2. Tabel data mudah dibaca dan memiliki state saat data kosong.
3. Form memiliki label jelas, fokus input, dan pesan error sederhana.
4. Tombol aksi mudah dibedakan (utama, ubah, hapus).
5. Tampilan tetap bisa digunakan pada layar mobile.
6. Konfirmasi hapus berjalan dengan JavaScript.

## 8. Checklist Praktikum Siswa

1. Koneksi database berhasil.
2. Data kategori tersedia minimal 3 item.
3. Halaman daftar post tampil.
4. Fitur tambah data berhasil.
5. Fitur edit data berhasil.
6. Fitur hapus data berhasil.
7. Tampilan halaman list dan form sudah rapi.
8. Tampilan tetap nyaman di layar mobile.
9. Konfirmasi hapus berjalan.
10. Validasi klien dasar berjalan.
11. Tidak ada error PHP saat diuji.
12. Struktur folder sesuai panduan.

## 9. Error Umum dan Cara Cek

1. Data tidak masuk:
   cek method form, nama input, dan query `INSERT`.
2. Data tidak tampil:
   cek query `SELECT`, `JOIN`, dan koneksi database.
3. Kategori tidak terbaca:
   cek nilai `category_id` dan data master kategori.
4. Edit/hapus gagal:
   cek apakah `id` terkirim dengan benar.
5. Konfirmasi hapus tidak muncul:
   cek selector JS dan apakah file `scripts.js` terpanggil.
6. Tampilan berantakan:
   cek class HTML dan rule CSS yang belum sinkron.
7. Halaman putih/error:
   aktifkan tampilan error dan baca pesan error PHP.

## 10. Tugas Pengayaan (Opsional)

1. Tambah fitur pencarian judul post.
2. Tambah fitur detail post.
3. Tambah pagination sederhana.
4. Tambah upload gambar thumbnail.
5. Tambah dark/light mode sederhana.

## 11. Kriteria Penilaian

1. `50%` Fitur CRUD inti dan relasi tabel berjalan lengkap.
2. `20%` Struktur file dan kerapian kode.
3. `20%` Kualitas tampilan CSS dan responsif dasar.
4. `10%` Interaksi JavaScript yang relevan.

## 12. Cross-References

1. Referensi praktikum PHP Native menggunakan OOP studi kasus web blog:
   https://habibabdillah.my.id/materi/example-materi
2. Portal publikasi materi ajar:
   https://materi-ajar-smk.pages.dev
