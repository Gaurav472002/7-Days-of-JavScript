// HOW TO JOIN 2 ARRAYS

const marvel =["IronMan","Thor","Captain_America"]
const DC =["Batman","Superman","Flash"]

// marvel.push(DC) // this will push the whole DC array into the Marvel array not the elements  and the second array will be treated as separate element
console.log(marvel)
// console.log(marvel[3][1]) // to access the element of array present inside another array

// we can join two arrays using the concat method

const multiVerse = marvel.concat(DC); 
console.log(multiVerse)

// the best way to join two arrays is using the spread operator

const all_heroes = [...marvel, ...DC]; // merging two arrays using the spread operator example glass broken into pieces spreaded 
console.log(all_heroes)

const mixed = [1,2,3,[4,5,6],[7,9,10,[123,4556]]]

// To  extract single values from a mix of values we use the array flat method which returns an array

const separated = mixed.flat(Infinity); /* this would create an array with all the single 
elements from the mixed array and the argument we provide is called depth we can provide values like 1,2 but IF we provide infinity 
 then everything will be simplified into single values */
console.log("Separated Values ->",separated)

console.log(Array.isArray("Gaurav")) // method to check if array or not
console.log(Array.from("Gaurav")) // convert any data type to array
// this will return an empty array
console.log(Array.from({name:"Gaurav"}))// we will have to specify if we want to form the array from key or values of the object or 
//else empty object will be returned 

// crete array from keys
console.log(Object.keys({name: "Gaurav"}));
// Output: ["name"]

// create array from values
console.log(Object.values({name: "Gaurav"}));
// Output: ["Gaurav"]

// this returns an array of keys and values
console.log(Object.entries({name: "Gaurav"}))


let score1=100
let score2=200
let score3 =300


// form an array from the individual values

console.log(Array.of(score1,score2,score3));


// shallow copy of array values as reference is stored 

const a =[1,2,3]
const b=a
b[0]=100
console.log(b)
console.log(a)