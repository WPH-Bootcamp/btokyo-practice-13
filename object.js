// function salam() {} // Object or Class

// // Property / Attribute 
// salam.info = "Halo";

// // Behavior / Function
// salam.lakukan = function() {
//     console.log("Halo semua");
// }

// salam.lakukan(); // Output: Halo semua

function Mobil() {}

// Property / Attribute
Mobil.merk = "Toyota";
Mobil.tahun = 2020;
Mobil.warna = "Merah";

// Behavior / Function
Mobil.jalankan = function() {
    console.log("Mobil " + this.merk + " berjalan");
}
Mobil.hentikan = function() {
    console.log("Mobil " + this.merk + " berhenti");
}       

Mobil.jalankan(); // Output: Mobil Toyota berjalan
Mobil.hentikan(); // Output: Mobil Toyota berhenti
console.log(Mobil.merk); // Output: Toyota