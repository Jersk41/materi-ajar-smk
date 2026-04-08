---
tags:
  - pemrograman
  - pplg
  - kelas-x
  - modul-ajar
  - patch-version
creation-date: 2026-04-06
publish: false
---

# Overview Materi Dasar-Dasar PPLG (Patch Version)

> [!INFO] **Disclaimer & Prinsip "Patch Version"**
> Materi ini merupakan *remake* kurikulum fundamental pemrograman untuk Kelas 10 PPLG dengan pendekatan *Patch Version*. Karena pemahaman praktikal siswa masih setara dengan semester 1, materi ini dirancang untuk "menambal" fundamental mereka melalui pendekatan yang sangat pragmatis, terfokus, dan berbasis proyek.
> 
> **Prinsip Utama:**
> 1. **Single Scope:** Setiap pertemuan hanya membahas satu topik sangat spesifik (Sempit namun mendalam).
> 2. **Rule 60/40:** Dari 60 menit efektif (2 JP @ 30 menit), **60% (36 menit)** digunakan untuk *step-by-step coding* bersama guru, dan **40% (24 menit)** untuk observasi, debugging, dan praktik mandiri per kelompok.
> 3. **Kelompok & Keterbatasan Fasilitas (Offline Mode):** Praktikum dilakukan secara berkelompok karena tidak semua siswa membawa laptop, dan siswa **tidak diperbolehkan memegang HP (Offline Mode)**. Satu kelompok berbagi 1 laptop. Pembagian peran ditekankan untuk memastikan partisipasi aktif:
>    - *Driver (Programmer):* Siswa yang mengoperasikan laptop (mengetik kode).
>    - *Navigator / System Analyst:* Memikirkan dan menyusun algoritma/logika di kertas lalu mengarahkan instruksi ke Driver.
>    - *Prompt Engineer:* Merumuskan instruksi/pertanyaan ke AI (ditulis di kertas) saat menemui *error* atau butuh referensi, untuk kemudian diketikkan oleh Driver.
>    - *QA / Debugger:* Mencatat setiap *error* yang muncul di layar dan solusi yang ditemukan di buku catatan pribadi.
> 4. **AI Awareness:** Menggunakan AI (seperti ChatGPT/Gemini/Claude) sebagai *Pair Programmer* atau *Tutor Pribadi*, bukan mesin pembuat tugas instan. Keterampilan *prompting* diajarkan sebagai bagian dari pemecahan masalah.
> 5. **Industry Ready (MVP):** Bermuara pada pembuatan produk (Web Statis/Interaktif sederhana) sebagai fondasi kesiapan masuk ke industri nyata.

---

## 📅 Materi Pertemuan Besok: "Membangun Fondasi Halaman Web Pertama & Berkenalan dengan AI Assistant"

**Waktu:** 2 JP (60 Menit Efektif)
**Fokus / Scope:** Membuat file HTML kerangka dasar, 2 tag utama (`h1` dan `p`), dan cara menggunakan AI untuk membantu koding.

### A. Sesi Step-by-Step (60% = 36 Menit)
1. **[5 Menit] Pengkondisian & Pembagian Peran Kelompok:**
   - Membagi kelompok dengan minimal 1 laptop per kelompok.
   - Menetapkan peran: *Driver*, *Navigator*, *Prompt Engineer*, dan *QA*.
   - *Driver* membuka teks editor (VS Code) dan browser. Siswa lain menyiapkan buku/kertas.
2. **[10 Menit] Setup Kerangka HTML Dasar:**
   - Guru mencontohkan pembuatan file `index.html`.
   - Menggunakan jalan pintas (shortcut `!` di VS Code) untuk memunculkan struktur dasar.
   - Menjelaskan secara lisan dan singkat apa itu `<body>` (tempat semua yang dilihat pengguna).
3. **[10 Menit] Menulis Kode HTML Pertama (Hands-on):**
   - Menambahkan tag `<h1>Judul Web Kelompok Kami</h1>`.
   - Menambahkan tag `<p>Ini adalah web perdana kami.</p>`.
   - *Navigator* mendiktekan teks yang akan diketik, *Driver* mengetik.
4. **[11 Menit] AI Awareness - Menggunakan AI sebagai Asisten (Hands-on):**
   - Guru membuka AI Assistant di layar proyektor.
   - Skenario: *"Kita ingin tulisan paragraf kita menjadi tebal (bold), tapi kita tidak tahu tag HTML-nya apa."*
   - *Prompt Engineer* dari tiap kelompok merumuskan prompt terbaik di kertas. (Contoh: *"Apa tag HTML untuk membuat teks tebal? Berikan contohnya."*)
   - *Driver* mengetikkan prompt dari kertas tersebut ke AI di laptop kelompok (jika ada internet) atau guru mencontohkan di depan.
   - *QA* mencatat jawaban AI (`<b>` atau `<strong>`) di buku catatan.
   - *Driver* mengaplikasikan tag tersebut ke dalam kode `index.html`.

### B. Sesi Monitoring & Debugging (40% = 24 Menit)
1. **[15 Menit] Eksplorasi Mandiri Terpandu:**
   - Guru memberikan tantangan: *"Gunakan AI untuk mencari tahu cara membuat teks rata tengah, dan terapkan di `<h1>` kalian."*
   - Kelompok berdiskusi secara luring. *Prompt Engineer* merumuskan *prompt* di kertas, *Driver* mengeksekusi, *QA* mencatat *error* (misalnya penulisan atribut salah).
   - Guru berkeliling memantau, memastikan tidak ada yang pasif, dan membantu *debugging* jika ada kelompok yang *stuck*.
2. **[9 Menit] Review & Kesimpulan:**
   - Menanyakan kelompok mana yang berhasil dan apa *prompt* yang mereka gunakan.
   - Membahas kesalahan umum (typo, lupa *save*, lupa ekstensi `.html`) yang dicatat oleh para *QA*.
   - Mengingatkan kembali peran AI sebagai asisten, dan peran manusia sebagai pengendali utama (penentu logika dan eksekutor).

---

## 📌 Outline Lengkap Materi Lanjutan (PBL Web Statis MVP)

> *Setiap poin di bawah ini mewakili 1 kali pertemuan dengan scope yang sangat sempit (single scope) mengikuti format 60/40 dan pembagian peran kelompok.*

*   **Pertemuan 1 (Besok):** Membangun Fondasi Halaman Web Pertama & Berkenalan dengan AI Assistant *(Kerangka HTML, h1, p, dan Prompting Dasar)*.
*   **Pertemuan 2:** Menambahkan Media ke dalam Web *(Fokus hanya pada tag `<img>` dan `<a>`, mencari gambar referensi, dan debugging link/path gambar yang rusak).*
*   **Pertemuan 3:** Sentuhan Awal CSS *(Mengenal atribut `style` dan tag `<style>`, mengubah warna background, warna teks, dan jenis font).*
*   **Pertemuan 4:** Merapikan Tata Letak Dasar (Box Model) *(Memahami konsep kotak, margin, dan padding pada HTML agar elemen tidak saling berdempetan).*
*   **Pertemuan 5:** Layouting Modern (Pengenalan Flexbox Sederhana) *(Membuat elemen berjajar rapi ke samping menggunakan `display: flex`—contoh praktik: membuat navigasi menu bar).*
*   **Pertemuan 6:** Menghidupkan Web (Pengantar JavaScript) *(Menggunakan `<script>`, membuat tombol interaktif yang memunculkan peringatan `alert()` saat diklik).*
*   **Pertemuan 7:** Interaksi Logika Dasar (If/Else di Web) *(Menggabungkan tombol dengan kondisi logika, contoh: fitur Light/Dark Mode yang sangat sederhana menggunakan manipulasi class).*
*   **Pertemuan 8:** *Kick-off Mini Project* (Desain & Perencanaan) *(Kelompok merancang web portofolio/katalog produk di kertas (tanpa laptop), merumuskan kebutuhan gambar, layout, dan struktur).*
*   **Pertemuan 9 & 10:** Eksekusi Mini Project (PBL) *(100% full praktikum kelompok. Guru full monitoring & debugging. Siswa memanfaatkan AI untuk troubleshoot layout atau masalah styling spesifik).*
*   **Pertemuan 11:** Presentasi Produk MVP & *Code Review* *(Mendemokan hasil karya web, menjelaskan peran setiap anggota, dan berbagi prompt AI terbaik yang digunakan selama pembuatan).*