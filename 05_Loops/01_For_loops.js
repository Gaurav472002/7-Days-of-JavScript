/* the control flow first initialize the variable
 then check for condition 
 then execute the statement and then index is incremented */


 let result =""
 for (let index = 0; index <=10; index++) {
     // const element = array[index];
     // console.log(index);
     result+=index+" " // to print in one line
     
 
 }
 console.log(result)
 
 // printing array values using the for loops
 let array =[1,2,3,4,5]
 for (let index = 0; index < array.length; index++) {
     const element = array[index];
     console.log(element);
     
 }
 
 // nested loops
 
 // printing all the tables
 for (let i = 1; i <=10; i++) {
     console.log(`table for  :${i}`)
     for (let j = 1; j <=10; j++) {
         // console.log(`inner loop ${j}for outer loop ${i}`)
         console.log(` ${i} * ${j} = ${i*j}`)
     }
     
 }
 
 let myArray = ["Flash","Loki","SuperMan"]
 for (let index = 0; index < myArray.length; index++) {  // if we dont do ++ then it will stuck in an infinite loop and print the first element only
     const element = myArray[index];
     console.log(element)
     
 }
 
 
 
 // break and continue keywords
 
 for (let index = 1; index <=20; index++) {
     if(index==5){
         console.log("Detected 5");
         break; // break is used to break the control flow of the current loop and go out of the loop immediately
     }
     console.log(index);
     
 }
 
 for (let index = 1; index <=20; index++) {
     if(index==5){
         console.log("Detected 5");
         continue; //   continue ------>  ignores/skips the iteration based on the condition {ek galti maaf}
     }
     console.log(index);
     
 }