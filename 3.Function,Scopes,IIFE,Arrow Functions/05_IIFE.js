// Immediately Invoked Function Expressions  (IIFE)

/*writing iife we can immediately invoke the function as well as we can protect our function from the pollution of the global scope 
like from variables and functions of global scope  */

// for example sometimes we write some files in which a function is written to make a DB CONNECTION
// We want was soon as the application starts the db connection should be established in such scenarios IIFE can be effective


// this is a named iife
(function chai(){
    console.log('DB - CONNECTED')
})() ;  // making the function iife


// chai() // how we normally call a function

// to make an iife just wrap the function around the () and then attach another () to immediately invoke it

// two iifes will not work until this semicolon is provided at the end of first iife



// ()()=>{}() 

// this is an unnamed iffe written through the arrow function
(
    (name)=>{
        console.log(`Db is connected ${name}`)
    }
)("Gaurav") // we pass the argument here in iifes

