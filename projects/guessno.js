let randomNo=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guesslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrhigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');
let prevGuess=[];
let numGuess=1;

//v imp
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}

//to check whether value is between 1 and 100 not
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Pls Enter a valid number');
    }
    else if(guess<1){
        alert('Pls Enter a valid number greater than 1');
    }
    else if(guess>100){
        alert('Pls Enter a valid number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game over,Random number was ${randomNo}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

//if guess correct
function checkGuess(guess){
if(guess === randomNo){
    displayMessage('You have guessed correct');
    endGame();
}
else if(guess<randomNo){
    displayMessage('Number is too low');
}
else{
    displayMessage('Number is too large');
}
}

//arrays ko update krega or count ko
function displayGuess(guess){
userInput.value='';
guesslot.innerHTML += `${guess},  `;
numGuess++;
remaining.innerHTML=`${11-numGuess}`;
}

//low or high
function displayMessage(message){
lowOrhigh.innerHTML=`<h2>${message}</h2>`;
}

function newGame(){
const newGameButton=document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
     randomNo=parseInt(Math.random()*100+1);
  prevGuess=[];
  numGuess=1;
  guesslot.innerHTML='';
  remaining.innerHTML=`${11-numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame=true;
});
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');

    //adds the class 'button' to the classList of the element p.
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`;
startOver.appendChild(p);
playGame=false;
newGame();
}