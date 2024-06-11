//Time Complexity 
/*
> Relation between input size and running time(Operations)

> Code will be better if the relation is short with input size.

> 
*/
//For Example
let n = 10;
for(let i=0; i<n; i++){
  console.log("Hello World")
}

/*Supose variable n is the input, 
> if our variable n is input then our total number of operation or running time of code will be n. 
=> Time complexity = input n
> Time complexity is nothing but the number of operation we do inside the code or running time directly proposion with the input n. when n will increase in the same way our
operation or time complexity will also increase.
This way we can find it's a linear relations
*/

//We can calculate time complexity in 3 ways
/*
1. Best Case
2. Average Case
3. Worst Case 

1. Best Case 
For Exmaple
we hav numbers: [1,2,3,4,5]
search for '1'

so number haru to order change huna sakxa 
supose hamro pailo order that is [1,2,3,4,5] aaba hami le yo array bata 1 lie search garna xa.
hamile 1 lie search garyo vani first position mai 1 paixa so yespaxi hamle search garna pardaina.
hamlie kati operation lagyo tw 1 search garna 

hamlie 1 operation lagyo and
1 unit of time lagyo 
to search 1 from array.

so its's best case senario 


2. Averagae Case
suppose our second order is random order [[2,1,3,4,5], [2,3,4,1,5]]

best case ma 1 operation and 1 unit of time ma aako xa vani 

so average case ma chai jati pani possible case xa tyo sab ko hamle time complexity nikal xam ani divide garxam n sanga 

1+2+3+4+5/n

1+2+3+4+5/5

generalize from 

1+2+3+.......n/n

n(n+1)/2*n 

n+1/2

so n+1/2 time lagi ra hunxa average case ma


3. Worst Case
suppose hamro third case ma number arrange hunxa yeasri 
[5,4,3,2,1]

so 1 sama pugna lie hamle n steps uthauna paryo 
ya n = 5 xa 
jaba yo  5, 10 to the 5 power hunxa yaniki 1 lakhs number aayo vani 1 lakh steps uthauna parxa

so yo tarika le ya chai directly proposnal hunxa n sanga 

worst case ma hamle directly proposnal garinxa time complexity sanga with input size n sanga.


*/