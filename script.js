'use strict';

// Selecting and Manipulating Elements of HTML

// defining secret number
// Math.trunc removes decimal point
// Math.random generated random numbers between 0 and 1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


//Handling Click Buttons
 document.querySelector('.check').addEventListener('click', function() {
     const guess = Number (document.querySelector('.guess').value);
     console.log(guess);

     // possible conditions

     // when there is no input
     if (!guess) {
         displayMessage('No number');

         // when player wins
     } else if (guess === secretNumber) {
        displayMessage("Correct Number!");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if (score > highScore) {
            highScore = score;
        }
        document.querySelector('.highscore').textContent = highScore;
        

       
     } else if (guess !== secretNumber) {   

        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low'); 
            sco
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
        
     }

    
 });


 // reset game
 document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
    




