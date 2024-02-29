function setUserName(userName){
    this.userName=userName
    console.log("called") // ye function to call hoga lekin username is function k andar set hoga naki niche wale function k andar
}

// call passes the current execution context to another function

// in the call stack at first the global execution context is loaded and then other functions are stacked up upon the global execution context
// so if a function is called inside another function then this should refer to which execution context?
// In such cases the this keyword refers to the global execution context
// Mera this leja usme value set karke deja 


function createUser(userName,email,password){

    // setUserName(userName) // so bascially this function is not getting called a reference of this function is passed only
    // we will have to explicitly call the function  using the call method
    // to hold the refernece we will use the call method

    setUserName(userName)  // this will not work without the call method

    setUserName.call(userName) // this will call the function but as soon as the execution context is removed from the stack all data of the
    // object is lost so to solve this issue we wil pass the this as a reference in the call method so that the 
    //function doesn't uses it's own execution context
    
    setUserName.call(this,userName)
    // [call passes the current execution context to another function]
    
    // isse is function ka execution context upar wale function k pass chala jayega and then username is function k execution context mei set hoga
    
    // this.userName=userName // this work has been outsourced to a different function

    this.email=email
    this.password =password
}

const chai = new createUser("chai","chai123@gmail.com","321")
console.log(chai); // email and password to set hogya lekin userName set nahi hua if call is not used
