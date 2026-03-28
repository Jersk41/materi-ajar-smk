---
publish: false
---

# Basis Data dan Pemrograman Web
## Materi: Perintah Dasar MySQL di Terminal

Ini adalah panduan untuk menggunakan perintah-perintah dasar MySQL melalui terminal. Materi ini mencakup manajemen database, manajemen tabel, hingga operasi data inti yang dikenal sebagai CRUD (Create, Read, Update, Delete).

### Prasyarat

Pastikan Anda sudah meng-install MySQL Server di sistem Anda dan layanan tersebut sedang berjalan.

---

### Langkah 1: Masuk ke MySQL

Buka terminal Anda dan masuk ke MySQL sebagai user (misalnya, `root`). Anda akan diminta untuk memasukkan password.

```bash
mysql -u root -p
```

Setelah berhasil masuk, Anda akan melihat prompt `mysql`.

---

### Langkah 2: Perintah Dasar Manajemen Database

Setelah login, langkah pertama adalah mengelola database.

*   `SHOW DATABASES;`
    *   **Fungsi**: Menampilkan daftar semua database yang ada di server.
*   `CREATE DATABASE nama_database;`
    *   **Fungsi**: Membuat sebuah database baru. Contoh: `CREATE DATABASE db_sekolah;`
*   `USE nama_database;`
    *   **Fungsi**: Memilih database untuk digunakan. Semua perintah selanjutnya akan berlaku pada database ini. Contoh: `USE db_sekolah;`
*   `DROP DATABASE nama_database;`
    *   **Fungsi**: Menghapus sebuah database secara permanen. **Hati-hati!** Operasi ini tidak bisa dibatalkan.

---

### Langkah 3: Perintah Dasar Manajemen Tabel

Setelah memilih database, Anda bisa mulai mengelola tabel di dalamnya.

*   `SHOW TABLES;`
    *   **Fungsi**: Menampilkan semua tabel yang ada di dalam database yang sedang aktif.

*   `CREATE TABLE nama_tabel (...);`
    *   **Fungsi**: Membuat tabel baru. Ini adalah contoh untuk membuat tabel `siswa`:
    ```sql
    CREATE TABLE siswa (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nis VARCHAR(10) NOT NULL,
        nama VARCHAR(100) NOT NULL,
        kelas VARCHAR(10),
        alamat TEXT,
        UNIQUE(nis)
    );
    CREATE TABLE nilai (
	    id INT AUTO_INCREMENT PRIMARY KEY,
	    mapel VARCHAR(20),
	    nilai VARCHAR(5)
    );
    ```

*   `DESCRIBE nama_tabel;` (atau `DESC nama_tabel;`)
    *   **Fungsi**: Menampilkan struktur (kolom, tipe data, dll.) dari sebuah tabel. Contoh: `DESCRIBE siswa;`

*   `ALTER TABLE nama_tabel [aksi];`
    *   **Fungsi**: Mengubah struktur sebuah tabel. Beberapa aksi umum:
    *   `ADD nama_kolom tipe_data;` - Menambah kolom baru. Contoh: `ALTER TABLE siswa ADD COLUMN tanggal_lahir DATE;`
    *   `DROP COLUMN nama_kolom;` - Menghapus kolom. Contoh: `ALTER TABLE siswa DROP COLUMN alamat;`
    *   `MODIFY COLUMN nama_kolom tipe_data_baru;` - Mengubah tipe data sebuah kolom. Contoh: `ALTER TABLE siswa MODIFY COLUMN nis VARCHAR(15);`
    * `RENAME COLUMN nama_kolom_saat_ini TO nama_kolom_baru;` - Mengganti nama kolom
    *  `RENAME TO nama_tabel_baru;` - Mengganti nama tabel. Contoh: `ALTER TABLE siswa RENAME TO data_murid;`

*   `DROP TABLE nama_tabel;`
    *   **Fungsi**: Menghapus sebuah tabel secara permanen.

**Referensi Tipe Data**: [[02a_Tipe_Data_MySQL_MariaDB]]

---

### Langkah 4: Operasi Data (CRUD)

Setelah tabel siap, Anda bisa melakukan manipulasi data. Operasi ini dikenal dengan CRUD.

**Apa itu CRUD?**

CRUD adalah singkatan dari **Create, Read, Update, dan Delete**.

*   **Create**: Menambahkan data baru (`INSERT`)
*   **Read**: Membaca data (`SELECT`)
*   **Update**: Mengubah data (`UPDATE`)
*   **Delete**: Menghapus data (`DELETE`)

#### C - CREATE (Menambahkan Data dengan `INSERT`)

**Menambahkan satu data:**
```sql
INSERT INTO siswa (nis, nama, kelas, alamat) 
VALUES ('1001', 'Andi Budiman', 'XI PPLG', 'Jl. Merdeka No. 10');
```

**Menambahkan beberapa data sekaligus:**
```sql
INSERT INTO siswa (nis, nama, kelas, alamat) VALUES
('1002', 'Citra Lestari', 'XI PPLG', 'Jl. Pahlawan No. 5'),
('1003', 'Doni Saputra', 'X TKJ', 'Jl. Sudirman No. 12');
```

#### R - READ (Membaca Data dengan `SELECT`)

**Menampilkan semua data:**
```sql
SELECT * FROM siswa;
```

**Menampilkan kolom tertentu:**
```sql
SELECT nama, kelas FROM siswa;
```

**Menampilkan data dengan kondisi `WHERE`:**
```sql
SELECT * FROM siswa WHERE kelas = 'XI PPLG';
```

#### U - UPDATE (Memperbarui Data dengan `UPDATE`)

**Penting:** Selalu gunakan `WHERE` saat `UPDATE` untuk menghindari mengubah semua data.

```sql
UPDATE siswa 
SET alamat = 'Jl. Gatot Subroto No. 88' 
WHERE nis = '1003';
```

#### D - DELETE (Menghapus Data dengan `DELETE`)

**PERHATIAN:** Selalu gunakan `WHERE` saat `DELETE` untuk menghindari menghapus semua data.

```sql
DELETE FROM siswa WHERE nis = '1003';
```

---

### Langkah 5: Keluar dari MySQL

Setelah selesai, Anda bisa keluar dari prompt MySQL dengan perintah `EXIT` atau `QUIT`.

```sql
EXIT;
```

Selamat! Anda telah mempelajari perintah-perintah dasar untuk berinteraksi dengan MySQL di terminal.