// Primitive DataTypes

// 8Types :   String, Number, Boolean, null, undefined, Symbol,  BigInt, Object


const id= Symbol('123')
const id2 = Symbol('123')

console.log(id==id2); // symbol is used to make the values unique so even if the values are same this will be false

// to use bigInt add n in the End

const bigNumber = 3333333333334444444444444111111111113333333n
console.log(typeof bigNumber)

// JS is a dynamically typed language in which we don't need to mention the type of the variable

// Reference Type also known as Non Primitive Type dataTypes

// Arrays, Objects, Functions

// return type of all referenece dataTypes will be object
// the return type of function is function but it is actually Object function

let temperature =null;
const  heros = ["IronMan", "Batman", "captainAmerica"];

let myObj={
    name: "Gaurav",
    age: 22
}

let  myFunc=function(){
    console.log("Hello There")
}
console.log(typeof myFunc) // the type of function is function
console.log(typeof heros) // type of array is object
console.log(typeof myObj ) // type of object is object
console.log(typeof temperature); //the type of  null will be object

// all the non primitive dataTypes have the return type of objects


/* -------------------------- MEMORY MANAGEMENT IN JS --------------------------------*/

/* Stack memory is used by all of the (Primitive DataTypes) and Heap memory is used by all of the (Non Primitve Datatypes)

In Stack memory ----> we get a copy of variables
In Heap Memory we get reference to the values if we change values the changes will be reflected in original places.
 */


let oldName ="Gaurav";
let newName =oldName
console.log(newName)
newName ="Sagar"
console.log(oldName)
console.log(newName)

// so when the newName is assigned to the oldName a copy of oldName is given to the newName so as a result when change is made in  
//the newName , oldName remains same because changes we made in the copy not in  the original variable


let user1 ={
    email: "abc@gmail.com",
    upiId : " user123@ybl"
}

let user2 =user1
console.log(user2)
user2.email="def@gmail.com" // as for the non primitive data types the reference is given the changes in user2 
//will be reflected in user1 as both of them refers to the same object
console.log(user1)