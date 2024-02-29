/*Yes, JavaScript does have classes. However, it's important to understand that JavaScript's class system is syntactic sugar over its 
prototype-based inheritance model. This means that while you can use the class keyword to define classes in JavaScript, 
under the hood, they are still based on prototypes.

The class syntax was introduced in ECMAScript 2015 (ES6) to provide a more familiar syntax for developers coming from class-based languages 
like Java or C++. Here's an example of how classes are defined in JavaScript: */




// object literal denotes literally an object nothing else object is the basic unit in js

// object is basically a collection of properties and methods

// Yes, JavaScript has introduced class syntax as part of ECMAScript 2015 (ES6). While [JavaScript is a prototype-based language],
//  the class syntax provides a more familiar and convenient way to define classes and create objects with a syntax similar to
//   other object-oriented programming languages.

// why use oop --> to avoid complex codes also known as messy or spaghetti code  

// this is a simple object
const user ={

    userName: "gaurav",
    loginCount :8,
    signedIn:true,

    getuseretails: function(){
        // console.log(`${username}`) // this will generate error because we haven't mentioned the execution context here
        //  about which  userName are we talking about
        console.log(`${this.userName}`) // this keyword is used to refer to the current context ki bhai is object  ka username batado
        console.log(this) // the current context will be printed here which is the current object user so here the current context is the whole object
    }
}

// suppose we create an array , the prototype of the array consists of the map and other methods as well. Suppose we crate another array
// So we have only one map function, how does this map function will know on which array it should operate?
// this problem is solved using the this keyword which represents the current context.
console.log(user.userName)
console.log(user["userName"]); // another way to get object properties
console.log(user.getuseretails()) 
console.log(this) // in the global context the current context will be empty object  {}

// but when we do the same in the browser then the current context stores the current [window object] which has a lot of properties

/* constructor ---> suppose we want to create another user named as user2 then we will have to copy paste the above code to
  avoid that repetitive task we will use constructors*/

//   example of construction function

// const date1 = new Date()
// const promise1 = new Promise()

// using this keyword to assign value to the function arguments

// The new keyword is used to create a new instance from the same object literal. We can create multiple instances  of the same object using new


// creating a constructor function

function User(userName,loginCount,signedIn){
    // userName=userName  this creates confusion

    // myUserName =userName ; // assigning value to my variable but  rather than this we will use the this keyword
    
    this.userName=userName
    this.loginCount=loginCount;
    this.signedIn=signedIn  // mere variable mei jo value function se arahi hai usko assign kardo
    
    // return this;    //--> this will return the whole object

    // this will work even without return because it happens implicitly

    // we can provide functions as well

    this.greeting =  function(){
        console.log("Good morning")
    }
}

// make new users using the constructor function

// const user1 = User("Gaurav",12,true)
// const user2 = User("Saurav",13,false) // this will overWrite the values of the user1 if we don't use the new key word.  
//TO resolve this we use the constructor function which provided a new instance eveytime using the new keyword



const user1 =new User("Gaurav",12,true)
const user2 = new User("Saurav",13,false)

// we can use it using the new keyword which will provide a new instance for each object and 
//new keyword is responsible for calling the constructor function
console.log(user1)
console.log(user2)
console.log(user1.constructor) //  constructor is a reference to itself

console.log(user1 instanceof User)

/* when we use the new keyword an empty object is created . In the next step Constructor function is called due to [new] keyword 
 which packs the arguments inside the object. In the third step the arguments are injected into the this keyword and then 
 we get access in the function. */