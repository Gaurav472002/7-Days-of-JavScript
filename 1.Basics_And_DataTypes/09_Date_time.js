// console.log(Temporal.Now.instant) // ongoing future work to fetch the current time

// JS has set its own timeStamp that is  01 January 1970 all the times are calculated from that time

// create date object
let myDate = new Date()
console.log(myDate); // this will be in unorganized manner to convert it into organized format convert it into string

// different formats to represent the date
console.table([myDate.toString(),myDate.toISOString(),myDate.toUTCString(),myDate.toLocaleDateString()])

console.log("The type of date is ->",typeof myDate) ;// date is of type object

// create your own date

let tempDate = new Date(2023,0,23); 
console.log(tempDate.toLocaleString());

let specificDate = new Date("04-07-2002 11:00:22"); //  we can create date in our own specific format of date and time and make it customized
console.log("The specific date is ",specificDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(` myTimeStamp is ${myTimeStamp}`);

console.log(tempDate.getTime());

// convert to  seconds from milisecond

console.log(Math.floor(Date.now()/1000));

// another methods to extract useful info from the date

const newDate = new Date();

console.log(newDate.getFullYear())
console.log(newDate.getDay()) // day starts from 0 that is sunday and goes till saturday that is 6
console.log(newDate.getMonth()+1) // because month starts from 0 to 11

// we can customize the date we need through the toLocaleString method

newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:"" 
})

const mynewDate = new Date();
console.log(mynewDate.toLocaleString())
console.log(mynewDate.toLocaleTimeString())
console.log(mynewDate.toJSON())
console.log(mynewDate.toISOString())
console.log(mynewDate.toLocaleDateString())