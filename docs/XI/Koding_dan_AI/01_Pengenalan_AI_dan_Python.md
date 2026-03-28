---
publish: false
---

# Bab 1: Pengenalan AI dan Python

## 1. Apa itu Kecerdasan Buatan (AI)?

> [!NOTE] Definisi AI
> AI adalah cabang ilmu komputer yang berfokus pada pembuatan mesin atau sistem cerdas yang dapat melakukan tugas-tugas yang biasanya memerlukan kecerdasan manusia.

Tugas-tugas tersebut meliputi:
- **Belajar (Learning):** Memperoleh informasi dan aturan untuk menggunakan informasi tersebut.
- **Penalaran (Reasoning):** Menggunakan aturan untuk mencapai kesimpulan yang mendekati atau pasti.
- **Persepsi (Perception):** Mengenali pola dari data sensoris seperti gambar, suara, dan teks.
- **Penyelesaian Masalah (Problem-solving):** Menggunakan pengetahuan dan penalaran untuk menemukan solusi.

### Contoh AI dalam Kehidupan Sehari-hari
- **Rekomendasi Produk:** YouTube, Netflix, atau Spotify merekomendasikan konten berdasarkan **riwayat tontonan/dengar** Anda.
- **Asisten Virtual:** Google Assistant dan Siri yang memahami perintah suara.
- **Filter Spam:** Gmail secara otomatis memindahkan email yang tidak relevan ke folder spam.
- **Game:** Musuh (NPC) dalam game yang bisa beradaptasi dengan strategi pemain.

---

## 2. Mengapa Python untuk AI?

Ada banyak bahasa pemrograman, tetapi **Python** menjadi pilihan utama dalam pengembangan AI. Mengapa?

- **Sintaks Sederhana:** Kode Python mudah dibaca dan ditulis, mirip dengan bahasa Inggris. Ini memungkinkan developer fokus pada logika AI daripada terjebak dalam kerumitan bahasa.
- **Banyak Library:** Python memiliki ekosistem *library* (kumpulan kode siap pakai) yang sangat besar untuk AI dan Machine Learning.
  - **NumPy:** Untuk komputasi numerik.
  - **Pandas:** Untuk manipulasi dan analisis data.
  - **Scikit-learn:** Untuk algoritma machine learning klasik.
  - **TensorFlow & PyTorch:** Untuk membangun model Deep Learning (jaringan saraf tiruan).
- **Komunitas Besar:** Banyaknya pengguna Python berarti mudah untuk mencari solusi, tutorial, dan dukungan jika mengalami masalah.

---

## 3. Konsep Dasar Python untuk AI

### a. Variabel dan Tipe Data
Variabel adalah wadah untuk menyimpan nilai. Di Python, tipe data tidak perlu dideklarasikan secara eksplisit.

```python
# Tipe Data Teks (String)
nama_siswa = "Budi"

# Tipe Data Angka (Integer & Float)
umur = 17
nilai_ujian = 85.5

# Tipe Data Daftar (List) - Sangat penting untuk data AI
daftar_nilai = [85, 90, 78, 92, 88]

print(f"Nama: {nama_siswa}, Umur: {umur} tahun")
print(f"Daftar nilai Budi: {daftar_nilai}")
```
### Nama File: **tugas-kka-1.py**
### b. Percabangan (Conditional)
Digunakan untuk membuat keputusan berdasarkan kondisi tertentu.

```python
nilai = 85

if nilai >= 80:
  print("Selamat, Anda Lulus!")
else:
  print("Maaf, Anda perlu belajar lebih giat.")
```

### c. Perulangan (Looping)
Digunakan untuk menjalankan blok kode berulang kali. Sangat berguna untuk memproses data dalam jumlah besar.

```python
# Menghitung rata-rata nilai dari list
total_nilai = 0
daftar_nilai = [85, 90, 78, 92, 88]

for nilai in daftar_nilai:
  total_nilai = total_nilai + nilai


rata_rata = total_nilai / len(daftar_nilai)
print(f"Nilai rata-rata adalah: {rata_rata}")
```

---
## 4. Rangkuman

1.  **AI** adalah sistem komputer yang meniru kecerdasan manusia untuk belajar, berpikir, dan menyelesaikan masalah.
2. Ada 4 tugas-tugas manusia yang dapat dikerjakan oleh AI yakni: **Learning, Reasoning, Perception, Problem-Solving**
3.  **Python** adalah bahasa pemrograman utama untuk AI karena sintaksis yang sederhana dan didukung oleh banyak library khusus.
4.  Konsep dasar seperti **variabel, percabangan, dan per-ulangan** adalah pondasi yang wajib dikuasai untuk mulai membuat program AI sederhana.

---
## 5. Latihan

### a. Teori

1.  Manakah dari berikut ini yang BUKAN merupakan alasan utama Python populer untuk AI?
    a. Sintaks yang mudah dipahami.
    b. Kecepatan eksekusi yang paling tinggi dibanding semua bahasa.
    c. Ketersediaan library seperti NumPy dan TensorFlow.
    d. Komunitas pengguna yang besar dan aktif.

2.  Tipe data di Python yang paling umum digunakan untuk menyimpan sekumpulan data seperti daftar nilai atau data sensor adalah...
    a. String
    b. Integer
    c. List
    d. Boolean

3.  Jelaskan menurut pemahamanmu, bagaimana sebuah sistem rekomendasi film di Netflix menggunakan konsep AI!

### b. Praktek

4.  Buatlah sebuah program Python sederhana menggunakan percabangan untuk menentukan apakah seorang siswa "Kompeten" (jika nilai >= 75) atau "Belum Kompeten" (jika nilai < 75).

> [!info] Catatan untuk Guru
> Kunci jawaban dan rubrik penilaian untuk soal ini dapat dilihat di [[03_Teaching/03_Asesmen/Rubrik_Penilaian/Asesmen_Pengenalan_AI_dan_Python]]
