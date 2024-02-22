// we use control flow because we don't want to execute the whole code in one go we want to execute some part of the code based on some conditions

if(true){
    // code here will be executed
}

if(false){
    // the code here will not get executed
}

const isUserLoggedIn =true;

if(isUserLoggedIn){
    console.log("Login Successful")
}
else{
    console.log("Can't login")
}

// we use the following operators inside the if statement to check the conditions  < > <=  >= != !==  ===

if(2=="2"){
    console.log("oops")  // this will be printed because we are not doing strict checking
}

if(2==="2"){
    console.log("This will not be printed")  // bcz string != number
}

// implicit Scoping: writing the code in one line after the if statement and using ,(comma)
// to write multiple statements in the same  line which will be executed if the if statement is true  but this syntax is not recommended at all

const balance =1000;

if(balance>500)console.log("Rich"),console.log("poor");


// if else if ladder

if(balance < 500){
    console.log("No")
}
else if(balance <750){
    console.log("No")
}
else{
    console.log("Yes")
}

const val =101;

// yes will be printed multiple times if we use only if statement but if we use else-if then only single time the true condition is executed
if(val ==101){
    console.log("yes")
}
if(val>100){
    console.log("yes")
}


// multiple conditions check

const login =true;
const debitCard =true;
const fbLogin =false;
const glogin = true

// only gets executed when all the conditions are true

if(login && debitCard){
    console.log("Allowed")
}

//  gets executed when any of the conditions are true

if(fbLogin || glogin){
    console.log("allowed")
}