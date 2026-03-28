---
publish: false
---

### **A. Ringkasan Eksekutif (Executive Summary)**

Dokumen ini merangkum tiga konsep inti dalam pengembangan web backend:
1.  **Operasi CRUD:** Fondasi interaksi dengan database, yaitu cara kita membuat, membaca, memperbarui, dan menghapus data.
2.  **Relasi Database:** Konsep paling krusial hari ini. Kita akan belajar bagaimana tabel-tabel dalam database saling terhubung (satu-ke-satu, satu-ke-banyak, banyak-ke-banyak) untuk membangun sistem yang logis dan efisien.
3.  **Implementasi Web Dinamis:** Menggunakan PHP (procedural) dan MySQL untuk menerapkan konsep CRUD dan relasi, sehingga website dapat menampilkan data yang berubah-ubah sesuai isi database.

Memahami relasi adalah kunci untuk membangun aplikasi yang kompleks, dari media sosial hingga sistem manajemen sekolah.

---

### **B. Panduan Belajar & Materi Inti**

#### **1. Tinjauan Ulang: Operasi CRUD**

CRUD adalah singkatan dari **Create, Read, Update, Delete**. Ini adalah empat fungsi dasar yang harus dimiliki oleh setiap aplikasi yang mengelola data.

*   **Create (Membuat):** Menambahkan data baru ke dalam database.
    *   **SQL:** `INSERT INTO nama_tabel (kolom1, kolom2) VALUES ('nilai1', 'nilai2');`
*   **Read (Membaca):** Mengambil atau menampilkan data dari database.
    *   **SQL:** `SELECT * FROM nama_tabel WHERE kondisi;`
*   **Update (Memperbarui):** Mengubah data yang sudah ada di database.
    *   **SQL:** `UPDATE nama_tabel SET kolom1 = 'nilai_baru' WHERE id = 1;`
*   **Delete (Menghapus):** Menghilangkan data dari database.
    *   **SQL:** `DELETE FROM nama_tabel WHERE id = 1;`

#### **2. Fokus Utama: Relasi Antar Tabel Database**

Bayangkan data kita tersimpan dalam lemari-lemari (tabel). Relasi adalah "benang" yang menghubungkan isi satu lemari dengan lemari lainnya. Tanpa relasi, data kita akan berantakan dan tidak saling kenal. Kunci untuk menciptakan relasi adalah menggunakan **Primary Key (Kunci Utama)** dan **Foreign Key (Kunci Tamu)**.

*   **Primary Key (PK):** ID unik untuk setiap baris dalam sebuah tabel (misal: `id_siswa`).
*   **Foreign Key (FK):** Sebuah kolom di satu tabel yang berisi Primary Key dari tabel lain untuk menciptakan hubungan (misal: `id_kelas` di dalam tabel `siswa`).

**Jenis-jenis Relasi:**
1.  **One-to-One (Satu-ke-Satu)**
    *   Satu baris di Tabel A hanya berhubungan dengan satu baris di Tabel B.
    *   **Contoh:** Tabel `Siswa` dan Tabel `Detail_Siswa`. Satu siswa hanya punya satu detail (misal: NISN, alamat). Jarang digunakan, tapi berguna untuk data yang sangat spesifik.
2.  **One-to-Many (Satu-ke-Banyak)**
    *   Satu baris di Tabel A bisa berhubungan dengan banyak baris di Tabel B. Ini adalah relasi paling umum.
    *   **Contoh:** Tabel `Kelas` dan Tabel `Siswa`. Satu kelas (misal: "XI PPLG 1") memiliki banyak siswa, tetapi satu siswa hanya bisa berada di satu kelas.
    *   **Implementasi:** Tabel `Siswa` memiliki Foreign Key `id_kelas` yang merujuk ke Primary Key di tabel `Kelas`.
3.  **Many-to-Many (Banyak-ke-Banyak)**
    *   Banyak baris di Tabel A bisa berhubungan dengan banyak baris di Tabel B.
    *   **Contoh:** Tabel `Siswa` dan Tabel `Ekstrakurikuler`. Satu siswa bisa ikut banyak ekskul, dan satu ekskul bisa diikuti banyak siswa.
    *   **Implementasi:** Kita butuh tabel perantara (disebut juga *junction table* atau *pivot table*). Misalnya, tabel `Pendaftaran_Ekskul` yang hanya berisi `id_siswa` dan `id_ekskul`.

#### **3. Implementasi: Membuat Web Dinamis dengan PHP & MySQL**

Website dinamis adalah website yang isinya bisa berubah tanpa harus mengubah kode HTML-nya, karena datanya diambil langsung dari database.

**Langkah-langkah dasar (procedural):**

1.  **Koneksi ke Database:** Membuat file `koneksi.php` untuk menghubungkan aplikasi kita ke server MySQL.
    ```php
    <?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db   = "db_sekolah";

    $koneksi = mysqli_connect($host, $user, $pass, $db);

    if (!$koneksi) {
        die("Koneksi gagal: " . mysqli_connect_error());
    }
    ?>
    ```

2.  **Menampilkan Data (Read):** Mengambil data dari tabel dan menampilkannya.
    ```php
    <?php
    include 'koneksi.php'; // Sertakan file koneksi

    // Query untuk mengambil data siswa beserta nama kelasnya menggunakan JOIN
    $sql = "SELECT siswa.nama, kelas.nama_kelas FROM siswa JOIN kelas ON siswa.id_kelas = kelas.id";
    $hasil = mysqli_query($koneksi, $sql);

    // Tampilkan data dalam tabel HTML
    echo "<table border='1'>";
    echo "<tr><th>Nama Siswa</th><th>Kelas</th></tr>";

    while ($baris = mysqli_fetch_assoc($hasil)) {
        echo "<tr>";
        echo "<td>" . $baris['nama'] . "</td>";
        echo "<td>" . $baris['nama_kelas'] . "</td>";
        echo "</tr>";
    }

    echo "</table>";
    ?>
    ```
    Perhatikan penggunaan `JOIN` pada query SQL di atas. `JOIN` adalah perintah untuk menggabungkan baris dari dua atau lebih tabel berdasarkan kolom relasi (PK dan FK).

### **C. Tugas & Uji Pemahaman**

#### **1. Kuis Jawaban Singkat**
Jawablah pertanyaan berikut dalam 2-3 kalimat untuk menguji pemahaman Anda.

1.  Apa fungsi utama dari operasi CRUD dalam pengelolaan data?
2.  Jelaskan perbedaan mendasar antara *Primary Key* dan *Foreign Key*!
3.  Mengapa relasi *One-to-Many* adalah jenis relasi yang paling sering digunakan? Berikan satu contoh.
4.  Kapan kita harus menggunakan relasi *Many-to-Many* dan apa komponen tambahan yang dibutuhkan untuk membuatnya?
5.  Apa yang dimaksud dengan website dinamis?
6.  Apa fungsi dari perintah `mysqli_connect()` dalam PHP?
7.  Jelaskan secara singkat apa kegunaan dari `JOIN` dalam query SQL!
8.  Dalam analogi AI, apa yang merepresentasikan "data" dan apa yang dilakukan AI terhadap data tersebut?
9.  Apa yang akan terjadi jika sebuah aplikasi tidak memiliki operasi *Delete*?
10. Buatlah contoh query SQL untuk menampilkan semua siswa dari kelas "XI PPLG 1".

#### **2. Pertanyaan Esai**
Pikirkan dan jawablah pertanyaan berikut dalam format esai untuk melatih pemikiran konseptual Anda.

1.  Anda diminta merancang database untuk sistem perpustakaan sederhana. Tentukan tabel-tabel apa saja yang dibutuhkan (minimal 3 tabel), jelaskan kolom-kolomnya, dan gambarkan relasi antar tabel tersebut.
2.  Jelaskan alur kerja lengkap dari saat pengguna mengisi formulir pendaftaran di website hingga data tersebut tersimpan di database MySQL, melibatkan peran HTML, PHP, dan SQL.
3.  Bandingkan dan kontraskan antara menyimpan semua informasi dalam satu tabel besar (tanpa relasi) dengan memecahnya menjadi beberapa tabel yang saling berelasi. Apa kelebihan dan kekurangan masing-masing pendekatan?
4.  Bagaimana konsep relasi database dapat diterapkan dalam pengembangan fitur "daftar teman" pada sebuah aplikasi media sosial? Jelaskan jenis relasi yang mungkin digunakan.
5.  Jika data adalah "bahan bakar" AI, apa yang menjadi "mesin"-nya dan apa "produk" yang dihasilkannya? Jelaskan menggunakan contoh aplikasi di dunia nyata (misal: rekomendasi produk di e-commerce).

---

### **D. Glosarium (Daftar Istilah Penting)**

*   **CRUD:** Singkatan dari Create, Read, Update, Delete. Empat operasi dasar dalam manajemen data.
*   **Database:** Kumpulan data yang terorganisir secara sistematis dan disimpan secara elektronik.
*   **SQL (Structured Query Language):** Bahasa standar yang digunakan untuk berinteraksi dengan database relasional.
*   **PHP (PHP: Hypertext Preprocessor):** Bahasa skrip sisi server yang dirancang untuk pengembangan web.
*   **MySQL:** Sistem manajemen database relasional (RDBMS) open-source yang populer.
*   **Tabel:** Struktur data dalam database yang terdiri dari baris dan kolom, digunakan untuk menyimpan data.
*   **Primary Key (PK):** Sebuah kolom (atau set kolom) yang secara unik mengidentifikasi setiap baris dalam sebuah tabel.
*   **Foreign Key (FK):** Sebuah kolom (atau set kolom) di satu tabel yang merujuk ke Primary Key di tabel lain, digunakan untuk membangun relasi.
*   **Relasi:** Hubungan logis antara dua atau lebih tabel dalam database.
*   **JOIN:** Klausa SQL yang digunakan untuk menggabungkan baris dari dua atau lebih tabel berdasarkan kolom terkait.
*   **Web Dinamis:** Situs web yang kontennya dihasilkan secara *real-time* dari sisi server, biasanya dari database, sehingga dapat berubah sesuai interaksi pengguna atau data baru.
*   **Prosedural (Programming):** Paradigma pemrograman di mana program dieksekusi baris demi baris, berdasarkan serangkaian prosedur atau fungsi.

### **E. Link Tambahan**
- Chatbot Pendamping: https://notebooklm.google.com/notebook/414dc039-c64d-4872-8b3a-a413e77f104e
