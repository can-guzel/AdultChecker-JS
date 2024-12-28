const userName = "Can"
const userSurname = "Güzel"
const userAge = 16
const isAdult = Math.round(userAge.toFixed(2)) >= 18
console.log(`Wellcome ${userName}, your age is ${userAge}.`)

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid*orderedQuantity+deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(message)

console.warn(`Hoşgeldin ${userName[0] + userSurname[0]}, Uzunluk : ${message.length} karakter.`);

if (Boolean(isAdult) != true) {
        console.error(`User ${userName + " " + userSurname} is not adult.`)
    } else {
        console.info(`User ${userName + " " + userSurname} is adult.`)
    }

// console.log(Number.parseFloat("12.46qwe79"));