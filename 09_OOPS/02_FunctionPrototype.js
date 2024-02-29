// If we declare an array  then it has a prototype, then that prototype also has an object level prototype and further we will get getters and setter

// Everything in js is an object or jake object se hi milti hai this behavior is called the protypal inheritance
// In JS everything at the top level is an object whether it is a function or an array or a string.


function multiplyby5(num){

    // this.num =num this will be stored in the prototype object 
    return num*5;
}

multiplyby5.power =100 // we are assigning values just like we do for objects
// so functions are also objects in javascript and we can assign properties to it just like we do for objects


console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)



function createUser(userName,score){
    this.userName =userName
    this.score =score
}

// as we know everything in js is an object so each object has prototype and 
// protoType consists of various methods and properties so [we can inject our own methods as well  to the object prototype]

createUser.prototype.increment = function(){

    // score++ ; ye nahi janta kis user ka score increment karna hai so we will use this to refer to the current user

    this.score++;  // [this =jis] jisne bhi is method ko call kia uska score badha do this means current context
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

// we can directly set the property without using the prototype keyword
// createUser.printMe= function(){

// }
// this will not work until we use the new keyword 

// const chai = createUser ("chai",25)

// when we assign the properties of the createUser to the object we will have to use the new key word to mention the additional properties we
// have added in the prototype

const chai = new createUser ("chai",25)
const coffee = new createUser ("coffee",250)

// we dont have to write like [coffee.prototype.printMe] we can directly write coffee.printMe() because there might be many nested prototypes

coffee.printMe() // this will not work until new keyword is used to declare the object


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value 
(object, array, function, etc.), the newly created object is returned.

*/

