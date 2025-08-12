// let tanggal = 12;
// let bulan = 8;
// let tahun = 2025;
// tanggal = tanggal + 1;
// bulan = bulan + 5;
// new Date

// const tanggalIndonesia = `${tanggal}/${bulan}/${tahun}`;
// console.log(tanggalIndonesia); // Output: 12/8/2025

const tanggal = new Date(2025, 7, 12); // Tahun, Bulan (0-11), Tanggal
// set gmt +7
tanggal.setHours(tanggal.getHours() + 7); // Set GMT +7
console.log(tanggal); // Output: 2025-08-12T00:00:00.000Z

tanggal.setMonth(tanggal.getMonth() + 5);
tanggal.setDate(tanggal.getDate() + 7);

// Format tanggal Indonesia
const tanggalIndonesia = tanggal.getDate();
const bulanIndonesia = tanggal.getMonth() + 1;
const tahunIndonesia = tanggal.getFullYear();

const hariIndonesia = [
    "senin",
    "selasa",
    "rabu",
    "kamis",
    "jumat",
    "sabtu",
    "minggu",
];

console.log(hariIndonesia[tanggal.getDay()]);

const tanggalIndonesiaFull = `${tanggalIndonesia}/${bulanIndonesia}/${tahunIndonesia}`;
console.log(tanggalIndonesiaFull); // Output: 12/8/2025
