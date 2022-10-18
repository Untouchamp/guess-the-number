'use strict';

const secretNumberGenerator = () => Math.trunc(Math.random() * 20) + 1;
const scoreUpdate = (messages) => {
    if (currentScore !== 0){
        displayMsg(messages[Math.floor(Math.random() * messages.length)]);
        currentScore--;
        scoreElem.textContent = currentScore;
    } else {
        bodyElem.style.backgroundColor = '#900202FF';
        displayMsg('🐱‍👤 Game over 🐱‍👤');
    }
}
const displayMsg = (message) => {
  document.querySelector('.message').textContent = message;
}

const scoreElem = document.querySelector('.score');
const numberElem = document.querySelector('.number');
const bodyElem = document.querySelector('body');
const guessInputElem = document.querySelector('.guess');

const messagesIfBelow = [
    `📉 Too low... 📉`,
    `📉 Maybe You should try higher than ${
        guessInputElem.value
    } 📉`,
    `📉 Too small number, do higher 📉`,
    `📉 Not so low, go higher 📉`,
];
const messagesIfAbove = [
    `📈 Too high now, let's try a little bit lower 📈`,
    `📈 Maybe we should try a little less than ${
        guessInputElem.value
    } 📈`,
    `📈 Too high... 📈`,
    `📈 Too much, try lower 📈`,
];

let currentScore = 20;
let secretNumber = secretNumberGenerator();
console.log(secretNumber);
// Default values of message and number elements
const defaultMsg = 'Start guessing...';
const defaultNumber = '?';
// const defaultMsg = document.querySelector('.message').textContent;
// const defaultNumber = numberElem.textContent;

// Whenever we click on "Check" btn we will run arrow func that will check if we guessed number or not
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(guessInputElem.value);

    if (!guess) {
        displayMsg('No number!');
    } else if (guess === secretNumber) {
        bodyElem.style.backgroundColor = '#60b347'
        displayMsg('🏆 Congratulations, You guessed it right! 🏆');
        numberElem.textContent = secretNumber;
        numberElem.style.width = '30rem';

        if (Number(document.querySelector('.highscore').textContent) < currentScore) {
            document.querySelector('.highscore').textContent = currentScore;
        }
    } else if (guess > secretNumber) {
        scoreUpdate(messagesIfAbove)
    } else if (guess < secretNumber) {
        scoreUpdate(messagesIfBelow)
    }
});

// Whenever we click on "Again" btn we will run arrow func that will return default statement of bg color,
// symbol '?' in the number box, create new secret number
document.querySelector('.btn.again').addEventListener('click', () => {
    bodyElem.style.backgroundColor = '#222'
    displayMsg(defaultMsg);
    secretNumber = secretNumberGenerator();
    console.log(secretNumber);
    currentScore = 20;
    scoreElem.textContent = currentScore;
    numberElem.textContent = defaultNumber;
    numberElem.style.width = '15rem';
    guessInputElem.value = '';
});



// 076
