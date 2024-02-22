// for in loop

const languages={
    cpp:"c++",
    js:"javascript",
    rb:"ruby",
    switft: "swift by apple"
 
 }
 
 // for of loops doesn't works for objects  that's why we use for in loops
 
 for (const key in languages) {
 //    console.log(key); // this will only print the keys
 
 //    console.log(languages[key])// this will print the corresponding values of the key
 
     console.log(`${key} -->  ${languages[key]}`) // this will print the key value pairs
 }
 
 // the for in loops is not only designed for the objects it works with other ds as well but differently
 
 let myArray =["cat","dog","elephant","Lion"]
 
 for (const key in myArray) {
    console.log(key); // this will print the indices of the array which are called keys
 
    console.log(myArray[key]); // this will print the values of the array
 }
 
 // arrays keys starts from 0 that's why objects were designed so that we can set the indices anyhow we want
 
 // the maps are not iterable by the for in loops
 
 
 // to iterate maps use the for of loop
 const map = new Map()
 map.set('In',"India")
 map.set('Fr',"France")
 map.set('Afr',"Africa")
 
 for (const key in map) {
     console.log(key); // nothing will be printed we will not get error here
 
 }
 
 
 