var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// memanggil fungsi readBooks berdasarkan data books dengan callback
console.log('Soal ke-1:')
readBooks(10000, books[0], function(sisa) {
    readBooks(sisa, books[1], function(sisa) {
        readBooks(sisa, books[2], function(sisa) {
            readBooks(sisa, books[3], function(sisa) {
                console.log(`Karena sisa waktu saya sudah ${sisa}, maka waktu membaca selesai.`);
            })
        })
    })
})