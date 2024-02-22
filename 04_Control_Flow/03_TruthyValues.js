
// const Email ="abc@gmail.com" // so this is the truthy value it will be assumed as true {if anything is written inside string then true}
// const Email ="" // so this is the falsy value it will be assumed as false 

const Email =[] //  ***  in this case the empty array will be assumed true   special case empty  array is true *** 

if(Email){  // here no comparison is done like if Email== here just we have assumed that if the array is not empty it is true
    console.log("Got the Email")
}
else{
    console.log("Didn't get the Email")
}


// Falsy values -->  False, 0 , -0, BigInt-> 0n, "", null, undefined, NaN

// Truthy values --> [],  "0", 'false', " " space in the string, {} empty object,   function(){} empty function 

// to check array is empty
const name =" " // EMPTY SPACE  in string is considered TRUE

if(name)console.log("true");

if(Email.length ===0){
    console.log("Array is empty")
}

const emptyObj ={}

if(Object.keys(emptyObj).length===0){
    console.log("Empty");
}

// Nullish Coalescing Operator (??): works on null and undefined

// this checks if the first value is valid if not then assign the second value to the variable

let val1;
val1 =5 ?? 10
console.log(5) // first value assigned

let val2;
val2 =null ??10 ; //now 10 will be assigned to deal with null values
val2 =undefined ??10 ; //now 10 will be assigned to deal with undefined values
console.log(val2)

val2 = null ??20 ??30 // the first valid value will be assigned
console.log(val2)


// Ternary operator used to evaluate condition in a single line

// condition ? true: false 

const price =100;

price >=80 ?console.log(">80"):console.log("<80")