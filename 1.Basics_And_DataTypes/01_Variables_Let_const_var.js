
const accountNumber =100; // the const values can't be updated further
// accountNumber=200 ; // this will result to an error
var  name ="Gaurav"; // tradinal way of declaring variables in js but variables declared using var has global scope and also we can define them

var name ="Saurav";

// to deal with this issues let was introduced to delclare variables
let myname ="Walter White"
myname =" Jessy" // you can reassing values using let
// let myname =" Gaurav" // this is not allowed with let

newVariable = 100 ; // variables can be declared like this as well but this is not recommended


console.log(accountNumber);
// console.table allows us to print the variable names in the tabular format directly
console.table([accountNumber,name,myname,newVariable]);

// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)

// => Never use var in your code instead of let because of block and functional scope issues.