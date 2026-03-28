---
title: "Review Fondasi Python & Konsep AI"
tags: [KKA, kelas-xi, review, python, ai]
date: 2025-11-01
publish: false
---

# Materi Ajar: Review Fondasi Python & Konsep AI

**Pertemuan ini bertujuan untuk merampungkan dan memvalidasi pemahaman siswa terhadap materi dasar sebelum melangkah ke konsep yang lebih kompleks seperti modularisasi kode.**

---

## 1. Tujuan Pembelajaran

Setelah sesi ini, siswa diharapkan mampu:

1.  **Menjelaskan kembali** konsep dasar AI, Sistem Pakar, dan peran Python.
2.  **Mengidentifikasi dan memperbaiki** kesalahan umum dalam sintaks Python (variabel, `if-else`, `for loop`).
3.  **Mendemonstrasikan** penggunaan `input()` yang aman dengan konversi tipe data dan `try-except`.
4.  **Membangun** sebuah program interaktif sederhana dari awal yang menerapkan seluruh konsep yang direview.

---

## 2. Materi Review

Materi yang akan di-review dan divalidasi pemahamannya:

-   **Konsep AI & Sistem Pakar**:
    -   Apa itu AI dan 4 tugas utamanya?
    -   Apa itu Sistem Pakar (Logika `IF-THEN`)?
-   **Fondasi Python**:
    -   **Variabel & Tipe Data**: `string`, `int`, `float`.
    -   **Logika Percabangan**: `if`, `elif`, `else`.
    -   **Fungsi**: `def` untuk membuat blok kode yang bisa digunakan kembali.
    -   **Interaksi Pengguna**: `input()` dan pentingnya konversi tipe data (`int()`, `float()`).
    -   **Penanganan Error**: `try-except` untuk mencegah program berhenti saat input salah.

---

## 3. Kegiatan Pembelajaran

1.  **Apersepsi (15 Menit)**
    -  Sapa siswa dan jelaskan tujuan pertemuan hari ini: "Hari ini kita akan pastikan semua punya bekal yang sama sebelum kita naik level ke materi selanjutnya."
    -   Lakukan tanya jawab cepat (ice-breaking) seputar materi sebelumnya:
        -   "Siapa yang masih ingat, kenapa `input()` dari user tidak bisa langsung ditambah dengan angka?"
        -   "Apa gunanya `try-except`?"

2.  **Review Terstruktur & Tanya Jawab (25 Menit)**
    -   Tampilkan kembali ringkasan materi dari [[KISI2_ASTS_KKA_XI_SEMESTER-1]].
    -   Bahas setiap poin secara singkat, beri kesempatan siswa untuk bertanya jika ada yang masih belum dipahami.

3.  **Studi Kasus: Mini-Project "Sistem Pakar Sederhana" (45 Menit)**
    -   **Tugas**: Buat program Python yang bertindak sebagai "sistem pakar" untuk merekomendasikan kegiatan berdasarkan input cuaca dari pengguna.
    -   **Spesifikasi**:
        1.  Program meminta input dari pengguna: "Bagaimana cuaca hari ini? (cerah/hujan/mendung)"
        2.  Gunakan `try-except` untuk memastikan program tidak error jika pengguna memasukkan angka atau input aneh.
        3.  Gunakan `if-elif-else` untuk memberikan rekomendasi:
            -   Jika "cerah": "Waktunya main di luar!"
            -   Jika "hujan": "Enaknya baca buku atau nonton film."
            -   Jika "mendung": "Jangan lupa bawa payung, mungkin akan hujan."
            -   Jika input lain: "Maaf, saya tidak mengerti cuaca itu."
        4.  **Tantangan Tambahan**: Bungkus logika utama di dalam sebuah fungsi `def rekomendasi_kegiatan():`.

4.  **Penutup & Refleksi (5 Menit)**
    -   Minta beberapa siswa menunjukkan hasil pekerjaannya.
    -   Simpulkan pembelajaran ari ini dan tekankan bahwa semua konsep ini adalah "bata" yang akan kita susun menjadi "bangunan" yang lebih besar.
    -   Beri pengantar singkat untuk materi selanjutnya.

---

## 4. Materi Selanjutnya

-   **Modularisasi Kode dengan Fungsi**: Memecah program besar menjadi fungsi-fungsi kecil yang lebih mudah dikelola.
