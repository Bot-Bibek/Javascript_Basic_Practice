// To declear object there are 2 way (literal way and constructor way)their is also a singleton concept to declear objects

//Object literals 

const mySym = Symbol("key1")

const jsUser = {
  name: "Bibek",
  "fullName": "Bibek Bot",
  [mySym]: "myKey1",
  age: 20,
  location: "Pokhara",
  email: "uniquebibek68@gmail.com",
  isLoggedIn: false,
  lastLoginDays:["Monday", "Saturday"]
}
// console.log(jsUser.name)
// console.log(jsUser["email"])
// console.log(jsUser["fullName"])
// console.log(jsUser[mySym])


jsUser .email = "bibek68@gmail.com" //change value of key in objects

// Object.freeze(jsUser)  //making object unchangable using freeze method

console.log(jsUser)

jsUser.greeting = function(){
  console.log("Hello World")
}

jsUser.greeting2 = function(){
  console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting2())
console.log(jsUser.greeting())

