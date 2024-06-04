const accountId = 12233 //Unchangable 
let accountEmail = "bibek@gmail.com" //changable
var accountPassword = "12345"
accountCity = "Pokhara"
let accountState;  //Undefined

//accountId = 2 

accountEmail = "xyz@gmail.com"
accountPassword="2121"
accountCity = "KTM"



console.log(accountId);

/*
Note
Prefer not to use var
because of issue in block scope and functional scope.
*/

//table return variables values in tabular from with index.
console.table([accountEmail, accountPassword, accountCity, accountState])
