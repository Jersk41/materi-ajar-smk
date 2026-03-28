---
publish: false
---

# Bab 2: Pengenalan Pemrograman Web

## 1. Bagaimana Cara Web Bekerja?

Setiap kali Anda membuka sebuah website, ada proses komunikasi yang terjadi antara browser Anda (client) dan sebuah komputer di tempat lain yang disebut server.

### Alur Kerja Web Server  
```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant WS as Web Server
    participant DB as Database

    U->>WS: Request (HTTP/HTTPS)
    WS->>DB: Ambil data (jika perlu)
    DB-->>WS: Kirim data
    WS-->>U: Respon (HTML, CSS, JS)
    U->>U: Browser menampilkan halaman
````

- **User (Client):** Anda mengetik alamat website (misal: google.com) di browser.
- **Request:** Browser mengirim permintaan melalui internet ke alamat tersebut.
- **Web Server:** Komputer server menerima permintaan, mencari file yang diminta (HTML, CSS, JS), dan terkadang mengambil data dari database.
- **Respon:** Server mengirimkan kembali file-file tersebut sebagai balasan.
- **Render:** Browser Anda menyusun file-file tersebut menjadi halaman web yang bisa Anda lihat.

### Contoh Web Server Populer
- Apache
- Nginx
- LiteSpeed
- IIS (Internet Information Services) dari Microsoft

---

## 2. Tiga Pilar Frontend (Tampilan Depan Web)

Halaman web yang Anda lihat dibangun oleh tiga teknologi utama yang bekerja bersama-sama. Mari kita analogikan dengan membangun sebuah rumah.
### a. HTML (HyperText Markup Language)
- **Peran:** Sebagai **kerangka** atau **struktur** dasar dari rumah.
- **Fungsi:** Menentukan elemen apa saja yang ada di halaman dan bagaimana susunannya. Misalnya, ini adalah judul (`<h1>`), ini adalah paragraf (`<p>`), dan ini adalah gambar (`<img>`). HTML adalah tulang punggung dari setiap halaman web.

### b. CSS (Cascading Style Sheets)
- **Peran:** Sebagai **dekorasi** dan **tata letak** rumah.
- **Fungsi:** Memberi gaya pada struktur HTML. CSS menentukan warna teks, jenis font, ukuran gambar, posisi elemen di layar, dan semua yang berhubungan dengan penampilan visual. CSS membuat web menjadi indah.

### c. JavaScript (JS)
- **Peran:** Sebagai **sistem kelistrikan dan fungsionalitas** rumah.
- **Fungsi:** Membuat halaman web menjadi interaktif dan dinamis. Dengan JS, Anda bisa membuat tombol yang bisa diklik, form yang divalidasi, galeri gambar yang bisa digeser, atau memuat data baru tanpa harus me-refresh seluruh halaman.

```mermaid
graph TD
    A[HTML - Kerangka] --> B[CSS - Tampilan];
    A --> C[JavaScript - Interaksi];
    B -- Bekerja Sama --> D{Halaman Web Modern};
    C -- Bekerja Sama --> D;
```

---

## 3. Rangkuman

1. Web bekerja melalui model **request-response** antara client (browser) dan server.
2. **Web server** adalah software/hardware yang melayani permintaan dari client.
3. Tampilan depan (frontend) sebuah web dibangun oleh tiga pilar: **HTML** untuk struktur, **CSS** untuk gaya, dan **JavaScript** untuk interaktivitas.

---

## 4. Latihan Soal

Pilih jawaban yang paling tepat!
1. Fungsi utama web server adalah …  
    a. Mendesain tampilan halaman web
    **b. Menerima permintaan dari browser dan mengirimkan respon**
    c. Menuliskan struktur konten halaman web
    d. Membuat animasi pada tombol

2. Teknologi yang digunakan untuk memberikan gaya visual (warna, font, layout) pada halaman web adalah...
    a. HTML
    **b. CSS**
    c. JavaScript
    d. PHP

3. Jika sebuah website diibaratkan sebagai tubuh manusia, maka yang menjadi tulang-belulangnya adalah...
    **a. HTML**
    b. CSS
    c. JavaScript
    d. Server

Jawab Soal uraian dibawah ini sesuai dengan pemahaman mu!
4. Jelaskan secara singkat perbedaan peran antara HTML, CSS, dan JavaScript dalam membangun sebuah halaman web!