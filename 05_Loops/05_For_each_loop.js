// for each loop

const coding =["coding","programming"," Web Dev", "Android dev"]

// FOR EACH ONLY WORKS FOR THE ARRAY ELEMENTS

// for each array ka function hai
// for each kya leta hai ek call back function
// call back function ka nam nahi hota ,uska kam hai wo passed argument jo ki array ka item hai uska utha ke le ayega 
// jab  le ayega to ap jo marzi kijiye us item k sath kya farak padhta hai 🙂

// basic syntax of forEach loop

// coding.forEach(function(item){
//     console.log(item)
// })

coding.forEach(function (item){
        console.log(item)
})

// using the arrow function syntax
coding.forEach( (item)=>{
    console.log(item)    
})

// first declare the function to pass to the forEach function
function printItem(item){
    console.log(item)
}

coding.forEach(printItem) // just pass the reference of the function don't call the function here

// item k sath sath array ka index aur pura array bhi available hota hai

// along with the items of the array we can get hold of the items, index and as well as the whole array
coding.forEach((item,index,arr)=>{
    console.log("Printing all the required infos of the array")
    console.log(item,index,arr);
})


// array of objects

const arrayObjects=[

    {
            a:1,
            b:2
    },
    {
            a:3,
            b:4
    },
    {       
            a:5,
            b:6 
    }
]

arrayObjects.forEach((item)=>{
    // console.log(item)  // this will print the whole objects present inside the array
    // console.log(item.a) ; // we can direclty print the properties of the arrays using this format
    // console.log(item.b)
})
