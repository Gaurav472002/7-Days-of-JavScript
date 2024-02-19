const score = 400; // the number dataType is automatically detected
console.log(score);

const newScore = Number(500);  // this create an number object
console.log(newScore);

// we can convert the number to the string
console.log(score.toString().length)
console.log(score.toString())
console.log(typeof score )

// we can determine the suffix values also using the toFixed method we can remove the unwanted decimals and show only two digits after decimal

console.log(newScore.toFixed(2)); // 2 mean 2 digits will be printed after the decimal value like 500 will be printed as 500.00

const otherNumber = 123.899
console.log(otherNumber.toPrecision(3)) // this will make the number 123 as we want to precise 3 digits
console.log(otherNumber.toPrecision(4)) // this will make the number 123.9 the value provided to the toPrecision function matters a lot 

const  hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')) // using this method we can print the value using commas in a general format

// maximum and minimum values

const maxx = Number.MAX_VALUE
const minn = Number.MIN_VALUE
const anotherMaxx = Number.MAX_SAFE_INTEGER
const anotherMin = Number.MIN_SAFE_INTEGER
console.table([maxx,minn,anotherMaxx,anotherMin])


/* -------------------- MATHS-------------------------*/

console.log(Math)

console.log(Math.abs(-4))    //abs to get the actual value of the integer
console.log(Math.round(4.6)) // will print 5
console.log(Math.ceil(4.1))  // will print 5 ceil means upper
console.log(Math.floor(4.1)) // will print 4 floor takes lower values
console.log(Math.min(1,2,3,4)) // here max and min functions accepts multiple arguments as well
console.log(Math.max(4,2,1,3))

// the random function generates values between 0 and 1 to get the actual values we can multiply the result with the number 10 to shift 1 decimal places
// to avoid the 0 values we add 1 to it // to get the whole number we use the floor function
console.log(Math.floor(Math.random()*10)+1);  // to avoid the 0 values we add 1 beacuse in case of 0.1 we will get 0 due to floor function

console.log(Math.random()*10+1) // to remove the numbers after the decimal we have used the floor function above

// sometimes we will have to generate random numbers in a range then we can use the method below

const min =10;
const max =20;

console.log(Math.floor(Math.random()* (max-min+1))+min) // we need minimum 10 value so we add it to the result
// +1 because we also want to include the max number in the range as well excluding the zero
console.log(Math.random()) // rhis gives value between 0 and 1
console.log(Math.floor(Math.random()))
console.log(Math.floor(Math.random()* (max-min+1)))

//  if min =10 and max=20 then the value (Math.floor(Math.random()*(max-min +1)) )  => ensure that it will give value in the range [0,10] 
// ..You have said 1 is added to avoid 0 but basically 1 is added to increase the range upto (10) ..
// if we will not add 1 it will give value in the range [0,9]