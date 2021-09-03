// SOAL 1
console.log("Soal ke-1:")
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
for (var i = 0; i < daftarHewan.length; i++) {
    var sorted = daftarHewan.sort();
    console.log(sorted[i]);
}

console.log('--------------------------')

// SOAL 2
console.log("Soal ke-2:")
function introduce(data) {
    var name = data.name;
    var age = data.age;
    var address = data.address;
    var hobby = data.hobby;
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}

var data = {
    name: "John",
    age: 30,
    address: "Jalan Pelesiran",
    hobby: "Gaming"
}

var perkenalan = introduce(data);

console.log(perkenalan)
console.log('--------------------------')

// SOAL 3
console.log("Soal ke-3:")
function hitung_huruf_vokal(nama) {
    var jumlahVokal = 0;
    var pisah = nama.split('');
    pisah.filter(function(huruf) {
        if (huruf === 'a') {
            jumlahVokal += 1;
        } else if (huruf === 'i') {
            jumlahVokal += 1;
        } else if (huruf === 'u') {
            jumlahVokal += 1;
        } else if (huruf === 'e') {
            jumlahVokal += 1;
        } else if (huruf === 'o') {
            jumlahVokal += 1;
        } else if (huruf === 'A') {
            jumlahVokal += 1;
        } else if (huruf === 'I') {
            jumlahVokal += 1;
        } else if (huruf === 'U') {
            jumlahVokal += 1;
        } else if (huruf === 'E') {
            jumlahVokal += 1;
        } else if (huruf === 'O') {
            jumlahVokal += 1;
        }
    })

    return jumlahVokal
}

var hitung_1 = hitung_huruf_vokal("Muhammad");
var hitung_2 = hitung_huruf_vokal("Iqbal");
var hitung_3 = hitung_huruf_vokal("Mikael Columbus Et Alpine")

console.log(hitung_1, hitung_2);
console.log('Jumlah huruf vokal dalam nama Mikael Columbus Et Alpine adalah : ' + hitung_3 + ' huruf.');
console.log('--------------------------')

// SOAL 4
function hitung(angka) {
    var totalAngka = 100; // membuat variabel angka sebagai acuan untuk daftar array
    var daftarAngka = []; // membuat array kosong untuk menampung hasil iterasi dibawahnya
    for(var x = -1; x < totalAngka; x++) { // iterasi angka
        var y = x * 2; // mengkali hasil iterasi menjadi kelipatan 2
        daftarAngka.push(y); // memasukkan hasil iterasi kelipatan 2 ke array daftarAngka
    }
    return daftarAngka[angka] // mengembalikan elemen array yang diminta oleh parameter
}

console.log('Soal ke-4:')
console.log( hitung(0) )
console.log( hitung(1) )
console.log( hitung(2) )
console.log( hitung(3) )
console.log( hitung(4) )
console.log( hitung(5) )
console.log( hitung(6) )