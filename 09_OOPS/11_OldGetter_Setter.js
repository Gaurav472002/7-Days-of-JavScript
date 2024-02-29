// old syntax of getters and setters function based syntax



function User(email,pass){
    this._email=email;
    this._pass=pass;


    // first parameter this, then the property name and then an object  { }
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(val){
            this._email=val
        }
    })
    
    Object.defineProperty(this,'pass',{
        get:function(){
            return this._pass.toUpperCase()
        },
        set:function(val){
            this._pass=val
        }
    })



}


const chai = new User("abcd@gmail.com","chai")
console.log(chai.pass)