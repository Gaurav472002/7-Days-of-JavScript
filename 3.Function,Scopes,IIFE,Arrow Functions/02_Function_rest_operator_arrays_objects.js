// suppose you are a developer at flipkart and you are writing a function to calculate the prize of the cart items
// You don't know right ki how many items are going to come in the cart so you will have to manage it dynamically

function calculatePrice(price){
    return price;
}
console.log(calculatePrice(100))
// suppose this function keeps getting prices and it will have to return the total price every time

function calculatePrice2(price){
    return price;
}
// we will have to bundle this data together to find the total sum
console.log(calculatePrice2(100,200,300)) // this will also print 100 but we want 600


// this ... is called the rest operator in js this is also called spread operator but the usecases are different

function calculatePriceAllPrice(...price){
    return price;
}
console.log(calculatePriceAllPrice(100,200,300)); // this will return us an array [100,200,300] on which we can loop and calculate the price


function calculatePriceDifferently(price1,price2,...allPrices){
    return allPrices
}
console.log(calculatePriceDifferently(100,200,300,400,500));
// here [300,400,500 ] will be bundled in the array and returned and 100 will go to price 1 and 200 will go to price 2
// we might have to use the rest operator along with other values so we can follow this format


// calculating the total price of the cart using a for of loop on the array returned by the rest operator
function calculateTotalPrice(...price){
    let totalPrice=0;
    for(itemPrice of price){
        totalPrice+=itemPrice;
    }
    return totalPrice;
}

console.log(calculateTotalPrice(100,200,300,400,500));



// passing object to the function

const user ={
    name:"Gaurav",
    age:18
}

function handleObject(anyobject){
    console.log(`the user name is ${anyobject.name} and the age is ${anyobject.age}`)
}
handleObject(user)

// we can directly create the object in the function call as well
handleObject({
    name:"Ram",
    age:18
})

//  passing array to the function

const myArray =[100,200,300]

function printarray(ogarray){
    console.log(ogarray[0])
}

printarray(myArray)
// we can create the array and pass it directly in the function call as well
printarray([1,2,3])
