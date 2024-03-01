// Apporach to solve this problem 
// First look at the html file and then get hold of all the variables using DOM

// Determine the functions that will be required to implement the code
// Like validateguess, startgame, endgame, display messgae, check guess and so
// Now start writin the logic




// Variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
const submit = document.querySelector("#subt"); // submit button
const userInput = document.querySelector("#guessField"); // user input
const guessSlot = document.querySelector(".guesses"); // previous guesses
const remaining = document.querySelector(".lastResult"); // remaining guess
const lowOrHi = document.querySelector(".lowOrHi"); // guess lower or higher
const startOver = document.querySelector(".resultParas"); // result element
const p = document.createElement('p');
let prevGuess = []; // to show users their previous guesses
let numGuess = 1;  // number of guesses of the user
let playGame = true;  // variable to play or stop the game

// Event listener for submitting a guess
if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

// Function to check a valid guess
function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}





function checkGuess(guess){
    if(guess ===randomNumber){
        displayMessage(`You Won, You have Guessed the right number`)
        endGame()
    }
    else if(guess< randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is too high`)
    }

}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+= `${guess}, `;
   
    remaining.innerHTML = `${10-numGuess}`
    numGuess++;
}

function displayMessage(message){
    lowOrHi.innerHTML =` <h2> ${message}</h2>`
}

function newGame(){

    const newGameButton=document.querySelector("#newGame")
    newGameButton.addEventListener('click',function(e){


        
        randomNumber=Math.round(Math.random()*100+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        userInput.removeAttribute('disabled')
        remaining.innerHTML = `${11-numGuess}`
        startOver.removeChild(p)
        playGame =true;

    });
}

function endGame(){

    userInput.value =''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML= `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame();
}
