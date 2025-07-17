const randomNumber = Math.floor(Math.random() * 100) + 1

let attempts = 0;

const guessInput = document.getElementById('guessInput');
const checkButton = document.getElementById('checkButton');
const message = document.getElementById('Message');
const attemptsDisplay = document.getElementById('attempts');

checkButton.addEventListener('click',() => {
    userGuess =  Number(guessInput.value); // string se number mein convert kiya
    attempts++;

    if(userGuess < 1 || userGuess > 100)
    {

    message.innerText = 'Plz Enter a valid number between 1 and 10';
    }
    else if(userGuess < randomNumber)
    {
    message.innerText = 'Number is too low'
    }  
    else if(userGuess > randomNumber)
    {
        message.innerText = 'Number is too high'
    }    

    else {
        message.innerText = `You guessed it in ${attempts} attempts`;
        checkButton.disabled = true; // disable krdo jese hi user guess match jojaye random number ke sath
    }

    attemptsDisplay.innerText = `${attempts} attempts`;
    guessInput.value = ''; // clear the input text field at the end
   
})

