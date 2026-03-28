---
publish: false
---

# Materi: Manipulasi Data (DML) di MySQL via Terminal

Setelah kita belajar cara membuat database dan tabel (`CREATE`), sekarang kita akan fokus pada cara mengelola *isi* dari tabel tersebut. Proses ini disebut **DML (Data Manipulation Language)**.

Operasi dasar DML yang akan kita pelajari adalah:
1.  **INSERT**: Menambahkan data baru ke dalam tabel.
2.  **SELECT**: Menampilkan data dari tabel (untuk verifikasi).
3.  **UPDATE**: Mengubah atau mengedit data yang sudah ada.
4.  **DELETE**: Menghapus data dari tabel.

---

## Prasyarat

Sebelum memulai, pastikan Anda sudah:
1.  Login ke MySQL Server:
    ```bash
    mysql -u nama_user -p
    ```
2.  Memilih database yang akan digunakan:
    ```sql
    USE nama_database;
    ```
    Contoh: `USE db_sekolah;`

---

## 1. INSERT - Menambahkan Data Baru

Perintah `INSERT INTO` digunakan untuk menambahkan baris data baru ke dalam sebuah tabel.

### Sintaks Dasar
```sql
INSERT INTO nama_tabel (kolom1, kolom2, kolom3, ...)
VALUES (nilai1, nilai2, nilai3, ...);
```

- `nama_tabel`: Tabel tujuan.
- `(kolom1, ...)`: Daftar kolom yang akan diisi.
- `(nilai1, ...)`: Daftar nilai yang sesuai dengan urutan kolom. Nilai berupa teks (string) harus diapit tanda kutip (`'`).

**Contoh:**
Misalkan kita punya tabel `siswa` dengan struktur `(id, nama, alamat, kelas)`.

```sql
INSERT INTO siswa (id, nama, alamat, kelas)
VALUES (1, 'Budi Santoso', 'Jl. Merdeka No. 10', 'XI-PPLG');
```

Jika Anda mengisi semua kolom sesuai urutan, Anda bisa menyingkatnya:
```sql
INSERT INTO siswa
VALUES (2, 'Ani Lestari', 'Jl. Pahlawan No. 5', 'XI-PPLG');
```

---

## 2. SELECT - Menampilkan Data

Untuk melihat hasil dari `INSERT`, `UPDATE`, atau `DELETE`, kita gunakan `SELECT`.

### Sintaks Dasar
- Menampilkan semua data dari tabel:
  ```sql
  SELECT * FROM nama_tabel;
  ```
- Menampilkan data dengan kondisi tertentu:
  ```sql
  SELECT * FROM nama_tabel WHERE kondisi;
  ```

**Contoh:**
- Melihat semua siswa:
  ```sql
  SELECT * FROM siswa;
  ```
- Melihat siswa dengan nama 'Budi Santoso':
  ```sql
  SELECT * FROM siswa WHERE nama = 'Budi Santoso';
  ```

---

## 3. UPDATE - Mengubah Data

Perintah `UPDATE` digunakan untuk memodifikasi data yang sudah ada di dalam tabel.

### Sintaks Dasar
```sql
UPDATE nama_tabel
SET kolom1 = nilai_baru1, kolom2 = nilai_baru2, ...
WHERE kondisi;
```

- `SET`: Menentukan kolom mana yang akan diubah dan nilai barunya.
- `WHERE`: **Sangat penting!** Klausa ini menentukan baris mana yang akan di-update. Tanpa `WHERE`, **semua baris** di tabel akan ter-update.

**Contoh:**
Ani Lestari pindah rumah. Kita perlu meng-update alamatnya. Kita akan mencari berdasarkan `id` karena `id` unik.

```sql
UPDATE siswa
SET alamat = 'Jl. Sudirman No. 25'
WHERE id = 2;
```

**PERHATIAN:** Selalu gunakan klausa `WHERE` yang spesifik (seperti `id`) saat melakukan `UPDATE` untuk menghindari kesalahan.

---

## 4. DELETE - Menghapus Data

Perintah `DELETE` digunakan untuk menghapus baris data dari tabel.

### Sintaks Dasar
```sql
DELETE FROM nama_tabel WHERE kondisi;
```

- `WHERE`: **Sangat krusial!** Klausa ini menentukan baris mana yang akan dihapus. Tanpa `WHERE`, Anda akan **menghapus semua data** di tabel Anda secara permanen!

**Contoh:**
Menghapus data siswa dengan `id` 1.

```sql
DELETE FROM siswa
WHERE id = 1;
```

**SANGAT PENTING:** Berhati-hatilah saat menggunakan `DELETE`. Pastikan klausa `WHERE` Anda sudah benar sebelum menjalankan perintah.

---

## Contoh Kasus Lengkap

Mari kita praktikkan semua perintah di atas.

1.  **Buat tabel `produk` (jika belum ada):**
    ```sql
    CREATE TABLE produk (
        id_produk INT PRIMARY KEY,
        nama_produk VARCHAR(100),
        harga INT,
        stok INT
    );
    ```

2.  **Masukkan 3 produk baru:**
    ```sql
    INSERT INTO produk VALUES (101, 'Buku Tulis', 5000, 50);
    INSERT INTO produk VALUES (102, 'Pensil 2B', 2000, 100);
    INSERT INTO produk VALUES (103, 'Penghapus', 1500, 75);
    ```

3.  **Lihat semua produk:**
    ```sql
    SELECT * FROM produk;
    ```

4.  **Update harga 'Pensil 2B' menjadi 2500:**
    ```sql
    UPDATE produk
    SET harga = 2500
    WHERE id_produk = 102;
    ```

5.  **Lihat lagi perubahannya:**
    ```sql
    SELECT * FROM produk WHERE id_produk = 102;
    ```

6.  **Hapus produk 'Penghapus':**
    ```sql
    DELETE FROM produk
    WHERE id_produk = 103;
    ```

7.  **Lihat data terakhir:**
    ```sql
    SELECT * FROM produk;
    ```

Selamat! Anda sekarang sudah bisa melakukan operasi dasar manipulasi data di MySQL.
