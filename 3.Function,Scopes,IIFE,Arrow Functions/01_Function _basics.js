// function is a block of code that does a specific job


// function definition
function printName(){
    console.log("G")
    console.log("A")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("V")
}
printName //this is the reference to the function
printName() // function call

function addTwo(num1,num2){
    // console.log(num1+num2)
    return num1+ num2
}
console.log(addTwo()) // this will print NaN as no arguments are passed
addTwo(1,2)
let result = addTwo(3,5)
let r1= addTwo(3,"3") // output will be 33  as both of them will be converted to string
let r2= addTwo("3",3) // output will be 33  as both of them will be converted to string
console.log(result) 
console.log(r1)
console.log(r2)

function loginUserMessage(userName="sagar"){ // providing a default value if no argument is passed this will be printed
    // if(!userName) // same as below line
    if(userName===undefined){
        console.log("please enter a name")
        return
    }
    return `${userName} just logged in !!`
}


console.log(loginUserMessage("Gaurav"))
console.log(loginUserMessage("")) // this will be also treated as an argument and the default argument of the function will not be used
console.log(loginUserMessage()) // if we dont pass anything to the function and default argument is not defined then it will be undefined