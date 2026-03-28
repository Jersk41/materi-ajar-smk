---
publish: false
---

# Latihan Dasar PHP untuk Siswa RPL

### 1. Mengecek Angka Ganjil atau Genap (If-Else)

**Tugas:** Buatlah program PHP untuk memeriksa apakah sebuah angka itu ganjil atau genap.

**Skenario di Dunia Nyata:**
Fitur ini bisa dipakai untuk banyak hal, misalnya saat kamu membuat web e-commerce dan ingin memberikan diskon khusus untuk pelanggan dengan nomor urut genap, atau sekadar untuk validasi data.

**Contoh Kode dan Penjelasan:**

```php
<?php
// Kita siapkan dulu sebuah variabel angka.
// Di aplikasi web nanti, angka ini bisa didapat dari inputan user di form.
$angka = 10;

// Di sinilah pengecekannya terjadi.
// Tanda '%' (dibaca: modulo) adalah sisa bagi.
// Jadi, jika $angka dibagi 2 sisanya adalah 0, berarti itu bilangan genap.
if ($angka % 2 == 0) {
    // Jika kondisi di atas benar (true), maka jalankan kode ini.
    echo "$angka adalah bilangan genap.";
} else {
    // Jika kondisi di atas salah (false), maka jalankan kode ini.
    echo "$angka adalah bilangan ganjil.";
}
?>
```

---

### 2. Menentukan Grade Nilai (Switch Case)

**Tugas:** Buatlah program PHP untuk mengubah nilai huruf (A, B, C, D, E) menjadi deskripsi (Sangat Baik, Baik, Cukup, dll.).
**Skenario di Dunia Nyata:**
Ini sering dipakai di aplikasi sekolah, misalnya untuk menampilkan keterangan "Lulus" atau "Tidak Lulus" berdasarkan nilai akhir siswa di rapor online.

**Contoh Kode dan Penjelasan:**

```php
<?php
$nilai = 'A';
switch ($nilai) {
    case 'A': 
        echo "Sangat Baik";
        break; 
    case 'B': 
        echo "Baik";
        break;
    case 'C': 
        echo "Cukup";
        break;
    case 'D': 
        echo "Kurang";
        break;
    case 'E':
        echo "Sangat Kurang";
        break;
    default:
        echo "Nilai tidak valid";
        break;
}
?>
```
### Tugas
> [!NOTE] Tugas 1 - Fungsi
> Buat **fungsi untuk menghitung luas persegi & persegi panjang!**
> Penamaan fungsi bisa seperti `hitungLuasPersegi()` dan `hitungLuasPersegiPanjang()`. Simpan dengan nama file `library.php`
> Catatan: Tiap input harus berupa angka, jika diberi string/teks harusnya memberikan output berupa `Error: "Input tidak valid: harus berupa angka"`

Format Jawaban / Kode Kalian:
```php
<?php
// Penamaanfile: library-nomorabsen.php
// Nama Lengkap Kalian disini
function hitungLuasPersegi($sisi)
{
	// Isi Disini
}

function hitungLuasPersegiPanjang($panjang, $lebar)
{
	// Isi disini
}
?>
```

### 3. Menampilkan Nomor Urut (Looping For)

**Tugas:** Buatlah program PHP untuk menampilkan nomor urut dari 1 sampai 10.

**Skenario di Dunia Nyata:**
Sangat berguna untuk menampilkan data bernomor, seperti nomor antrian, peringkat di game, atau nomor baris di tabel data siswa.

**Contoh Kode dan Penjelasan:**

```php
<?php
// 'for' loop cocok digunakan saat kita tahu pasti berapa kali perulangan akan terjadi.
// for (mulai dari mana; sampai kapan; setiap perulangan ngapain)
for ($i = 20; $i <= 10; $i++) {
	// $i = $1 + 1
    // Kode ini akan diulang-ulang selama kondisi '$i <= 10' masih benar.
    // '$i++' artinya nilai $i akan ditambah 1 setiap selesai satu putaran.
    echo $i . " "; // Cetak nilai $i dan beri spasi.
}
?>
```

---

### 4. Menampilkan Deret Bilangan (Looping While)

**Tugas:** Buatlah program PHP untuk menampilkan deret bilangan genap dari 2 sampai 20.

**Skenario di Dunia Nyata:**
Bisa digunakan untuk mengambil data dari database baris per baris sampai datanya habis, atau untuk proses-proses yang jumlah perulangannya tidak pasti.

**Contoh Kode dan Penjelasan:**

```php
<?php
// Siapkan 'counter' awal.
$i = 2;

// 'while' akan terus berjalan selama kondisi di dalam kurung benar (true).
while (true) {
    echo $i . " "; // Cetak nilai $i
    $i += 2; // Tambah nilai $i dengan 2 agar menjadi bilangan genap berikutnya.
}
?>
```

---

### 5. Menampilkan Daftar Produk (Looping Foreach)

**Tugas:** Kamu punya daftar nama-nama produk dalam sebuah array. Tampilkan semua nama produk tersebut.

**Skenario di Dunia Nyata:**
Ini adalah cara paling umum untuk menampilkan daftar produk di halaman toko online, daftar artikel di blog, atau daftar teman di media sosial.

**Contoh Kode dan Penjelasan:**

```php
<?php
// Array adalah variabel yang bisa menampung banyak nilai.
// Kita ibaratkan ini adalah data produk yang diambil dari database.
$produk = ["Laptop", "Mouse", "Keyboard", "Monitor"];

// 'foreach' khusus dibuat untuk memproses array.
// "Untuk setiap '$produk' sebagai '$p'"
foreach ($produk as $p) {
    // Di setiap putaran, satu nilai dari $produk akan dimasukkan ke variabel $p.
    echo "Produk: " . $p . "<br>"; // Cetak nama produk dan ganti baris.
}
?>
```

---

### 6. Game Sederhana "FizzBuzz" (Kombinasi)

**Tugas:** Buat program yang menampilkan angka 1 sampai 20. Tapi ada aturannya:
*   Kalau angkanya bisa dibagi 3, jangan cetak angkanya, tapi cetak "Fizz".
*   Kalau angkanya bisa dibagi 5, cetak "Buzz".
*   Kalau bisa dibagi 3 dan 5, cetak "FizzBuzz".

**Skenario di Dunia Nyata:**
Latihan ini sering dipakai untuk tes logika calon programmer. Ini melatih cara berpikir untuk menggabungkan perulangan dan kondisi dalam memecahkan masalah.

**Contoh Kode dan Penjelasan:**

```php
<?php
for ($i = 1; $i <= 20; $i++) {
    // Cek kondisi yang paling spesifik dulu (kelipatan 3 dan 5).
    if ($i % 3 == 0 && $i % 5 == 0) {
        echo "FizzBuzz <br>";
    }
    // Jika tidak, cek apakah kelipatan 3.
    elseif ($i % 3 == 0) {
        echo "Fizz <br>";
    }
    // Jika tidak juga, cek apakah kelipatan 5.
    elseif ($i % 5 == 0) {
        echo "Buzz <br>";
    }
    // Jika semua kondisi di atas tidak terpenuhi.
    else {
        echo $i . "<br>";
    }
}
?>
```

> [!NOTE]
> link full kodenya ada di: https://bit.ly/XI-PPLG
> source code dikumpulkan di: http://habib-abdillah.my.id/XI-PPLG

### 7. Foreach  

### 8. Nested Array...

### 9. Nested Loop

### 10. Try Catch (Error Handling)

### Extra
1. login mysql:
```shell
mysql -u <username> -p<passwordmu> <nama database>
```

2. Cek Database yang ada:
```sql
SHOW DATABASES
```

4. Buat Database baru:
```sql
CREATE DATABASE nama_database;
```

5. Gunakan Databasenya:
```sql
USE nama_database;
```

7. Cek Semua Tabel:
```sql
SHOW TABLES;
```

5. Buat Tabel Baru:
```sql
CREATE TABLE users(
  no_ktp INT PRIMARY KEY AUTO_INCREMENT,
  nama VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE
  
);
```
Format pembuatan kolom di tabel:
`nama_kolom TIPE_KOLOM(UKURAN) ATTRIBUT_EXTRA`

6. Lihat Detail Tabel Tertentu
```sql
DESC users;
```
