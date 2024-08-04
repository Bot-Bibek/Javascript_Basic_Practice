function sayMyName(){
  console.log("Hello Function")
}

// sayMyName()

//function that add two numbers
// function addTwoNum(num1, num2){ //Input is parameters in function
//   console.log(num1 + num2)
// }
// addTwoNum(2,3) //passing values is arguments

function num(num1, num2){
  let result = num1 + num2
  return result
}
//storing arguments in variables
const result = num(10, 9.3)
// console.log(result)

function loginUserMessage(username){
  if(username === undefined){
    console.log(`Please enter the username.`)
    return
  }
  return `${username} just logged in`
}
console.log(loginUserMessage("Bibek Bot"))
console.log(loginUserMessage())

