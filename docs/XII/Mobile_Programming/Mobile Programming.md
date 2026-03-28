---
publish: false
---

> **RPP dan Modul Ajar  
> Mobile Programming Intermediate  
> (SMK PPLG Kelas 2)**

# **Pendekatan Pembelajaran**

Dalam Kurikulum Merdeka, pembelajaran _mobile programming_ dirancang berlandaskan _Project-Based_ _Learning_ (PjBL) dan model _Teaching_ _Factory_. Pembelajaran berbasis proyek adalah metode pembelajaran yang menggunakan proyek/kegiatan nyata sebagai media, di mana peserta didik mengeksplorasi, menginterpretasi, dan mensintesis informasi untuk menghasilkan produk bermakna. Dengan PjBL, siswa diharapkan aktif menyelidiki permasalahan kontekstual dan menerapkan pengetahuan untuk membuat aplikasi nyata (misalnya, membangun aplikasi fungsional). Model Teaching Factory mengintegrasikan proses industri ke dalam sistem pembelajaran, sehingga siswa terlibat langsung dalam praktik produksi nyata di sekolah. Tujuannya agar mereka tidak hanya belajar teori, tetapi juga mendapatkan pengalaman praktis pengembangan aplikasi yang mendekati kebutuhan industri. Pendekatan ini menekankan soft skill dan kolaborasi, misalnya siswa bekerja dalam tim mensimulasikan proyek dunia kerja.

## Semester 1
### RPP
1. **Profil Pelajar Pancasila**: Fokus dimensi _mandiri_, _kreatif_, dan _bernalar kritis_. Siswa didorong mengembangkan kemandirian dalam pemecahan masalah pemrograman serta kreativitas dalam merancang antarmuka (UI) aplikasi.
2. **Capaian Pembelajaran (CP)**: Sesuai _CP Rekayasa Perangkat Lunak Fase F_, siswa diharapkan mampu mengembangkan aplikasi Android menggunakan Java dalam Android Studio, menerapkan struktur projek dan konsep dasar Android (activity, layout, data) serta mendokumentasikan hasilnya.
3. **Tujuan Pembelajaran**: “Siswa dapat menjelaskan dan menerapkan struktur proyek Android Studio, membuat beberapa Activity, serta merancang UI lanjutan menggunakan ConstraintLayout”
4. **Indikator Pencapaian Kompetensi (IPK)**: "Siswa mampu menjelaskan perbedaan Intent Implisit dan Eksplisit, dapat melakukan konfigurasi RecyclerView dengan *adapter* dan *viewholder*"
5. **Langkah Pembelajaran**: 
	1. Pendahuluan: Guru memotivasi siswa dan memaparkan tujuan pembelajaran.
	2. Kegiatan Inti:  Siswa melakukan eksplorasi materi, lalu bekerja dengan proyek kelompok. Guru memfasilitasi diskusi, memberikan umpan balik, dan mengaitkan dengan pengalaman industri.
	3. Penutup: Siswa mempresentasikan hasil proyek, refleksi proses, guru menyimpulkan dan memberikan tugas penugasan lanjutan.
6. **Assesmen Formatif**: Akhir bab semester diisi dengan proyek mini atau uji keterampilan. Misalnya, siswa membuat aplikasi sederhana (berdasarkan topik yang dipelajari) dan dinilai menggunakan rubrik. Penilaian sumatif meliputi keutuhan fungsi aplikasi, dokumentasi proyek, dan presentasi hasil. Rubrik penilaian proyek berbasis PjBL meliputi aspek perencanaan, pelaksanaan, dan kualitas produk
### Modul Ajar
- **Bab 1: Struktur Proyek Android Studio (Review)** 
  Topik ini mengulang struktur folder dan file Android, penggunaan Gradle, serta praktek pembuatan proyek baru. 
  _Kegiatan_ _proyek:_ Kelompok siswa merancang kerangka aplikasi “Smart School Notebook” – aplikasi catatan sekolah sederhana. Mereka membuat skeleton proyek di Android Studio, menentukan Activity pertama, dan mempersiapkan repository awal.
- **Bab 2: Activity dan Intent (Implisit & Eksplisit)** 
  Siswa belajar membuat beberapa Activity dan menggunakan Intent untuk navigasi data. 
  _Kegiatan_ _proyek:_ Siswa mengembangkan aplikasi katalog resep makanan: satu Activity menampilkan daftar resep (nama singkat) dan Activity lain menampilkan detail resep. Mereka menggunakan Intent eksplisit untuk berpindah antar Activity dan Intent implisit (mis. membuka video YouTube resep).
- **Bab 3: Layout dan UI Lanjutan (ConstraintLayout, ScrollView, dll.)** 
  Topik ini fokus pada desain antarmuka kompleks. _Kegiatan_ _proyek:_ Kelompok siswa mendesain tampilan utama “Daily News App” menggunakan ConstraintLayout. Mereka memanfaatkan ScrollView untuk halaman dengan konten panjang dan ImageView/TextView kompleks. Siswa bereksperimen dengan atribut layout advanced dan memeriksa hasilnya di AVD.
- **Bab 4: RecyclerView (Adapter, ViewHolder, Binding)** 
  Pelajaran penggunaan daftar dinamis. _Kegiatan_ _proyek:_ Siswa membuat aplikasi “My Contacts” yang menampilkan daftar nama dan foto kontak menggunakan RecyclerView. Masing-masing kelompok menyiapkan dataset sederhana, membuat kelas adapter dan ViewHolder, serta menerapkan data binding agar list kontak dapat digulir.
- **Bab 5: Navigasi Antar Halaman dan Passing Data** 
  Topik ini melanjutkan penggunaan Intent, menekankan transfer data antar Activity atau fragment. 
  _Kegiatan_ _proyek:_ Siswa mengembangkan fitur profil multi-halaman. Dari daftar kontak (Bab 4), siswa membuat navigasi ke halaman detail profil yang menampilkan info lengkap dan mengirim objek (atau data pribadi) melalui Intent. Model PjBL: siswa bekerja dalam tim membuat mini-aplikasi utuh yang melibatkan konsep di atas.
### Rubrik Penilaian Proyek
Penilaian analitik dengan skala 1-4

- Penguasaan Materi (40%): 
- Desain UI & Kreatifitas (20%)
- Dokumentasi dan Presentasi (20%)
- Kerjasama tim dan Sikap (20%)

## Semester 2
### RPP
1. **Profil Pelajar Pancasila**: Fokus dimensi bernalar kritis, bergotong-royong, dan berkebinekaan global. Siswa diharapkan mampu berpikir kritis dalam memecahkan masalah pemrograman (debugging, optimisasi kode) serta bekerja sama dalam tim proyek besar. 
2. **Capaian Pembelajaran (CP)**: Berlanjut dari fase sebelumnya, siswa diharapkan mampu mengembangkan aplikasi Android intermediate yang melibatkan penyimpanan lokal (basis data SQLite), preferensi, fragmentasi antarmuka, notifikasi, dan integrasi API eksternal, serta mendokumentasikan dan mempresentasikan aplikasinya.
3. **Tujuan Pembelajaran (TP)**: Contoh TP semester 2 antara lain: “Siswa dapat membuat aplikasi Android yang menggunakan SQLite untuk penyimpanan data, SharedPreferences untuk menyimpan pengaturan pengguna, dan memanfaatkan fragment dengan TabLayout untuk antarmuka dinamis”. TP ini dirancang lebih operasional (mis. mencantumkan fitur spesifik).
4. **Indikator Pencapaian Kompetensi (IPK)**: Misalnya, “mendeskripsikan cara kerja SQLite dan mengeksekusi operasi CRUD (Create, Read, Update, Delete) dalam aplikasi” atau “mengimplementasikan notifikasi sederhana untuk pengingat”. IPK menggunakan kata kerja yang dapat diukur dan mencakup aspek pengetahuan, keterampilan, sikap. 
5. **Langkah Pembelajaran**: 
	1. Pendahuluan: Guru mengaitkan materi dengan kebutuhan industri (mis. bagaimana aplikasi mobile digunakan dalam usaha riil), serta memotivasi dengan contoh proyek nyata. 
	2. Kegiatan Inti: Siswa bergiliran mempelajari setiap topik secara modular, sambil terus mengerjakan bagian dari proyek integratif. Misalnya, satu kali tatap muka fokus pada SQLite (guru demonstrasi, siswa praktek memasukkan/mengambil data), lalu di rumah tim melengkapi fitur database pada proyek aplikasi. Guru fasilitasi diskusi solusi dan memeriksa kemajuan proyek tiap pertemuan. 
	3. Penutup: Setiap akhir topik, siswa merefleksikan pembelajaran (cerita tantangan dan solusi), guru mengarahkan diskusi pada penguatan sikap kerjasama dan apresiasi temuan siswa. 
6. Asesmen Formatif: Dilakukan melalui kuis singkat (mis. soal pemahaman SQL atau API), review kode siswa, tanya jawab seputar konsep SharedPreferences dan fragment, serta feedback berkala pada kemajuan proyek (code review dan demo di kelas). 
7. Asesmen Sumatif: Proyek akhir (aplikasi integratif) dinilai sebagai asesmen sumatif utama. Siswa menyusun portofolio aplikasi, melakukan presentasi akhir, dan mendemokan fitur utama. Penilaian menilai pengintegrasian semua kompetensi: database, UI fragment, notifikasi, dan konektivitas API. Kriteria penilaian menggunakan rubrik yang mencakup penguasaan teknis akhir, inovasi fitur, dokumentasi, dan kerjasama tim (lihat Rubrik Semester 2).

### Modul Ajar
- Bab 1: SQLite Database – Memperkenalkan basis data lokal. Kegiatan proyek: Siswa mengembangkan fitur “Inventory App” penyimpanan barang dengan SQLite. Tim merancang tabel, menulis query untuk CRUD (menambah, membaca, mengedit, menghapus catatan). Guru memandu pembuatan database dan integrasi ke Activity. 
- Bab 2: SharedPreferences – Menjelaskan penyimpanan data ringan. Kegiatan proyek: Pada aplikasi sebelumnya, siswa menambahkan fitur login sederhana yang menggunakan SharedPreferences untuk menyimpan status login atau preferensi pengguna (tema gelap/terang). Mereka menguji penyimpanan nilai dan mengaitkannya ke UI aplikasi. 
- Bab 3: Fragment dan TabLayout – Mempelajari penggunaan fragment untuk layout modular. Kegiatan proyek: Siswa membangun aplikasi “News Portal” dengan dua tab: beranda dan profil pengguna. Mereka membuat dua fragment (masing-masing isi berita dan info pengguna) dan menyiapkan TabLayout dengan ViewPager. 
- Bab 4: Notifikasi Sederhana – Mengintegrasikan notifikasi Android. Kegiatan proyek: Siswa mengembangkan fitur pengingat di aplikasi, misalnya notifikasi makan siang atau tugas. Mereka merancang trigger notifikasi (jadwal/pesan push sederhana) dan mengimplementasikan NotificationManager agar aplikasi dapat menampilkan pemberitahuan di status bar. 
- Bab 5: Pemanggilan API Eksternal (HTTP Request) – Mengajarkan koneksi ke layanan web. Kegiatan proyek: Siswa membuat aplikasi “Weather Info” yang mengambil data cuaca dari API publik. Mereka menggunakan library HTTP (Volley atau Retrofit), melakukan parsing JSON, dan menampilkan hasil di aplikasi (misalnya kota dan temperatur). Guru membantu menyiapkan izin internet dan menangani hasil asynchronous. 
- Bab 6: Proyek Akhir Integratif – Menggabungkan semua kemampuan: database, UI fragment, notifikasi, dan API. Kegiatan proyek: Tiap kelompok memilih mini-aplikasi kompleks (misalnya aplikasi perencanaan perjalanan, aplikasi toko online, atau aplikasi kesehatan sederhana) yang mencakup fitur-fitur di atas. Siswa mendesain keseluruhan aplikasi (sketsa UI, use-case), membangun modul demi modul, menguji di AVD, dan bersiap mempresentasikan produk akhir. 
### Rubrik Penilaian Proyek
- Penguasaan Konsep & Fungsi Aplikasi (40%) – kualitas implementasi teknis: apakah semua fitur berjalan (mis. database, fragment, API, notifikasi). Skor 4: semua komponen berfungsi lengkap; Skor 1: banyak fungsi tama gagal.
- Kompleksitas dan Integrasi (20%) – sejauh mana proyek mengintegrasikan topik-topik yang dipelajari. Skor 4: aplikasi menunjukkan sinergi (mis. data SQLite difragment, notifikasi berdasarkan data API); Skor 1: fitur terpisah dan tidak terintegrasi.
- Desain UI/UX & Kreativitas (15%) – tampilan antar-muka menarik dan intuitif. Skor 4: desain sangat baik, estetis, navigasi lancar; Skor 1: UI sederhana/tidak user-friendly.
- Dokumentasi & Presentasi (15%) – kualitas laporan teknis dan kemampuan mempresentasikan aplikasi. Skor 4: dokumentasi komprehensif (arsitektur, cara kerja API), presentasi profesional; Skor 1: dokumentasi minim, presentasi kurang terstruktur.
- Kerjasama Tim & Sikap (10%) – kolaborasi efektif dan tanggung jawab anggota.  Skor 4: tim kompak, peran jelas, diskusi produktif; Skor 1: konflik internal, komunikasi buruk. 
#### Referensi
1,2 - [Pembelajaran berbasis proyek - Wikipedia bahasa Indonesia, ensiklopedia bebas](https://id.wikipedia.org/wiki/Pembelajaran_berbasis_proyek)
3 - [Workshop Guru Pemasaran](https://workshopgurupemasaran.tumblr.com/)
4 - [Implementasi Teaching Factory, Produk Kreasi Siswa SMK di Jepara Dipamerkan | Direktorat Jenderal Pendidikan Vokasi Kemendikbudristek](https://vokasi.kemendikdasmen.go.id/read/b/implementasi-teaching-factory-produk-kreasi-siswa-smk-di-jepara-dipamerkan)
5 - [kurikulum.kemdikbud.go.id](https://kurikulum.kemdikbud.go.id/wp-content/uploads/2022/07/V.2-Dimensi-elemen-subelemen-Profil-Pelajar-Pancasila-pada-Kurikulum-Merdeka.pdf)
6 - [CP & ATP - Rekayasa Perangkat Lunak Fase F](https://guru.kemdikbud.go.id/kurikulum/referensi-penerapan/capaian-pembelajaran/smk/rekayasa-perangkat-lunak/fase-f/)
7,8,9 - [Memahami Perbedaan Tujuan Pembelajaran dan Capaian Pembelajaran dalam Kurikulum Merdeka - Feeds Liputan6.com](https://www.liputan6.com/feeds/read/5873649/memahami-perbedaan-tujuan-pembelajaran-dan-capaian-pembelajaran-dalam-kurikulum-merdeka)
10,11 - [Cara Menyusun dan Contoh Rubrik Penilaian Ujian Berbasis Proyek (Project Based Learning)](https://blog.kejarcita.id/cara-menyusun-dan-contoh-rubrik-penilaian-ujian-berbasis-proyek-project-based-learning/)
12,13 - [Modul Ajar Implementasi Kurikulum Merdeka Jenjang SMA SMK - DATADIKDASMEN.COM](https://www.datadikdasmen.com/2022/07/modul-ajar-ikm-sma-smk.html)
