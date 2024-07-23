// To declear object there are 2 way (literal way and constructor way)their is also a singleton concept to declear objects

//Object literals 

const mySym = Symbol("key1")

const jsUser = {
  // name: "Bibek",
  // "fullName": "Bibek Bot",
  // [mySym]: "myKey1",
  // age: 20,
  // location: "Pokhara",
  // email: "uniquebibek68@gmail.com",
  // // isLoggedIn: false,
  // lastLoginDays:["Monday", "Saturday"]
}
// console.log(jsUser.name)
// console.log(jsUser["email"])
// console.log(jsUser["fullName"])
// console.log(jsUser[mySym])


// jsUser .email = "bibek68@gmail.com" //change value of key in objects

// Object.freeze(jsUser)  //making object unchangable using freeze method

// console.log(jsUser)

jsUser.greeting = function(){
  console.log("Hello World")
}

jsUser.greeting2 = function(){
  console.log(`Hello JS user, ${this.name}`);
}
// console.log(jsUser.greeting2())
// console.log(jsUser.greeting())

//*****************************Objects 2 *************************/

//Singleton or Constructor  Objects
// const tinderUser = new Object()
const tinderUser = {} //None Singleton Objects


tinderUser.id = "123abc"
tinderUser.name = "Yogesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email: "yogesh@gmail.com",
  fullName: {
    userFullName:{
      firstName: "Bibek",
      lastName: "Bot"
    }
  }
}

// console.log(regularUser.fullName)
//Accessing nested Objects  
//  


//Combining Objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

//Spread Operator
const obj4 = {...obj1, ...obj2}
// console.log(obj4)


const isuser =[
  {
    id: 1,
    email: "h@gmail.com"
  },
  {
    id: 2,
    email: "b@gmail.com"

  }
]
//Accessing obj of array 
isuser[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
//entriess return in array from
console.log(Object.entries(tinderUser))
//hasOwnProperty
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//*******************************Object De-Struture and JSON API****************************************
const course =  {
  name: "Javascript",
  price: "1000",
  instructor: "Hitesh"
}

//Object de struture
const{instructor: tutor}= course
console.log(tutor)

//Example of react 
// const navbar = ({company})=>{

// }
// navbar(company = "bibek" )

//JSON 
// {
//   "name": "Bibek",
//   "coursname": "Javascript",
//   "price": "free"
// }

[
  {},
  {},
  {},
]