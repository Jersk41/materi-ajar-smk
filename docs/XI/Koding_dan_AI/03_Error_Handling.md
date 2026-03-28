---
publish: false
---

# Bab 3: Konsep Penanganan Kesalahan (Error Handling)

Bayangkan Anda sedang mengikuti resep untuk membuat kue. Tiba-tiba, Anda sadar bahwa gula di dapur habis. Apa yang akan Anda lakukan?

1.  **Panik dan berhenti total?** (Ini ibarat program yang *crash*).
2.  **Punya rencana cadangan?** Mungkin Anda bisa menggunakan madu sebagai pengganti, atau memberi tahu orang yang akan memakan kue bahwa kuenya tidak jadi. (Ini adalah *Error Handling*).

Dalam dunia pemrograman, "kehabisan gula" atau masalah tak terduga lainnya disebut **error** atau **exception**. *Error Handling* adalah cara kita sebagai programmer untuk membuat rencana cadangan agar program tidak "panik" dan berhenti, melainkan bisa menanganinya dengan cerdas.

## Strategi Penanganan Masalah: Try, Except, Else, Finally

Kita bisa memikirkan penanganan kesalahan seperti menyusun Rencana A dan beberapa Rencana B.

### 1. `try` — Rencana Utama (Jalur Ideal)

Blok `try` adalah tempat kita meletakkan "Rencana A" atau jalur ideal. Ini adalah kode yang kita harapkan berjalan lancar tanpa masalah.

> **Analogi:** Kita *mencoba* (try) membuat adonan kue sesuai resep.

### 2. `except` — Rencana Cadangan (Jika Terjadi Masalah)

Blok `except` adalah "Rencana B" kita. Blok ini hanya akan dijalankan jika Rencana A gagal. Hebatnya, kita bisa punya beberapa Rencana B untuk masalah yang berbeda-beda.

-   **Rencana B.1 (Masalah Spesifik):** "Jika kehabisan gula (`GulaHabisError`), maka gunakan madu."
-   **Rencana B.2 (Masalah Spesifik Lain):** "Jika oven rusak (`OvenRusakError`), maka batalkan pembuatan kue dan beri tahu pengguna."
-   **Rencana B.x (Masalah Umum):** "Jika terjadi masalah lain *apapun* yang tidak terduga (`Exception`), tampilkan pesan 'Maaf, terjadi kesalahan di dapur'."

> **Analogi:** Kita *menangkap* (except) masalah yang spesifik dan menanganinya sesuai rencana. Menangkap masalah yang umum adalah jaring pengaman terakhir.

### 3. `else` — Jika Rencana A Berhasil

Blok `else` adalah langkah lanjutan yang hanya dieksekusi jika Rencana A (blok `try`) berhasil tanpa ada masalah sama sekali.

> **Analogi:** *Jika* adonan kue berhasil dibuat tanpa kurang satu bahan pun, *maka* masukkan adonan ke dalam oven.

### 4. `finally` — Selalu Dilakukan (Pembersihan)

Blok `finally` adalah bagian yang akan **selalu dijalankan**, tidak peduli Rencana A berhasil atau gagal. Ini penting untuk aktivitas "pembersihan".

> **Analogi:** Apapun yang terjadi—baik kue berhasil dibuat, gagal, atau bahkan tidak jadi dibuat—kita *pada akhirnya* (finally) harus membersihkan dapur.

---

## Mengapa Ini Sangat Penting?

1.  **Mencegah Program Berhenti Paksa (Crash):** Program yang baik tidak mati di tengah jalan. Ia bisa menangani masalah dan tetap berjalan.
2.  **Pengalaman Pengguna (User Experience):** Memberikan pesan yang ramah ("Input salah, coba lagi") jauh lebih baik daripada pesan error sistem yang membingungkan.
3.  **Keamanan & Keandalan:** Program menjadi lebih andal karena siap menghadapi skenario terburuk.

## Contoh dalam Kode

Sekarang, mari kita lihat bagaimana konsep di atas diterapkan dalam kode Python:

```python
# Rencana kita adalah membagi dua angka
def divide(a, b):
    # Rencana A: Mencoba melakukan pembagian
    try:
        result = a / b
    # Rencana B.1: Jika masalahnya adalah pembagian dengan nol
    except ZeroDivisionError:
        print("Error: Anda tidak bisa membagi dengan nol.")
        return None
    # Rencana B.x: Jika ada masalah tak terduga lainnya
    except Exception as e:
        print(f"Terjadi error umum: {e}")
        return None
    # Jika Rencana A berhasil tanpa masalah
    else:
        print("Pembagian berhasil!")
        return result
    # Ini akan selalu dijalankan (meski tidak ada di contoh awal)
    finally:
        print("Proses pembagian selesai.")

divide(10, 2)  # Sukses, menjalankan try -> else -> finally
divide(10, 0)  # Gagal, menjalankan try -> except ZeroDivisionError -> finally
divide("6", 3) # Gagal, menjalankan try -> except Exception -> finally
```

Dengan memahami konsepnya terlebih dahulu, kode di atas menjadi lebih mudah dibaca bukan sebagai barisan perintah, melainkan sebagai sebuah strategi untuk menghadapi masalah.
