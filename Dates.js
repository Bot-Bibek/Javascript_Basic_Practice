//Dates 

const myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myNewDate = new Date(2023, 0, 23)
// let myNewDate = new Date(2023, 0, 23, 5, 3)
let myNewDate = new Date("01-14-2023")
// console.log(myNewDate.toLocaleString())


let myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(myNewDate.getTime())
// console.log(myNewDate.getTime())
console.log(Math.floor(Date.now()/1000))