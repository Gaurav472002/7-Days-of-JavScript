const User={
    _email:'abcd@gmail.com',
    _pass:"abcd123",

    get email(){
        return this._email.toUpperCase()
    },

    set email(val){
        this._email=val
    }

    
}

// we are using the factory function Object.create to create an object new is a constructor function


const tea = Object.create(User)  // create an object on this basis of which object 

console.log(tea.email) 

// we can access the property even without using _email because here email is not a property here 
// but will work without _ because _ is used to define the  property as private 
// we can access them using the getter or setter  because they access them directly
// so getter and setter overwrites the _email property as email 
// bascially the name of the getter or setter is treated as the property
// There is a new proposal to use # instead of _ for privateProperties

