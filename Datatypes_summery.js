//Primitive Datatypes
//Primitives datatypes are call by value. 
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const age = 20
const value = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3456771214456613456n
console.log(typeof bigNumber)

// Reference (Non Primitive type)
// Non Primitive datatype's value reference is directly alocated.

//Array, Objects, Functions

//array
const heros = ["SuperMan", "Batman", "Ironman"]

//Objects
let myObj = {
  name: "Bibek Bot",
  age: 20
}

//Functions
 constmyFunction = function(){
  console.log("hello")
 }