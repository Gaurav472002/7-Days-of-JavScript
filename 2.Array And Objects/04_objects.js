// const user = new Object()
const user ={} // both are objects but the above is singleton object and this is not
user.name ="Gaurav"
user.email ="abc@gmail.com"
user.age =18
console.log(user)

// we can get the keys and value of the object using the following methods the return type will be an array of values

console.log(Object.keys(user))
console.log(Object.values(user))
// to convert each key value pair to array use the following method
console.log("Array values->",Object.entries(user))

// to check if a property exists in a object or not

console.log(user.hasOwnProperty('name'))


// object inside an object
const user2={
    fullName:{ // nested object
        firstName:"Gaurav",
        lastName:" Chakraborty"
    },
    age:22
}

// we can use the ? to check if the fullName exists or not this is called optional chaining
console.log(user2.fullName?.firstName)

// merging two objects

 const obj1 ={a:1,b:2}
 const obj2 ={c:3,d:2}

//  const obj3 ={obj1,obj2} // this will not merge the objects but it will create an object of objects
//  console.log(obj3)
// in th assign method we should define an empty object as source and the rest are object
 // const obj3 = Object.assign({},obj1,obj2)  

// we can also merge objects using the spread operator which is mostly used 

const obj3 = {...obj1, ...obj2}
console.log("Merged object ->",obj3)

// array of objects
const arraydata =[
    {
        name:"Gaurav",
        age:20
    },

    {
        name:"Sagar",
        age:22
    },

    {
        name:"Rahul",
        age:21
    },
]
console.log(arraydata[0].name)
