// console.log(2>1); // true
// console.log(2>=1); // true
// console.log(2<1);   // false

// console.log("2">1); // this will be true
// console.log("02">1); // this will be true as well 

// whenever you compare 2 values make sure that the two value are of the same data type

// comparison of null values

console.log(null >0)  // false
console.log(null ==0) // false 
console.log(null >=0) /* this will be true because == and other comparison works differently >= converts 
null to a number that is 0 and as a result the result will be true */

// for undefined all the results will be false
console.log(undefined >0)
console.log(undefined==0)
console.log(undefined >=0)

// strict check using [===] operator  this checks "values" as well as the "dataType"

console.log("2"==2); // this will be true  checks only the values
console.log("2"===2); // this will be false // strict checking cheks data Type as well as the value

