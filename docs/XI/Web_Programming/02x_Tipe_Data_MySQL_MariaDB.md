---
publish: false
---

# Tipe-Tipe Data pada MySQL dan MariaDB

Setiap kolom dalam tabel database harus memiliki tipe data yang spesifik. Tipe data menentukan jenis nilai yang dapat disimpan oleh kolom tersebut, seperti angka, teks, atau tanggal. Pemilihan tipe data yang tepat sangat penting untuk efisiensi penyimpanan dan kinerja query.

MySQL dan MariaDB memiliki tipe data yang sangat mirip karena MariaDB adalah *fork* dari MySQL. Berikut adalah kategori utama tipe data yang didukung oleh keduanya.

---

## 1. Tipe Data Numerik (Numeric Types)

Digunakan untuk menyimpan data berupa angka.

| Tipe Data          | Deskripsi                                                                                             | Jangkauan                                                                             |
| :----------------- | :---------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **INTEGER (INT)**  | Bilangan bulat standar.                                                                               | -2,147,483,648 hingga 2,147,483,647 (atau 0 hingga 4,294,967,295 jika `UNSIGNED`).    |
| **TINYINT**        | Bilangan bulat yang sangat kecil.                                                                     | -128 hingga 127 (atau 0 hingga 255 jika `UNSIGNED`).                                  |
| **SMALLINT**       | Bilangan bulat kecil.                                                                                 | -32,768 hingga 32,767 (atau 0 hingga 65,535 jika `UNSIGNED`).                         |
| **MEDIUMINT**      | Bilangan bulat berukuran sedang.                                                                      | -8,388,608 hingga 8,388,607 (atau 0 hingga 16,777,215 jika `UNSIGNED`).               |
| **BIGINT**         | Bilangan bulat besar.                                                                                 | -9,223,372,036,854,775,808 hingga 9,223,372,036,854,775,807.                          |
| **DECIMAL(P, D)**  | Angka desimal dengan presisi tetap. `P` adalah total digit, `D` adalah jumlah digit di belakang koma. | Sangat cocok untuk data keuangan agar tidak ada pembulatan. Contoh: `DECIMAL(10, 2)`. |
| **FLOAT**          | Angka desimal presisi tunggal (*floating-point*).                                                     | Kurang presisi dibandingkan `DECIMAL`, rentan terhadap masalah pembulatan.            |
| **DOUBLE**         | Angka desimal presisi ganda (*floating-point*).                                                       | Memiliki presisi lebih tinggi dari `FLOAT`.                                           |
| **BOOLEAN (BOOL)** | Sebenarnya disimpan sebagai `TINYINT(1)`. Nilai `0` dianggap `FALSE` dan `1` dianggap `TRUE`.         |                                                                                       |

---

## 2. Tipe Data Teks (String Types)

Digunakan untuk menyimpan data berupa teks atau string.

| Tipe Data | Deskripsi | Ukuran Maksimal |
| :--- | :--- | :--- |
| **CHAR(N)** | String dengan panjang tetap. `N` adalah jumlah karakter (1-255). | Jika data lebih pendek dari `N`, sisanya akan diisi spasi. Cepat untuk data dengan panjang pasti (misal: kode pos). |
| **VARCHAR(N)** | String dengan panjang variabel. `N` adalah jumlah karakter maksimal (1-65,535). | Hanya menggunakan ruang sesuai panjang data. Paling umum digunakan untuk nama, judul, dll. |
| **TEXT** | Teks panjang. | Hingga 65,535 karakter. |
| **TINYTEXT** | Teks sangat pendek. | Hingga 255 karakter. |
| **MEDIUMTEXT** | Teks berukuran sedang. | Hingga 16,777,215 karakter. |
| **LONGTEXT** | Teks sangat panjang. | Hingga 4,294,967,295 karakter. |
| **ENUM** | Pilihan dari daftar nilai yang sudah ditentukan. | Contoh: `ENUM('pria', 'wanita')`. Hanya salah satu nilai yang bisa dipilih. |
| **SET** | Mirip `ENUM`, tetapi bisa memilih beberapa nilai dari daftar yang ada. | Contoh: `SET('membaca', 'menulis', 'menggambar')`. |

---

## 3. Tipe Data Tanggal dan Waktu (Date and Time Types)

Digunakan untuk menyimpan informasi temporal.

| Tipe Data | Deskripsi | Format |
| :--- | :--- | :--- |
| **DATE** | Menyimpan tanggal. | `YYYY-MM-DD` |
| **TIME** | Menyimpan waktu. | `HH:MM:SS` |
| **DATETIME** | Menyimpan kombinasi tanggal dan waktu. | `YYYY-MM-DD HH:MM:SS` |
| **TIMESTAMP** | Menyimpan kombinasi tanggal dan waktu. | `YYYY-MM-DD HH:MM:SS`. Jangkauannya lebih terbatas dari `DATETIME`. Berguna untuk melacak waktu perubahan data (`ON UPDATE CURRENT_TIMESTAMP`). |
| **YEAR** | Menyimpan tahun. | `YYYY` |

---

## 4. Tipe Data Biner (Binary Types)

Digunakan untuk menyimpan data biner seperti gambar, file, atau data terenkripsi.

| Tipe Data | Deskripsi |
| :--- | :--- |
| **BINARY(N)** | Data biner dengan panjang tetap. |
| **VARBINARY(N)** | Data biner dengan panjang variabel. |
| **BLOB** | *Binary Large Object*. Untuk data biner berukuran besar. |
| **TINYBLOB** | Versi kecil dari `BLOB`. |
| **MEDIUMBLOB** | Versi sedang dari `BLOB`. |
| **LONGBLOB** | Versi sangat besar dari `BLOB`. |

**Catatan**: Menyimpan file besar (seperti gambar atau video) langsung di database (sebagai `BLOB`) umumnya tidak disarankan. Praktik yang lebih baik adalah menyimpan path atau URL file tersebut di database, sementara filenya disimpan di sistem file server.

---

## 5. Tipe Data Lainnya

| Tipe Data | Deskripsi | Catatan |
| :--- | :--- | :--- |
| **JSON** | Menyimpan data dalam format JSON (*JavaScript Object Notation*). | Memungkinkan validasi otomatis dan akses data yang efisien di dalam dokumen JSON. Sangat berguna untuk data semi-terstruktur. |

## Perbedaan Antara MySQL dan MariaDB

Secara umum, tipe data di atas berlaku untuk keduanya. Namun, MariaDB terkadang memperkenalkan beberapa tipe data atau alias tambahan sebagai bagian dari pengembangannya, misalnya:
- **INET4 / INET6**: Untuk menyimpan alamat IPv4 dan IPv6 (di MariaDB).

Meskipun demikian, untuk penggunaan umum dalam pengembangan web, tipe data inti yang telah dijelaskan di atas adalah yang paling sering digunakan dan sepenuhnya kompatibel antara MySQL dan MariaDB.

---

## Referensi

Berikut adalah beberapa tautan referensi resmi dan terpercaya untuk informasi lebih lanjut mengenai tipe data pada MySQL dan MariaDB:

*   **Dokumentasi Resmi Tipe Data MySQL:** [MySQL 8.4 Reference Manual - Data Types](https://dev.mysql.com/doc/refman/8.4/en/data-types.html)
*   **Dokumentasi Resmi Tipe Data MariaDB:** [MariaDB Documentation - Data Types](https://mariadb.com/kb/en/data-types/)
