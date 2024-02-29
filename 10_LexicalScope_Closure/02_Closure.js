/* ***************** CLOSURE ************************* */
// a closure gives you access to an outer function's scope 
// from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function makeFun(){
    const name ="Gaurav"
    function displayName(){
        console.log(name)

    }
    return displayName; // we are not calling the function like previous cases we are returning it's reference
    // the whole lexical scope of the innner function is retured 
    // if this happens then how will it get executed because as we return the function it's execution context will be gone

    // so when we do this not only displayName function is returned but it's whole [ lexical scope] is retured means 
    // the whole makeFun function will be returned that is the outer function will be returned

    // because the inner function needs variables of the outer function the lexical scope of the function is returned
    
    // so the whole memory is shared not only the execution context of the respective function which is returned

    // so as the whole lexical scope is shared even if the context of the inner function is gone from the memory
    // because of the access to lexical scope we had access to the name variable so that's why we were able to print it


    
}

const myFunc = makeFun()
myFunc()
