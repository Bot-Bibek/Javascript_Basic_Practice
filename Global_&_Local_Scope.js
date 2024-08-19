// var c = 200 //Global Scope

// let a = 300 //Block Scope
// {}//scope

// //Jati choti curly braces aauxa tya scope ko kura aauxa

// if(true){
//   let a = 10
//   const b = 20
// }

// for(let i = 0; i < Array.length; i++){
//   const element = array[1]; //Block Scope
// }


// console.log(a)
// //console.log(b)
// console.log(c)


//whenever it is nested function child function can access parent function variables.
function one(){
  const username = "Bibek"

  //inner function can access outer function
  function two(){
    const website = "youtube"
    console.log(username)
  }
  //console.log(website)
  two()
}
one();

//just like function it also apply on if else however if else also a scope

if(true){
  const username = "bibek"
  if (username === "Bibek"){
    const website = "yputube"
    console.log(username + website) //print username and website because username is parent variable so in nested child can access parent variable ans website is inside scope
  }
  //console.log(website) //(error) error because it out of scope
}
//console.log(username) //(Error) error because it out of scope

/****************Interseting******************** */
//Basic function
console.log(addone(5));
function addone(num){
  return num +1
}



//also a function but also called expression just like variables 
//variable is powerful in JS, JS variables can hold JSON values, function etc

const addTwo = function (num){
  return num + 2
}
console.log(addTwo(5));

