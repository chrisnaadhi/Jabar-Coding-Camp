// SOAL 1
console.log('Soal ke-1:')
var nilai = 55;

if (nilai > 100) {
    console.log("Nilai Maksimum adalah 100. Silahkan input nilai dalam rentang 0 hingga 100.")
} else if (nilai >= 85) {
    console.log("Indeks Nilai A.")
} else if (nilai >= 75) {
    console.log("Indeks Nilai B.")
} else if (nilai >= 65) {
    console.log("Indeks Nilai C.")
} else if (nilai >= 55) {
    console.log("Indeks Nilai D.")
} else if (nilai < 55) {
    console.log("Indeks Nilai E.")
} else {
    console.log("Indeks Nilai tidak Valid. Silahkan gunakan Angka.")
}
console.log('-------------------------')


// SOAL 2
console.log('Soal ke-2:')

var tanggal = 2;
var bulan = 1;
var tahun = 1999;

/* Mengecek supaya tidak ada variabel untuk bulan ke-13 dan seterusnya */
if (bulan <= 12) {
    switch(bulan) {
        case 1: { bulan = 'Januari'; break; }
        case 2: { bulan = 'Februari'; break; }
        case 3: { bulan = 'Maret'; break; }
        case 4: { bulan = 'April'; break; }
        case 5: { bulan = 'Mei'; break; }
        case 6: { bulan = 'Juni'; break; }
        case 7: { bulan = 'Juli'; break; }
        case 8: { bulan = 'Agustus'; break; }
        case 9: { bulan = 'September'; break; }
        case 10: { bulan = 'Oktober'; break; }
        case 11: { bulan = 'November'; break; }
        case 12: { bulan = 'Desember'; break; }
        default: { console.log('Peringatan!')}
    }
    console.log(tanggal + ' ' + bulan + ' ' + tahun)
} else {
    console.log('Bukan Angka Bulan dalam Kalender, silahkan masukkan bulan yang tepat dari 1 sampai 12.')
}
console.log('-------------------------')

// SOAL 3
console.log('Soal ke-3:')

// var n = 3;
var n = 7;
var pagar = '#';
while(pagar.length <= n) {
    console.log(pagar);
    pagar += '#';
}
console.log('-------------------------')

// SOAL 4
console.log('Soal ke-4:')

var m = 10;
// var m = 25;
for (var love = 1; love <= m; love++) {
    if (love % 3 === 0) {
        var samaDengan = '=';
        console.log(
            love + ' - I Love VueJS \n' +
            samaDengan.repeat(love) /* Menggunakan Method repeat() untuk menambahkan '=' agar sesuai dengan nomor dari pengulangan yaitu kelipatan 3 */
        );
    } else if (love % 3 === 1) {
        console.log(love + ' - I Love Programming')
    } else {
        console.log(love + ' - I Love Javascript')
    }
}

