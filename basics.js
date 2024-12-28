const userName = "Can"
const userSurname = "Güzel"
const userAge = 16
const isAdult = Math.round(userAge.toFixed(2)) >= 18
console.log(`Wellcome ${userName[0] + userSurname[0]}, your age is ${userAge}.`)

if (Boolean(isAdult) != true) {
        console.error(`User ${userName + " " + userSurname} is not adult.`)
    } else {
        console.info(`User ${userName + " " + userSurname} is adult.`)
    }
