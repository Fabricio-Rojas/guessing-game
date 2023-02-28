'use strict';

// ---------------------- Declaring Document Elements ----------------------

const retryBtn = document.querySelector('#retry');
const guessCount = document.querySelector('.guess-count');
const numDisplay = document.querySelector('.numb');
const numInp = document.querySelector('#guess-inp');

// ---------------------------- Main Functions ----------------------------

// Numbers from zero to fifty
const validChars = /\b([0-9]|[1-4][0-9]|50)\b/;

// Validate function
function onlyNumbs(num) {
    if (num.length > 0 && validChars.test(num)) {
        return true;
    }
    return false;
};

// Rand Number Generator
let b;
function getRandNum() {
    b = Math.floor(Math.random() * 50)
};
getRandNum();

retryBtn.addEventListener('click', function() {
    retryBtn.style.display = "none";
    numDisplay.innerText = '';
    numInp.value = '';
    getRandNum();
});

numDisplay.addEventListener('click', function() {
    let a = numInp.value.trim();

    if (onlyNumbs(a)) {
        if (a == b) {
        numInp.value = 'You Got It!';
        numDisplay.innerText = b;
        retryBtn.style.display = "block";
        } else if (a <= b) {
            numInp.value = 'My number is bigger';
        } else if (a >= b) {
            numInp.value = 'My number is smaller!';
        }
    } else {
        numInp.value = 'Please enter numbers!'
    }
})
