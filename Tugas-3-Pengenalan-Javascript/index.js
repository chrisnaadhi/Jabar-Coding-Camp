// Soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var saya = pertama.substr(0, 4);
var senang = pertama.substr(12, 6);
var belajar = kedua.substr(0, 7);
var js = kedua.substr(8, 10).toUpperCase();

var belajarJs = saya + " " + senang + " " + belajar + " " + js

console.log("Soal 1 :")
console.log(belajarJs);
console.log("=================================")

// Soal 2

var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var sepuluh = Number(kataPertama);
var dua = Number(kataKedua);
var empat = Number(kataKetiga);
var enam = Number(kataKeempat);

var hasil = sepuluh + (dua * empat) + enam;
console.log("Soal 2 :")
console.log(hasil);
console.log("=================================")

// Soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25);

console.log("Soal 3 :")
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);