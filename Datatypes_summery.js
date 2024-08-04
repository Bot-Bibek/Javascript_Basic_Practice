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


 // ************************Memories******************************
 //Stack and Heap Memory 
//In stack memory is use in primitive type and in heap memory is use in non primitive tpes

//When ever stack memory is use whatever variable we declear it return the copy of that variables.
//When ever memory(Object) is define under heap it returns reference of orignal values. it change orignal values.

let myName = "Bibek Bot" //Primitive type
let anotherName = myName
anotherName = "bot"
console.log(anotherName);
console.log(myName);

let userOne = {
  email: "user@gmail.com",
  userId: 123
}


let userTwo = userOne
//Too access value of object Dot notation is use.
userTwo.email = "bibek@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);