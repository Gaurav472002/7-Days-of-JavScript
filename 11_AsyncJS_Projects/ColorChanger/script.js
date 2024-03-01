const randomColor = function(){
    let color ='#';
    const hex ='0123456789ABCDEF';
    for(let i =0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]; // selecting a random value
    }
    return color
}
let intervalId=undefined;

function changeBackgroundColor(){
    document.body.style.backgroundColor= randomColor();
    console.log(randomColor())
}

const startChangingColor= function(){
    if(intervalId==null){ // this is not mandatory still this is used to maintain a clean  code
        intervalId= setInterval(changeBackgroundColor,1000);
    }
}

const stopChangingColor= function(){
    clearInterval(intervalId);
    intervalId=null; // this is done for dereferncing for mainataining a clean code
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);