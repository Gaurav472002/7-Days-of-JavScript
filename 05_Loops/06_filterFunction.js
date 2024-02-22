// does for each loop return something ???
// no it doesn't
const coding =["coding","programming"," Web Dev", "Android dev"]

const values = coding.forEach(function (item){
    
    return item;
})
console.log(values) // the value will be undefined because for each loop kuch return nahi karta

// so what if we want to do something with  each of the values of the for each loop like return them in some cases
// filter returns the array with filtered values


const number =[1,2,3,5,10,12,15,18]

const results = number.filter(function(num){
    return num>5;
})
console.log("Here is the result---->",results);

// applying filter using the arrow functions

// const vals = number.filter((num)=>num>5) // filter will return the values that satisfies the condition provided in the callblack function
// console.log(vals)

// this will not work without return statement because if we start the scope using {} then we will have to use return statement
const vals = number.filter((num)=>{
    return num> 5
})
console.log(vals)

// do the same task using the forEach  loop

const newNums=[]

number.forEach((num)=>{
    if(num>5){
        newNums.push(num)
    }
})

console.log(newNums)


// applying filter methods with multiple conditions

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBook = books.filter((bk)=> bk.genre==="History")
  console.log(userBook)

  userBook = books.filter((bk)=>{
    return bk.publish >=1995 && bk.genre==="Science"
  })
  console.log(userBook)