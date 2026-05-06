---
publish: false
---
# 📝 Projek Personal Blog: PHP Native & Relational DB

Projek ini adalah penerapan nyata dari materi **Desain Database Relasional**. Kita akan membangun sebuah "Solo Blog" (Blog Pribadi) di mana kamu adalah satu-satunya penulis yang mengelola artikel melalui sistem yang teratur.

:::info[Tujuan Utama]
Bukan cuma bikin web yang "asal jalan", tapi web yang **aman** dan punya **struktur database yang benar** menggunakan relasi 1-M (One-to-Many/Satu-ke-Banyak).
:::

---

## 🗃️ Struktur Database (Versi Ringan)
Kita akan menggunakan dua tabel utama untuk memahami cara menghubungkan data:
1.  **categories**: Tempat menyimpan kategori (Teknologi, Lifestyle, dsb).
2.  **posts**: Tempat menyimpan artikel yang terhubung ke salah satu kategori.

```sql
-- 1. Tabel Kategori
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE
);

-- 2. Tabel Posts (Relasi ke Categories)
CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);
```

---

## 📁 Struktur Folder (Susunan File)
Agar kamu tidak bingung, setiap file dipisah berdasarkan fungsinya (Modul).

```text
blogspot/
├── config/
│   └── database.php      # Pusat koneksi ke database
├── layout/               # Kerangka tampilan (Potongan kode yang dipakai berulang)
│   ├── header.php        # Bagian atas & Navigasi (Bootstrap 5)
│   └── footer.php        # Bagian bawah & Script penutup
├── posts/                # MODUL ARTIKEL (Segala urusan tulisan)
│   ├── index.php         # Daftar artikel di Dashboard (Tabel)
│   ├── create.php        # Form buat tulisan baru
│   ├── store.php         # Proses simpan data ke database
│   ├── edit.php          # Form ubah tulisan
│   ├── update.php        # Proses simpan perubahan
│   └── delete.php        # Proses hapus artikel
├── categories/           # MODUL KATEGORI (Pengelompokan tulisan)
│   ├── index.php         # Daftar & Tambah kategori
│   └── delete.php        
├── index.php             # Halaman Depan (Tampilan untuk pembaca)
└── post.php              # Detail Artikel (Halaman baca selengkapnya)
```

---

## 🛡️ SOP Keamanan & AI (Aturan Main Baku)

**SOP** (*Standard Operating Procedure*) adalah **Aturan Main Baku**. Ikuti aturan ini agar kodemu standar industri dan aman.

### 1. No Prepared Statement = No Score
Jangan pernah menulis query "mentah" seperti ini: `SELECT * FROM posts WHERE id = $id`.
**Wajib menggunakan Prepared Statements (Pernyataan Siap-Pakai):**
* **Kenapa?** Agar webmu aman dari *SQL Injection* (serangan hacker lewat form).
```php
$stmt = $conn->prepare("SELECT * FROM posts WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
```

### 2. Gunakan AI Secara Bertanggung Jawab
Boleh tanya ChatGPT/Gemini, tapi kamu adalah **Bos**, AI adalah **Asisten**. Kamu harus paham apa yang diketik Asistenmu. Jika mentok, gunakan perintah ini:
> *"Saya sedang belajar PHP Native. Tolong jelaskan maksud kode ini baris demi baris dalam bahasa Indonesia agar saya paham alurnya."*

---

## 🎨 Panduan Tampilan & Bootstrap 101

Bingung cara pakai Bootstrap? Anggap Bootstrap itu adalah **Kumpulan Stiker Baju**. Kamu punya HTML (tubuh polos), lalu kamu tempelkan "stiker" (Class) supaya terlihat keren.

### Istilah yang Wajib Tahu
* **`.container`**: Kotak pembungkus agar konten tidak mepet ke pinggir layar.
* **`.btn .btn-primary`**: `.btn` itu bentuk tombol, `.btn-primary` itu warna birunya.
* **`.card`**: Kotak putih cantik untuk membungkus tulisan (seperti kartu nama).

### Gambaran Kasar Halaman


1.  **Halaman Utama (`index.php`)**: Isinya deretan `.card`. Tiap kartu berisi Judul, Nama Kategori (pake Badge), dan tombol "Baca Selengkapnya".
2.  **Dashboard Penulis (`posts/index.php`)**: Isinya harus berupa **Tabel**. Ada kolom No, Judul, Kategori, dan tombol Aksi (Edit/Hapus).
3.  **Form Input (`posts/create.php`)**: Gunakan class `.form-control` pada input agar kotak ketiknya terlihat modern dan rapi.

---

## 🛠️ Tips Troubleshooting (Pemecahan Masalah)

**Troubleshooting** adalah proses **mencari kesalahan** dan memperbaikinya. Jika webmu error, lakukan hal ini:

* **Cek Koneksi:** Pastikan MySQL di XAMPP/Laragon sudah menyala (indikator hijau).
* **Variable Undefined:** Cek apakah kamu sudah memanggil file koneksi dengan `include '../config/database.php'` di baris paling atas.
* **Intip Data:** Gunakan `var_dump($_POST);` untuk melihat apakah data dari form beneran terkirim atau tidak.
* **Query Error:** Tambahkan `die($conn->error)` jika query tidak jalan untuk melihat pesan error dari database.

---

## 🗓️ Timeline Pengembangan (Urutan Kerja)

* **Minggu 1:** Buat Database & Tabel. Selesaikan modul **Categories** agar kategori siap dipilih.
* **Minggu 2:** Buat form artikel (`create.php`) dan proses simpan data (`store.php`).
* **Minggu 3:** Selesaikan fitur **Edit** dan **Delete** artikel. Pastikan relasi tabel bekerja.
* **Minggu 4:** Buat tampilan depan (`index.php`) menggunakan Query `JOIN` untuk menampilkan nama kategori di setiap artikel.

---

:::warning[Misi Eksperimen]
Setelah aplikasimu jalan, coba hapus salah satu kategori yang sudah punya artikel. Lalu cek tabel `posts`, apa yang terjadi pada kolom `category_id` artikel tersebut? Perhatikan bagaimana database menjaga data agar tetap konsisten!
:::
