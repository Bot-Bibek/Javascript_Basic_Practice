//Arrays
//Simple array
const myArr = [0,1,2,3,4,5]
console.log(myArr[1]);

//way of declearing arrays
const myHer0 = ["Iron Man", "Superman"]

const myArr2 = new Array(1,2,3,4)

/* 
Array is a objects.
collection of multiple items under a single variable.
array are zero based indexed
In javascript whenever we do copy operation in array it create shallow copies.

shallow copy: just like heap memory 
deep copy: just like stack memory

*/
// In javascript, array are resizable, mix of different data types
// array are not associative, array elements cannot be access using arbitrary strings as index.

//Arrays Methods

//push method add the elements in array.
// myArr.push(6)
// myArr.push(7)
//pop method remove the last elements of array.
// myArr.pop()
//unshift method add the elements in start points of arrays
// myArr.unshift(9)
//shift method remove the elements of start points
// myArr.shift()
console.log(myArr)

//Questioners method

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))\

//join method convert array into strings
const newArr = myArr.join()
console.log( typeof newArr)

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B " ,myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)


const marvel_heroes = ["Thor", "Ironman"]
const dc = ["superman", "flash"]

// marvel_heroes.push(dc)
// console.log(marvel_heroes)

//concat return new arrays
const All_heros = marvel_heroes.concat(dc)
console.log(All_heros)

//sprad operator return spreadout values
//Perfered to use
const all_new_heros = [...marvel_heroes, ...dc]
console.log(all_new_heros)

//Flat method spreadout the sub array and return single array
const another_array = [1,2,3,[4,5,6],7,[6,7, [4,5]]]

const myNumber = another_array.flat(Infinity)
console.log(myNumber)

console.log(Array.isArray("Bibek"))
//from method convert stiring value into array
console.log(Array.from("Bibek"))
console.log(Array.from({name: "Bibek"})) //intresteing

let score1 = 100
let score2 = 200

console.log(Array.of(score1, score2))