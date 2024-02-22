
// map is used to apply a certain operation on each of the values of the array
// map accepts a function as input and apply that function on each elements in the array

/*The map() method of Array instances creates a new array populated with the results 
of calling a provided function on every element in the calling array. */

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr)

const mynumber=[1,2,3,4,5,6,7,8,9]

let newNums = mynumber.map((num)=>num+10)

console.log(newNums)


let result=[]

// same operation using the forEach loop

mynumber.forEach( (num)=>{
        result.push(num+10)
})

console.log(result)


// chaining of methods --- we can do as much chaining as we want


result = mynumber
.map((num)=>num*10) // multiply each num by 10
.map((num)=>num+1) // add 1 to it
.filter((num)=> num>=40) // filter those number which are greater or equal to 40

console.log(result)