// STATIC PROPERTIES

// code mei kam hone se zyada kam ko rokna zyada important hota hai sab cheezo ka access mat do sabhi ko :)

class User{
    constructor(userName){
        this.userName=userName
    }

    logMe(){
        console.log(` username is ${this.userName}`)
    }

    // if we don't want to provide the access of this function to everyone then we wil use the keyword static
    // we don't want to provide access of this function to the objects which are instantiated from this class
    
    static createId(){
        return  `123`
    }
}


class Teacher extends User{

    constructor(userName,email){
        super(userName)
        this.email=email
    }
}


const user = new User("Gaurav")

console.log(user.createId()) // we can't access this method here this will give error

const teacher1 = new Teacher("RD_Sharma","123@gmail.com")
teacher1.logMe()
teacher1.createId() // even the inherited class will not be able to access this method
createId()