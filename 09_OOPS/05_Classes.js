// // ES6 JS
// // the moment a new object is initialized from the class constructor is invoked

class User {
    constructor(userName,email,password){
        this.userName=userName;
        this.email=email;
        this.password=password;
    }
    encryptPass(){
        return  `${this.password}abc`
    }

    capitalizeName(){
        return `${this.userName.toUpperCase()}`
    }
}

const chai = new User("Gaurav","Abcd@gmail.com","123")
console.log(chai.encryptPass())
console.log(chai.capitalizeName())

// Behind the scenes of the above task if we didn't got the Class syntax 
// Behind the scene everything works on the concept of the protoType

function User(userName,email,password){
    this.userName=userName;
    this.email=email;
    this.password=password;
};

User.prototype.encryptPass = function(){
    return  `${this.password}abc`;
};

User.prototype.capitalizeName=function(){
    return `${this.userName.toUpperCase()}`;
};

const tea = new User("Sagar","Abcd@gmail.com","123")
console.log(tea.encryptPass())
console.log(tea.capitalizeName())