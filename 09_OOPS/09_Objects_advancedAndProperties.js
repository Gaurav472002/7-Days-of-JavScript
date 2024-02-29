// why we can't change the value of pi in js ??

console.log(Math.PI)
Math.PI=10
console.log(Math.PI)
                                                    //Object  and prooperty

const descripter =  Object.getOwnPropertyDescriptor(Math,"PI")  // this method shows the properties of an object  

console.log(descripter  ) // writeable ,  enumerable and configurable are set to false so we can't overwrite  the values of MATH.pi
// writable means we can't edit the value of this value

// lets try on our own objects

const chai = {
    name: "ginger-chai",
    price:80,
    isAvailabe:true,

    orderChai : function(){
        console.log("OBJECT KA FUNCTION")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name")) // here all the values will be true by default they are changeable

// modifying the editable values of the object

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false // this will stop the iteration  means we cant apply loops on the object 
})

Object.defineProperties() // define multiple properties

// value will not be changed but we will also not get errors

chai.name="adrak"
console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// WE WILL BE ABLE TO ITERATE EVERYTHING EXCEPT THE NAME PROPERTY

// the value of name will not be printed as it is made not enumerable

for(let[key,val] of Object.entries(chai)){
    if(typeof val !== 'function'){
        console.log(`${key} --> ${val}`)
    }
}