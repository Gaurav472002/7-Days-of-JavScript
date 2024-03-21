
const user={
    userName: "Gaurav",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to the website`) // this denotes the current context, 
        //context here denotes the values present in the object at the current moment
        // to print the current context
        console.log(this) ;
    }
}
user.welcomeMessage()
user.userName="Ram"
console.log(this) // outside the object this will be empty {}
user.welcomeMessage()
// the current context now will be an empty object {} when we are inside the node environment
console.log(this) ; 

// but the thing to note is when we do the same inside the browser we get the window{} object because previously 
//js was only executed inside the browser where the global object is the winodw object which consists of methods like click, events etc.


function chai(){
    let userName ="gaurav";
    console.log(this);  // when this is printed inside a function we get a lot of values
    console.log(this.userName); // but we can't use  this inside the functions this only works for the objects // we will get undefined for this
}
chai()

// another way to declare functions using the arrow functions

const coffee = ()=>{
    let userName ="Sagar"
    console.log(this.userName) ;// still this will be undefined no matter the function is normal or arrow
    console.log(this) // inside the arrow function this will be empty object
}
coffee()




// arrow function syntax


// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }

// Implicit return arrow function no  return statement required by default the compiler understands we want to return the required result
// return statement will be required if we are using {} 
const addTwo = (num1,num2)=>num1+num2;

// const addTwo = (num1,num2)=>(num1+num2) // this is also applicable this will be useful when we want to return an object

// without parentheses we will get undefined
// const addTwo = (num1)=>({name:"gaurav"})  

//[ return statement is only used when we use {} curly braces]

console.log(addTwo(100,123))

const addOne=(num)=>num+=1;
console.log(addOne(200))



/*In a regular function, the this keyword refers to the object from which you call the function. 
In an arrow function, the this keyword refers to the object from which you define the function. */



const person2 = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],
  
    showSkills: function() {
      this.skills.forEach(function (skill) {
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  person2.showSkills();

//   Here, the this keyword refers to the global Window object because we called the showSkills() method outside of the person object.
//In the global object, the name property is undefined. 


const person = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],
  
    showSkills: function() {
      this.skills.forEach((skill) => {
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  person.showSkills();

  /* Here, the this keyword refers to the object from which the arrow function is defined, which is the person object.

  This one behavior is what makes people prefer arrow functions, 
  because it makes more sense to have this refer to the object from which you define that function rather than from which you call it. */
  
  



