// *********************** LEXICAL SCOPING **********************************

function outer(){
    let KhandaniProperty = 100000
    // console.log(privateProperty2) // this is also not allowed outer function can't access the inner function properties

    function inner(){
        let privateProperty =100
        console.log("inner",KhandaniProperty) // but we can use the outer proprty inside the inner function
    }

    function inner2(){
        let privateProperty2 =50
        console.log("inner2",KhandaniProperty)
        // console.log("bhaiKiproperty",privateProperty) not allowed we can't use variable from another function

        // bhai bhai share nahi karte
    }

    inner()
    inner2()
}

// function ke andar agar function hai to andar wale function ko bahar wale function k properties ka access mil jayega

// console.log(KhandaniProperty) // we can't access the variable of a function outside it's scope this is obvious

// but a function defined inside another function can access the properties of the outer function this is called lexical scoping
// But if more than one functions are defined inside a function then they can't access each other properties

outer()