// ini udah diubah

const hitung = require("./luasKeliling.js");

console.log("== 1. Luas Persegi ==");
console.log("Rumus luas persegi adalah : sisi x sisi");
console.log(hitung.lPersegi(3));

console.log("== 2. Keliling Persegi ==");
console.log("Rumus keliling persegi adalah : 4 x sisi");
console.log(hitung.kPersegi(3));

console.log("== 3. Luas Persegi Panjang ==");
console.log("Rumus luas persegi panjang adalah : panjang x lebar");
console.log(hitung.lPersegiPanjang(3, 2));

console.log("== 4. Keliling Persegi Panjang ==");
console.log("Rumus keliling persegi panjang adalah : 2 x (panjang + lebar)");
console.log(hitung.kPersegiPanjang(3, 2));
