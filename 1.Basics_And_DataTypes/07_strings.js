const name ="Gaurav"
const repoCount = 100

// basic string concatenation using + operator or ,

// console.log(name+repocount+" values " ) // but this is not a suitable method

// we can use STRING INTERPOLATION for better readibility using the backticks and $ to inject the values


console.log(`Hello my name is ${name} and my RepoCount is ${repoCount}`);

// another way to declare strings
// this method creates a key value pair of the string  character with its indexes

const newName = new String("Gaurav-Chakraborty") // this will create a string object  where keys are index and values are characters of the string

// const newName = String("Gaurav-Chakraborty")  // this creates a primitive string if we declare without new keyword

console.log(newName);
// string object where 0,1,2 are keys and  characters of the string are the values

console.log(newName[0]);
console.log(newName[1]);
console.log(newName[2]);
console.log(newName[3]);
console.log(newName[4]);
console.log(newName[5]);

console.log(newName.__proto__); // this will be {} here but it consists of hell lot of values which can be checked in the browser

// some useful methods of the string we have many methods under the protoType of string
console.log(newName.toUpperCase()); // this doesn't changes the original string whether it creates a copy of that string
console.log(newName.charAt(2))
console.log(newName.indexOf('t'))

// used to extract a specific part of the string  0 to  n-1
const slicedName = newName.substring(0,4);
console.log(slicedName)

const anotherSlice = newName.slice(-16,-12); // we can use negative indexes in slice method as well
console.log(anotherSlice);

// Trim and replace methods

const newString1 = "     Sagar     ";

console.log(newString1)
console.log(newString1.trim()) // trim method is used to remove extra spaces from the string

const url = "https://gaurav.com/gauravvvvvvchakraborty"
console.log(url.replace('gauravvvvvv','gaurav')); // replace method

console.log(url.includes('sagar'));

// we can split the whole string based on the required character which is known as seperator 
const splitName = "Gaurav-Chakraborty-Narula-Yo-Yo";
const splitArray=(splitName.split('-')); // this will return an array of  separated split strings
console.log(splitArray)
