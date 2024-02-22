// use of reduce methods
// The reduce method applies certain operation on array elements and returns a single value


const nums =[1,2,3,4,5]

const Total =  nums.reduce(function(acc,currval){

    console.log(`accumulator:${acc} and currval is ${currval}`)
    return  acc + currval ; // after each iteration the previous result is stored inside the accumulator
},0)  // we pass the intial value here for the reduce function // if we don't pass the initial value then accumulator will be the first element
// and the current val will be the second value

console.log(Total)

const myTotal = nums.reduce((acc,curr)=>acc+curr,0) // writing one liner function using arrow function to add up all the elements of the array
console.log(myTotal)


const shoppingCart=[
    {
        itemName:" Js-Course",
        price :999
    },

    {
        itemName:" DSA-Course",
        price :399
    },

    {
        itemName:" Web-Dev-Course",
        price :199
    },
]

const TotalPrice=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(TotalPrice)


// without intial value acc will be 175 and the currval will be 50 at first
const numbers = [175, 50, 25];

let result= numbers.reduce(myFunc);

// tha value of the accumulator at first will be the first value of the array and iteration will start from next element
function myFunc(total, num) {
    console.log(`"total is ${total} and num is ${num}`)
  return total - num;
}
console.log(result);