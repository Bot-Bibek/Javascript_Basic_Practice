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

c
