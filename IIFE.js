//Immediately Invoked Function Expression (IIFE)

//suppose
(function one(){
  console.log(`DB Connected`)
})();

//first parenthis is were we write function and 
// Second parenthis is excuation call

//Global scope ko pollution bata problem hunxa kai choti so tyo 
//global scope ko variables j pani tya declearation xa tesko pollution 
//hathau na lie IIFE use hunxa 


//Jaba hami le duita IIFE function lie excute garni kosis garxa teti 
//bela yesle error nikal xa kina vani IIFE function invoke tw hunx but 
//don't know context lie ka rokni vaney rw
//so for this situatuion we have to end that line
//for ending the line we need semicolon (;)
//we can also run arrow function in IIFE 

//this how you pass parameters
((name) => {
  console.log(`DB Connected too ${name}`)
})('Bibek')

