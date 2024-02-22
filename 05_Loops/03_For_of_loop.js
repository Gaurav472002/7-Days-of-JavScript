 // for of loops

 const arr =[1,2,3,4,5]

//  here object is referred as the elements of the array we are referring to  not object specifically

//  for (const iterator of object) {
    
//  }

 for (const val of arr) {
    console.log(val)
 }


 const name =" Gaurav is my name";
 for (const i of name) {  // each character will be printed
//     console.log(i);
 }

 /* maps  in js -> stores data in key value pairs and no duplicate entries are allowed also they are maintained 
 in the order in which they were entered */

 const map = new Map()
 // set is used to enter the values
 map.set('In',"India")
 map.set('Fr',"France")
 map.set('Afr',"Africa")

 console.log("Here is the Map -->",map)

 // applying for off loop in maps

 console.log("****************")
 for (const key of map) {
      console.log(key); // this syntax will print the key and value of the maps together
 }

 // inorder to print the key and value separately we can destructure the map

 for (const [key,val] of map) {
      console.log(key, ":->",val);
 }


 const obj1 ={

      'game1':"NFS",
      'game2':"Vice City"
 }

   // we can't iterate the object using the same syntax of for off loop that we used in case of maps
   // therefore for off loop doesn't work for  objects as they are not iterable
   // we will get error the object is not iterable
   

 for (const val of obj1) {
      console.log(val)
 }

 