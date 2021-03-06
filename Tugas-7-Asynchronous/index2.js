var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// memanggil fungsi readBooks berdasarkan data books dengan promise
console.log('Soal Ke-2:')
// readBooksPromise(10000, books[0])
//     .then(sisaWaktu => readBooksPromise(sisaWaktu, books[1])
//         .then(sisaWaktu => readBooksPromise(sisaWaktu, books[2])
//             .then(sisaWaktu => readBooksPromise(sisaWaktu, books[3]))
//         )
//     )
//     .catch(error => console.log(error))

readBooksPromise(10000, books[0])
    .then(sisaWaktu => readBooksPromise(sisaWaktu, books[1]))
    .then(sisaWaktu => readBooksPromise(sisaWaktu, books[2]))
    .then(sisaWaktu => readBooksPromise(sisaWaktu, books[3]))
    .then(sisaWaktu => console.log(`Karena sisa waktu saya sudah ${sisaWaktu}, maka waktu membaca selesai.`))
    .catch(error => console.log(error))