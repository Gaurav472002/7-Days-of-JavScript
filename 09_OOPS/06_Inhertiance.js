class User{

    constructor(userName){
        this.userName=userName
    }

    logMe(){
        console.log(`UserName is ${this.userName}`)
    }
}

// In a LMS system everyone is an user but have different roles
// Like a user can be a teacher, or a user can be a student and so on

class Teacher extends User{

    constructor(userName,email,pass){

        super(userName)  // automatically call the parent class constructor instead of call we can use this
        this.email=email
        this.pass=pass
    }

    addCourse(){
        console.log(`A new course was added by ${this.userName}`)
    }
}

// without new keyword this will give error

const newTeacher = new Teacher("Hc_verma","abc@gmail.com","1234")
newTeacher.addCourse()

const oldUser = new User("oldUser")
// oldUser.addCourse() // parent class can't access child class methods

oldUser.logMe()  // but the child class can access the methods of the parent class

console.log(newTeacher===Teacher)
console.log(newTeacher instanceof Teacher) // this will be true
console.log(newTeacher instanceof User)