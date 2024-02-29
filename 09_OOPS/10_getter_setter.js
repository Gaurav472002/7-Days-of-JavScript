class User{
    constructor(email,pass){
        this.email =email
        this.pass=pass
    }

   // why we need getter methods , suppose you don't want't everyone to access
//    the data of your class or you want to return specific data based on specific users
//    in such cases getter method is effective.

// ***** if you define getter you must define setter or else you will get error

    // ******************** THIS WIL GENERATE CALL STACK ERROR***********************************

    // getters and setters are defined inside the class with their property name
    // constructor and getter will race to set the values which will result in stack overflwo
    
    // get pass(){
    //     // return this._pass.toUpperCase()
    //     return `${this.pass}`  // we have the power to store one value and return modified value as per our needs
    // }
    // set pass(val){
    //     this.pass =val.toUpperCase()
    // }

    // by changing the variable name inside the getter and setter the value of password is overwritten

     

    // when we want to provide customized access to the properties of our object we use getters and setters

    // to define a getter simply use the get keyword and then define the property name

    get pass(){
        // return this._pass.toUpperCase()
        return `${this._pass}gaurav`  // we have the power to store one value and return modified value as per our needs with the helo of gaurav
    }
    set pass(val){
        this._pass =val.toUpperCase()
    }

    // this will generate a full call stack error because we are using both constructor and setter to set the value of password
    // both the setter and the constructor will get involved in a race condition to set the value resulting in the error

    // so to fix this we will rename the variable name  inside the getter and setter to avoid the error SO THAT WHY 
    //WE HAVE USED _ INSIDE THE GETTER AND SETTER
    // Due to race condition this error is generated
    
}



const gaurav = new User("abcd@gmail.com","abcd")
console.log(gaurav.email)
console.log(gaurav.pass) // using the get method to get the modified value

// The constructor is responsible for setting the initial values when an object is created.
// The setter is used indirectly through the constructor or directly when you set the pass property later.
