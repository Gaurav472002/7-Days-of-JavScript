
// The default behavior of js is protypal behavior

// Prototype kabhi har nahi manti agar use koi value nahi mil rahi then it will go one layer upper or more to find the value until it reaches null.
// The use of this, new and inheritance in js is provided via the [this] keyword.

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, 
// so the prototype will have its own prototype,making what's called a prototype chain. 
// The chain ends when we reach a prototype that has null for its own prototype.

// When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. 
// If the property still can't be found, then the prototype's prototype is searched, 
// and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.


let myName = "Gaurav    "
console.log(myName.length)

// we want to design a function which whenever encounters a string trims the spaces and calculate the actual length

console.log(myName.trim().length) // we can also do this using this method

// we are going to inject our own method trueLength into the string so that we can directly use it to  calculate the length without spaces


let anotherName ="Sagar   "


// our own method  truelength for the string 

String.prototype.trueLength = function(){

    console.log(this)
    console.log(`True length of the string is ${this.trim().length}`)
}
anotherName.trueLength()

//directly calling the method via the strings
"Gaurav ".trueLength()
"   ".trueLength()

// if the truelength was already created then we can do like String.prototype.truelength=truelength 



let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// If we assign a property inside the prototype of the object then the property will be accessible by arrays ,string  , functions
// becuase everyting gets resolved to object in js finally
// this will allow all the data structures like array, strings or objects to use this function

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

heroPower.hitesh();
let arr=[1,2,3]
arr.hitesh();

// using the object method with string as well
s ="hello"
s.hitesh()

// this will allows only array to use the function heyHitesh
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

const abc=[4,5,6]
abc.heyHitesh()

// Prototypal  inheritance

// in earlier time we didn't had any classes so we used to create objects and then assign properties to them


const user={
    name:"Gaurav"
}

const Teacher ={
    makeVideo : true
}

const TeachingSupport ={

    isAvailable :false

}

const TAsupport ={
    makeAssignment :"js-assignment",
    fullTime:true,
    __proto__:TeachingSupport  // this will inherit and allow TAsupport to access the properties of TeachingSUpport
    // the prototype of this object will refer to the properties of the mentioned object
}
console.log(TAsupport.isAvailable)


// instead of index we mentioned the prototypal inheritance outside. The properties of the object user
// will be copied in the protoype of the Teacher 

Teacher.__proto__ = user // to inherit the property of the object now Teacher can also use the property of the user
// this is bascially known as the prototypal inheritance

// the __proto__ is an outDated object currently we use  setPrototypeof method

// Modern Syntax

// Teachingsupport can access the properties of the Teacher now
Object.setPrototypeOf(TeachingSupport,Teacher) // behind the scene __proto__ hi chalta hai 



// ** If you define any property directly inside the object using Object.prototype then it will be accessible by 
// all the ds like array string etc
