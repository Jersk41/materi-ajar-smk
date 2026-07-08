---
publish: true
---
# 📘 Manual Teknis: Deep Dive Projek Solo Blog

Dokumen ini adalah panduan detail cara menulis kode untuk setiap file. Gunakan dokumen ini sebagai referensi saat kamu mulai mengetik di VS Code.

---

## 1. Menghubungkan "Jantung" Aplikasi (`config/database.php`)

File ini adalah satu-satunya tempat untuk mengatur koneksi. 

**Logika:** Semua modul (`posts` & `categories`) akan memanggil file ini. Jika *database* pindah, kamu cukup ubah satu file ini saja.

```php
<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "db_blog";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
```

---

## 2. Memasang "Baju" di Setiap Halaman (`layout/`)

Agar tidak menulis kode HTML yang sama berulang kali, kita potong menjadi dua bagian.

* **`header.php`**: Berisi `<head>`, link Bootstrap, dan Navigasi (Menu).
* **`footer.php`**: Berisi penutup tag HTML dan link JavaScript Bootstrap.

**Cara Pakai:** Di setiap file (misal `index.php`), panggil seperti ini:
```php
<?php include 'layout/header.php'; ?>
<?php include 'layout/footer.php'; ?>
```

---

## 3. Alur Logika CRUD (Proses Simpan & Ubah)

Pahami alur ini agar kamu tidak bingung kenapa data tidak masuk ke *database*:



1.  **Form (`create.php`)**: User ngetik data -> Klik Simpan.
2.  **Action (`store.php`)**: 
    * Ambil data dari `$_POST`.
    * Validasi (jangan ada yang kosong).
    * Jalankan **Prepared Statement** (Keamanan Baku).
    * `header("Location: index.php")` -> Lempar user kembali ke daftar.

---

## 4. Query Relasi (Menampilkan Nama Kategori)

Di halaman `posts/index.php`, kita tidak ingin melihat angka `category_id` (misal: 1, 2). Kita ingin melihat **Nama Kategori**-nya (misal: Teknologi).

Gunakan perintah **INNER JOIN** untuk menjahit dua tabel:

```sql
SELECT posts.*, categories.name AS category_name 
FROM posts 
INNER JOIN categories ON posts.category_id = categories.id;
```

---

## 🎨 Implementasi Tampilan (Bootstrap)

Berikut adalah contoh bagaimana meletakkan kode PHP di dalam "Stiker Baju" Bootstrap:

### A. Menampilkan Artikel dalam Bentuk Kartu (`index.php`)

```html
<div class="row">
  <?php while($row = $result->fetch_assoc()): ?>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <span class="badge bg-primary mb-2"><?= $row['category_name']; ?></span>
        <h5 class="card-title"><?= $row['title']; ?></h5>
        <p class="card-text text-muted">Ditulis pada: <?= $row['created_at']; ?></p>
        <a href="post.php?id=<?= $row['id']; ?>" class="btn btn-outline-primary btn-sm">Baca Selengkapnya</a>
      </div>
    </div>
  </div>
  <?php endwhile; ?>
</div>
```

### B. Form Input yang Rapi (`posts/create.php`)
```html
<form action="store.php" method="POST">
  <div class="mb-3">
    <label class="form-label">Judul Artikel</label>
    <input type="text" name="title" class="form-control" required>
  </div>
  
  <div class="mb-3">
    <label class="form-label">Kategori</label>
    <select name="category_id" class="form-select">
      <option value="1">Teknologi</option>
    </select>
  </div>
  
  <button type="submit" class="btn btn-success">Simpan Artikel</button>
</form>
```

---

## 🛡️ Checklist Keamanan (Harus Centang Semua!)

* [ ] Apakah semua `$_GET['id']` atau `$_POST` sudah masuk ke dalam `prepare()`?
* [ ] Apakah tampilan sudah menggunakan `htmlspecialchars()` untuk judul dan konten?
* [ ] Apakah koneksi *database* ditutup setelah tidak digunakan?

---

## 🛠️ Mencari Kesalahan (Common Errors)

| Pesan Error | Arti & Solusinya |
| :--- | :--- |
| `Fatal error: Call to a member function prepare()...` | Biasanya karena koneksi `$conn` belum terpanggil atau nama variabel salah. |
| `Warning: mysqli_stmt::bind_param()...` | Jumlah tanda tanya `?` di query tidak sama dengan jumlah variabel di `bind_param`. |
| `Undefined index...` | Nama `name="..."` di form tidak sama dengan yang kamu panggil di PHP. |

---

:::info[Tips AI]
Jika kamu bertanya ke AI tentang error, jangan cuma kirim kodenya. Kirim juga **pesan error-nya** secara lengkap. AI akan lebih cerdas membantumu jika ia tahu "rasa sakit" yang dialami kodemu.
:::
