---
tags:
  - javascript
  - dasar-pemrograman
  - logika
  - PPLG
  - kelas-x
  - modul-ajar
creation-date: 2025-10-03
author: Japar, dan Gemini
publish: false
---
# Modul Ajar - Bab 3: Dasar-Dasar Pemrograman dengan JavaScript

> [!INFO]
> **Topik Utama:** Variabel, Tipe Data, Operator, dan penggunaan **Browser Console**.
> **Tujuan:** Setelah mempelajari modul ini, siswa diharapkan mampu menulis perintah JavaScript dasar, memahami cara kerja variabel dan tipe data, serta mengimplementasikan logika sederhana langsung di browser.

> [!TIP]
> Pendekatan ini fokus pada fondasi logika pemrograman menggunakan JavaScript, meniru cara belajar bahasa Python, sebelum melompat ke pembuatan halaman web yang kompleks.

---

## 1. Lingkungan Belajar: Konsol Browser

Sebelum kita membuat website, kita akan belajar "berbicara" bahasa JavaScript di lingkungan yang paling mudah diakses: **Konsol Browser (Browser Console)**.

Setiap browser modern (Chrome, Firefox, Edge) memiliki konsol yang berfungsi seperti terminal interaktif untuk JavaScript. Ini adalah tempat yang sempurna untuk bereksperimen.

#### Cara Membuka Konsol:
1.  Buka browser Anda (misalnya, Google Chrome).
2.  Klik kanan di mana saja pada halaman web, lalu pilih **"Inspect"** atau **"Inspect Element"**.
3.  Sebuah panel akan muncul. Klik tab yang bertuliskan **"Console"**.
4.  Anda akan melihat area dengan tanda `>` di mana Anda bisa mulai mengetik kode.

---

## 2. Elemen Dasar Pemrograman JavaScript

Mari kita mulai menulis perintah dasar JavaScript di konsol.

#### a. Variabel (`let`, `const`)

> [!NOTE]
> **Variabel** adalah "wadah" bernama untuk menyimpan nilai. Di JavaScript modern, kita menggunakan `let` untuk variabel yang nilainya bisa berubah, dan `const` untuk konstanta yang nilainya tidak akan berubah.

```javascript
let namaSiswa = "Budi";
let umur = 16;
const nomorInduk = "12345";

// Coba ketik di konsol, lalu tekan Enter
console.log(namaSiswa); // console.log() sama seperti print() di Python
```

#### b. Tipe Data

- **String:** Teks, diapit oleh kutip `"` atau `'`. Contoh: `"SMK Bisa!"`.
- **Number:** Angka, baik bulat maupun desimal. Contoh: `17`, `3.14`.
- **Boolean:** Nilai kebenaran, `true` atau `false`.

```javascript
let pesan = "Selamat Belajar"; // String
let nilai = 95.5;             // Number
let sudahMakan = true;        // Boolean
```

#### c. Input dan Output di Browser

- **Output:** `console.log()` untuk menampilkan data di konsol.
- **Input:** `prompt()` untuk meminta masukan dari pengguna melalui pop-up.
- **Alert:** `alert()` untuk menampilkan pesan pop-up sederhana.

```javascript
// Coba di konsol:
let namaKamu = prompt("Siapa nama kamu?");
alert("Halo, " + namaKamu + "!");
console.log("Pengguna bernama " + namaKamu + " telah disapa.");
```

#### d. Operator

- **Aritmatika:** `+`, `-`, `*`, `/`
- **Perbandingan:** 
```js
//===
//!==
// >
// >=
// <
// <=
```
- **Logika:** `&&` (dan), `||` (atau), `!` (bukan/not)

#### e. Komentar

- `//` untuk komentar satu baris.
- `/* ... */` untuk komentar multi-baris.

---

## 3. Studi Kasus: Logika LULUS/REMEDIAL di JavaScript

Mari kita terapkan logika dari Bab 2 menggunakan JavaScript di konsol.

**Pseudocode:**
```
START
  READ Nilai
  IF Nilai >= 75 THEN
    PRINT "LULUS"
  ELSE
    PRINT "REMEDIAL"
  ENDIF
END
```

**Kode JavaScript (untuk diketik di konsol):**
```javascript
// 1. Minta input nilai dari pengguna
let nilai_siswa = prompt("Masukkan nilai siswa:");

// 2. Fungsi prompt() menghasilkan string, ubah ke Angka dengan parseInt()
nilai_siswa = parseInt(nilai_siswa);

// 3. Gunakan struktur if-else untuk membuat keputusan
if (nilai_siswa >= 75) {
  // 4. Blok ini berjalan jika kondisi Benar (true)
  alert("Hasil: LULUS");
  console.log("Siswa dengan nilai " + nilai_siswa + " dinyatakan LULUS.");
} else {
  // 5. Blok ini berjalan jika kondisi Salah (false)
  alert("Hasil: REMEDIAL");
  console.log("Siswa dengan nilai " + nilai_siswa + " dinyatakan REMEDIAL.");
}
```

---

## 4. Latihan Interaktif (Kerjakan di Konsol)

#### Latihan 1: Sapa Pengguna
Buat skrip yang:
1.  Meminta nama pengguna menggunakan `prompt()`.
2.  Meminta asal sekolah pengguna.
3.  Menampilkan pesan sapaan di `console.log()` yang menyertakan nama dan asal sekolah.

#### Latihan 2: Kalkulator Sederhana
Buat skrip yang:
1.  Meminta bilangan pertama dari pengguna.
2.  Meminta bilangan kedua.
3.  Menampilkan hasil penjumlahan, pengurangan, dan perkalian kedua bilangan tersebut di `console.log()`.

#### Latihan 3: Menghitung Luas Persegi Panjang
Buat skrip untuk menghitung luas persegi panjang.
1.  Minta input `panjang`.
2.  Minta input `lebar`.
3.  Hitung luas dengan rumus `luas = panjang * lebar`.
4.  Tampilkan hasilnya menggunakan `alert()`.

---

## 5. Referensi

*   **MDN Web Docs - JavaScript:**
    *   [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
    *   [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
*   **W3Schools - JavaScript Tutorial:**
    *   [JS Introduction](https://www.w3schools.com/js/js_intro.asp)
