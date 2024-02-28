// The promise object represents the eventual completion or failure of an asynchronous operation and it's resulatant value.
// The task will be assigned in the queue promising that it will be exectued but not immediately
// do async tasks like DB calls , cryptography, network call which are not executed immediately but will be executed sometime in future.


// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


// Promises were introduced in the ES6 update of js before that JS libraries like Q and bluebird were used to do async operations.

// Most of the times we consume promises let's learn how to create promises

// Promises accepts a callback which has 2 parameters resolve or reject 
//ya to promise fulfill  hoga nahi to nahi hoga 
//hoga to resolve nahi hoga to reject

const promiseOne = new Promise(function(resolve,reject){
    
    // do any type of async tasks 


    setTimeout(function(){
        console.log("Async task 1 is complete")

        resolve() // now promise 1 will be printed after async task 1 is completed
        // this signals that the async task was completed
    },1000)
})

// consumption of promise 

// then() is directly connected with the resolve 

promiseOne.then( function(){  // the function  automatically recieves the argument from the task that is completed from the above promise
    console.log("Promise 1 consumed")  // if we run the file without mentioning resolve in the above promise then
    //  this will be not printed to do this we will have to connect .then() and .resolve ()
})



// execution of promise without storing it inside a variable

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2  is complete")
        resolve() // now promise 2 will be printed after asynce task 2 is completed
    },1000)
}).then( function(){  // directly associate then here
    console.log("Promise 2 consumed") // direclty connecting it with that
})



// passing data through resolve // data consumption via promise

const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
        // passing an object
        // suppose we recieved a data from the server and we want to pass the data
        resolve({username:"Gaurav",email:"abcd@gmail.com"})
    },1000)
})

promiseThree.then(function(user){  // here the object will be returned from the resolve
    console.log(user)
})



// Now let's learn how reject works

// use of . then()  and . catch()

const promisefour = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error =1
        if(!error){
            resolve({username:"JavaScript",email:"jbcd@gmail.com"})
        }
        else{
            reject("Error JS went wrong")
        }
    },1000)
})
promisefour.then(()=>{  // then handles the case of resolves
    console.log("No error")
}).catch((err)=>{   // catch handles the case of rejections
    console.log(err)
})
.finally(()=>{
    console.log("I am executed no matter what")
})


// Chaining of events

const promisefive  = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error =false
        if(!error){
            resolve({username:"Gaurav",email:"abcd@gmail.com"})
        }
        else{
            reject("Error something went wrong")
        }
    },1000)
})



// const userName = 
promisefive.then((user)=>{
    
    // trying to extract only the userName from the object we  can't store it directly in a variable we will use chaining to get hold of username

    return user.username ; // will this userName go to the variable of the promise ? No this will not work and throw error to reolve this we will do chaining

}).then((userName)=>{  // this is chaining where we will recive the value returned by the previous promise here we get the username from the object
    console.log(userName)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{  // finally will be executed no matter what the condition is
    console.log("I am executed no matter error or not")
})




// async and await  --> its always not necessary to deal with promises through .then() and .catch()
// we can also deal with promises through async & await

// async await waits for a certain task to occur if it doesn't occurs then it will generate error immediately

const promiseSix = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error =false   // if this is set to true then the below function will not work 
        if(!error){
            resolve({username:"JavaScript",email:"jbcd@gmail.com"})
        }
        else{
            reject("Error JS went wrong")
        }
    },1000)
})

// syntax of async and await

async function consumepromiseSix(){
    const response = await promiseSix  // here we assumed that no matter what whenever the error is resolved we will get the value in response
    // which might not be true in some cases.
    console.log(response)
}
consumepromiseSix() // this will not print the required result because the error is set to true but if no error is there then it will work fine
// the problem with async await is that it doesn't handles errors properly

// so to reolve this we will handle it using the try and catch block

async function consumepromiseSix(){
    try {
        
        const response = await promiseSix
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumepromiseSix()

// fetch data from API's
// ********* If we run the whole file then the fetch operation will be executed first and then other operations will be executed ******

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()  // convert to json and return 
})
.then((data)=>{   // this is not called chainable but this is called thennable
    console.log(data);
})
.catch((error)=> console.log(error))


// doing the same thing with async and await

async function getAllusers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json()  // this would not work without  await before this 
        //because converting to json format also takes some time
        console.log(data);
    }  
    catch(err){
        console.log(err)
    }
}

getAllusers()


/* Story of fetch
fetch was introduced in feb 2022 to the node js
When fetch was not introduced then XMLHttprequests were used but fetch was introduced in browsers in 2015
It was a challenge to include fetch in Node js because fetch was dependent on various browser based API's which were only available in browsers
but not in node js.  Then the Node js team wrote their own API implementations to include fetch in Node js.

Fetch basically starts a process for fetching a resource from the network returning a promise which is fulfilled once the response is available.
The fetch operations are executed on a priority basis because it uses a different high priorty queue called micro task queue.  
This queue has a higher priority than the normal task queue  */