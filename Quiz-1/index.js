// SOAL 1

function jumlah_kata(kata) {
    console.log(kata.split(' ').length);
}

var kalimat_1 = "Halo Nama Saya Muhammad Iqbal Mubarok"
var kalimat_2 = "Saya Iqbal"

jumlah_kata(kalimat_1);
jumlah_kata(kalimat_2);


// SOAL 2
var tanggal = 29;
var bulan = 2;
var tahun = 2020;

// var tanggal = 28
// var bulan = 2
// var tahun = 2021

// var tanggal = 31
// var bulan = 12
// var tahun = 2020

function next_date(tanggal, bulan, tahun) {
    tanggal += 1;
    if (bulan <= 12) {
        if (tanggal > 28 && bulan === 2) {
            tanggal = 1;
            bulan += 1;
        } else if (tanggal >= 31 && bulan === 12) {
            tanggal = 1;
            bulan = 1;
            tahun += 1;
        } else if (tanggal > 30) {
            tanggal = 1;
            bulan += 1;
        } else {
            console.log("Kalender sedang bermasalah. Akan diperbaiki secepatnya.")
        }
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

}

next_date(tanggal, bulan, tahun)