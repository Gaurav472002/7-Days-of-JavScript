// various operations 

let val =2;
let negval = -val // this will be simply converted to negative value
console.log(negval) 

// basic operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%3);

// some confusing operations
const a ="1"+2
console.log(a) // the output will be 12
console.log(typeof a) // type will be string


console.log("1"+2)  // this will be 12 because it will be converted to string

console.log(1+"2") // this will be 12 as well because it will be converted to string

//if a string is at first then all the data types will be converted to string
console.log("1"+2+2) // you will think this will be 14 because 2+2=4 and then 1 will be added to it but no this will be 122 string as well

//if a string is at last then first perform the numeric operation and then convert the num to string and add to string

console.log(1+2+"2") // this will not be 122 but this will be 32 1+2 =3 and then it will be concatenated to 2

console.log(1+(2+"2")) // this will be 122 

// these all conversion details are mentioned in the  Ecmascript website tc39.es


// however this type of code is not recommended at all use ( ) for clarity

console.log(true) // this will be true
console.log(+true) // this will be 1 // if we add operator like + it is converted to a numeric value

console.log(+"") // this will be 0 if we only print "" then false will be printed

let num1,num2,num3
num1=num2=num3=2+2 // 4 will be assigned to all variables
console.table([num1,num2,num3])

let counter=100;
let counter2 =counter++; // 100 will be assigned then it will be incremented post incement
++counter; // preincrement
console.log(counter)
console.log(counter2)