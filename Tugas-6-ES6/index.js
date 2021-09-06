// SOAL 1
console.log("Soal Nomor 1:")
const luasPersegiPanjang = (panjang, lebar) => {
    let luas = panjang * lebar;
    return luas;
}

const kelilingPersegiPanjang = (panjang, lebar) => {
    let keliling = 2 * (panjang + lebar);
    return keliling;
}

console.log(`Luas dari Persegi Panjang dengan Panjang 5cm dan Lebar 10cm adalah: ${luasPersegiPanjang(5, 10)}cm`);
console.log(`Keliling dari Persegi Panjang dengan Panjang 5 dan Lebar 10 adalah: ${kelilingPersegiPanjang(5, 10)}cm`);
console.log('------------------------------------------------------------------------')


// SOAL 2
console.log("Soal Nomor 2:")
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(`Hello! I'm ${firstName} ${lastName}`);
        }
    }
}
newFunction("William", "Imoh").fullName();
console.log('------------------------------------------------------------------------')


// SOAL 3
console.log("Soal Nomor 3:")
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}

const {firstName, lastName, address, hobby} = newObject;
console.log(firstName, lastName, address, hobby);
console.log('------------------------------------------------------------------------')


// SOAL 4
console.log("Soal Nomor 4:")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = [...west, ...east];
console.log(combined);
console.log('------------------------------------------------------------------------')


//SOAL 5
console.log("Soal Nomor 5:")
const planet = "earth"; 
const view = "glass";
let before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`;
console.log(before);
console.log('------------------------------------------------------------------------')
