const name = "Bibek"
const repoCount = 20

// console.log(name + repoCount);

//Prefer use back tick to concatenate String interpolations
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const myName = new String("Bibek")
console.log(myName[0])
console.log(myName.__proto__)

console.log(myName.length);
//toLowerCase and toUpperCase function doesn't change the origanl value of myName it change the copy because it is a primitive type and use stack memory 
console.log(myName.toLowerCase());
console.log(myName.toUpperCase())

console.log(myName.charAt(1));
console.log(myName.indexOf('i'));

const newString = myName.substring(0, 4)
console.log(newString)

//In slice we can use negative value to access char
const anotherString = myName.slice(0, 4)
console.log(anotherString)

//trim() method remove starting and ending space
//trim only works on whitespace charater plus line terminators, slash in characters. 
const newStringOne = "     Bibek    "
console.log(newStringOne);
console.log(newStringOne.trim())


const url = "https://bibek.com/bibek%20bot"
console.log(url.replace('%20', '-'));

//includes use to search keywords in string and return value in boolean
console.log(url.includes('bibek'))

console.log(myName.split('b'))