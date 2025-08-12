# 📚 Soal Case JavaScript – 11 Konsep Penting

Berikut adalah kumpulan soal berbasis studi kasus yang menguji pemahaman Anda terhadap 11 konsep penting JavaScript yang telah dipelajari.

---

## 1. 📅 Date
**Case:**  
Sebuah toko online ingin menampilkan sisa waktu promosi hingga pukul 23:59 hari ini.  
Buatlah fungsi yang menerima waktu saat ini dan mengembalikan berapa jam dan menit tersisa hingga promo berakhir.

---

## 2. 📦 JSON
**Case:**  
Server mengirimkan data user dalam bentuk string JSON:
```json
"{\"nama\": \"Fauzi\", \"umur\": 25}"
```
Buatlah kode untuk:
1. Mengubah string tersebut menjadi objek.
2. Menambahkan properti `status` dengan nilai `"aktif"`.
3. Mengubah kembali menjadi string JSON.

---

## 3. 🔁 Recursive
**Case:**  
Buat fungsi rekursif untuk menghitung total semua angka dalam array bertingkat:
```js
[1, [2, 3], [4, [5]]]
```
Hasilnya harus `15`.

---

## 4. 🌐 Lexical Environment
**Case:**  
Buat fungsi `buatCounter` yang ketika dipanggil menghasilkan fungsi penghitung (mulai dari 1).  
Setiap kali fungsi penghitung dipanggil, nilainya bertambah 1.  
Gunakan konsep **closure**.

---

## 5. ⚙️ Function is Object
**Case:**  
Buat fungsi `hitungDiskon` yang memiliki properti `persentase`.  
Jika dipanggil sebagai fungsi, ia mengembalikan nilai harga setelah diskon.  
Contoh:
```js
hitungDiskon.persentase = 20;
hitungDiskon(100); // 80
```

---

## 6. ⏱ setTimeout & setInterval
**Case:**  
Buat timer mundur dari angka 5 menggunakan `setInterval`, lalu cetak `"Waktu habis!"` setelah selesai.

---

## 7. 🎁 Decorators & Forwarding
**Case:**  
Buat decorator `timeLogger` yang membungkus fungsi lain dan mencetak waktu eksekusi fungsi tersebut.

---

## 8. 🔗 bind
**Case:**  
Anda memiliki objek:
```js
let user = { nama: "Fauzi", sapa() { console.log(`Halo, ${this.nama}`); } };
```
Simpan metode `sapa` ke dalam variabel lalu jalankan tanpa kehilangan konteks `this` menggunakan `bind`.

---

## 9. 🎯 Arrow Functions
**Case:**  
Jelaskan perbedaan output dari dua kode berikut:
```js
let obj = { nama: "Fauzi", biasa: function() { console.log(this.nama); } };
let obj2 = { nama: "Budi", arrow: () => console.log(this.nama) };
obj.biasa(); 
obj2.arrow();
```

---

## 10. 🧬 Prototypal Inheritance
**Case:**  
Buat objek `hewan` dengan properti `bernapas: true`.  
Buat objek `kucing` yang mewarisi dari `hewan` dan tambahkan properti `suara: "meong"`.  
Tunjukkan bahwa `kucing` bisa mengakses `bernapas`.

---

## 11. 🏗 Function.prototype
**Case:**  
Tambahkan method `ucapkan` ke `Function.prototype` yang mencetak `"Halo dari prototype!"`.  
Tunjukkan bahwa semua fungsi baru bisa memanggil method ini.

---
