const user = {
  username: "Bibek",
  price: 99,

  //current context mean this keyword, this refer current context
  welcomeMessage: function(){
    console.log(`${this.username}, welcome to site`);
    // console.log(this);
  }
}

// user.welcomeMessage()
// //Change value
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)

// function one(){
//   let username = "Bibek"
//   console.log(this.username)
// }
// one()

// const one = function (){
//   let username = "bibek"
//   console.log(this.username)
// }

//Arrow function
// const one = () =>{
//   let username = "Bibek"
//   console.log(this)
// }

//if we use return keyword its explict method 
// const addTwo = (num1, num2) => {
//   return num1 + num2
// }
// console.log(addTwo(3, 4));

//Implict Return
// const addTwo = (num1, num2) = num1 + num2

// const addTwo = (num1, num2) => (num1 + num2 )

const addTwo = (num1, num2) => ({username: "Bibek"})


// const myArray = [2,3,5,6,8]

// myArray.forEach()