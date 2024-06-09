const score = 100
// console.log(score);
const balance = new Number(1000)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 123.89
// console.log(otherNumber.toPrecision(4));

const hundreds = 100000
//toLocaleString() retutns value with comma
// console.log(hundreds.toLocaleString());


//******************************Maths******************
// console.log(Math)
// //abs() return positive value if value is negative
// console.log(Math.abs(-4))
// //round() return round of values
// console.log(Math.round(4.6))
// //ceil() return top values 
// console.log(Math.ceil(4.6))
// //floor() return lowest values 
// console.log(Math.floor(4.9))
// //min() return the minimum value of array
// console.log(Math.min(4,3,2,1))
// //min() return the maximum value of array 
// console.log(Math.max(4,3,2,1))


//math.random return values between 0 and 1
console.log(Math.random())
console.log((Math.random()*10) + 1)

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 10)) + min )