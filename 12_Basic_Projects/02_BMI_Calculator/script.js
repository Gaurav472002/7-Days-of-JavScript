const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{

    e.preventDefault(); // to prevent the default submit action of the form

    // get the height and weight from the inputs

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector("#results")
    const bmires = document.querySelector("#bmires")

    if(height ==='' || height <0 || isNaN(height)){
        results.innerHTML =`Please Enter a valid Height`
    }

    if(weight ==='' || weight <0 || isNaN(weight)){
        results.innerHTML =`Please Enter a valid Weight`
    }
    // if we have valid height and weight calculate the results
    
    else{
        let BMI = (weight/((height*height)/10000)).toFixed(2) // BMI FORMULA
        
        results.innerHTML = `<span>${BMI}</span>`; // display the result
        if(BMI< 18.6){
            bmires.innerHTML ="You are underWeight"
        }
        else if(BMI >=18.6 && BMI<24.9){
            bmires.innerHTML ="You have Normal Weight"    
        }
        else if(BMI >24.9){
            bmires.innerHTML ="You are OverWeight"
        }
    }

    

})