// destructuring of objects

const user ={
    name:"Gaurav",
    age: 18
}
console.log(user.name);
// everytime when we want to access the data of the object we will have to use the . notation or [] 
//instead of that we can destructure the object

const{name}=user
// now we can dirctly access the name property of the object
console.log(name)
const{name:daknam}= user  // using alias for the destrcuturing
console.log(daknam)

// all the API data are in the JSON format

// {
//     name;"Gaurav",
//     age;18
// }

// sometime JSON is also present in the array of objects  format as well 
// [
//     {},
//     {},
//     {}
// ]