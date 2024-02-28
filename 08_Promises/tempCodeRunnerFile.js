const promisefour = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error =1
        if(!error){
            resolve({username:"JavaScript",email:"jbcd@gmail.com"})
        }
        else{
            reject("Error JS went wrong")
        }
    },1000)
})
promisefour.then(()=>{  // then handles the case of resolves
    console.log("No error")
}).catch((err)=>{   // catch handles the case of rejections
    console.log(err)
})
.finally(()=>{
    console.log("I am executed no matter what")
})