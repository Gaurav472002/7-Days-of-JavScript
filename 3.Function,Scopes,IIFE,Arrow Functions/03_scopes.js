
{
    // this region is called the scope where the variables or the functions are accessible
}

var c=300;
let a =300;

// this is called the block scope where the values are accesible only inside this scope
// and the values declared outside this scope is called the global scope values declared in the global scope is accessible everywhere
{
    let a =10;
    const b =20;
    var c =30;
    console.log("Inner c:",c)
    console.log("Inner a:",a)
}
// a will print the value 300 not 10 because we are in the global scope here 10 will not be printed because a of above is not accesible here
console.log(a); 

// b will not  be printed because b is not accesible here

// console.log(b);  

// c also  shouldn't have printed but it will be because variables declared using the var is global and it is an exception
console.log(c);  


/* the problem with the keyword var, is if someone else has also declared the var c with some another value he will expect 
it to print the required value but 30 will be printed 
Suppose you have created multiple functions where you are using the variable i in the for loops if you declare i using the var keyword
then the value of i in a loop will not be limited and it will be shared to other loops as well which will created problems for you. 
*/



// the global scope is different when we run our code on live browser and through node in our own pc

/*-----------------------------------------------*/

// SCOPE LEVELS



function one(){
    const userName ="Gaurav"

    function two(){
        const website ="google"
        console.log(userName);   // the userName is accessible here
    }
    // console.log(website); // this will give error because website is defined inside the second function and it is not accessible outside 

    two(); // calling the function
}

one()
// considering an analogy we can say that a child can access parent's properites but a parent can't access child properties
// the same happened here if one function is the parent and the two function is the child one can't access the variables of two function but 
//two can access one's property this property is called lexical scoping 

// the same principle is applied for  if else statements as well

if(true){
    const userName ="Gaurav"
    if(userName=="Gaurav"){
        const website ="google"
        console.log(userName+website)
    }
    // console.log(website); // this will generate error as this is out of the scope of the nested if statement
}
// console.log(userName) // this will also generate error as it is out of scope of if statement as well


/* ------------------Interesting-------------------------*/

// normal function

console.log(addOne(5)) // this will not generate error even if we are calling the function before declaring it

function addOne(num){
    return  num+1
}

// HOISTING 


// const addTwo = undefined

// this is called expression
addTwo(5) /* this will generate error  because we have declared the function using the variable so this is called hoisting which doesn't allows 
the access to the functions declared in this format before initialization */



const addTwo = function (num){
    return num+2;
}

addTwo(2)

// in js hoisting moves the variable to top and set them to undefined before they are initialized

// so if we declare the function using a variable it will be move to top and set as undefined and we will not be able to call them there
// variable hoisting doesn't works for let and const

// this will not generate error because var has global scope
x=45
console.log(x)
var x

// this will generate erro
z=45
console.log(z)
let z

/*The variable z is assigned the value 45. Then, it is logged to the console. However, when let z; is encountered, 
it's attempting to declare z again. This will result in an error because variables declared with let cannot be re-declared in the same scope.

The reason why this generates an error while the first code snippet does not is because let does not participate 
in variable hoisting the same way var does. With let, variables are not accessible before their declaration.
 In contrast, var variables are hoisted to the top of their containing function or global scope,
  which is why the first snippet doesn't produce an error. */


// wish();

// var wish=function(){
//     console.log("Hello User how are you")
// }

// functions defined using the var keyword are not hoisted as well
// Normal funtion declarations are hoisted at the top