let score ="33abc"; 
console.log(typeof score); // the output will be string
// score = null; // if a variable is defined as null then it's type is object

console.log(typeof (score));

let valueInNumber = Number(score); // converting the string to number
console.log(typeof (valueInNumber)); // if we print out the type it will be printed as number

// conversion will be done but the string will be converted to NaN
console.log(score);
console.log(valueInNumber); // this value will be  NaN not a number  which represents this is not a valid number

// "33" is easily converted to number 33
// "33abc" will be converted to NAN and the type of NaN will be number  NaN is known as Not a number

// let isLoggedIn = 1

let isLoggedIn ="" // this will be converted to false value and if something is written  or if there is a space
// between the empty string it will be true
console.log(isLoggedIn)

let booleanIsLoggedIn =  Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// ""--> false  "ssfds"--> true

let someNumber = 44;

let stringNumber = String(someNumber);
console.log(typeof stringNumber)


let a = "123abc"
console.log(typeof a)