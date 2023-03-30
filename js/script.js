"use strict"

// EXERCISE 1 : PALINDROME WORD


// get the #type-word element in html

const typeWord = document.getElementById("type-word");

// get the #check-word element in html

const checkWord = document.getElementById("check-word");

// create a function that can verify wether a word is a palindrome or not
function truePalindrome(word) {

    // create a word matching the entered word but reversed
    const invertedWord = String(word).toLowerCase().trim().split("").reverse().join("");

    // if the reversed word is identical to the one entered ...
    if(word.toLowerCase() == invertedWord)

    // ... then the entered word is a true palindrome
    return true

    // otherwise it is not
    else return false

}

// ADD EVENT LISTENER

checkWord.addEventListener("click", function() {

    // create a boolean variable by using the word entered ...
    // ... as a parameter of the function truePalindrome
    const verify = truePalindrome( typeWord.value );

    // the result will be different depending on whether ...
    // ... the entered word is a palindrome or not
    
    if (verify === true) {

        result.innerHTML = `La parola ${typeWord.value} è un vero palindromo 😍`;

    } else {

        result.innerHTML = `La parola inserita non è un palindromo 😭`;
    }
})


// EXERCISE 2 : ODD OR EVEN GAME


// get the select element in html

const chooseOddEven = document.getElementById("choose-odd-even");

// get the input element in html

const launch = document.getElementById("launch");

// get the #result-odd-even element inhtml

const resultOddEven = document.getElementById("result-odd-even");

// get the #play element in html

const play = document.getElementById("play");

// a function can create a random number between two digits

function randomNumberMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// a function will add the number chosen by the user...
// ... to the random number excerpt for the game

function sum (num1, num2) {
    return num1 + num2;
}

// a function will tell if the sum of the two numbers is even

function isEven(num) {
    if(num % 2 === 0) {

        return true

    } else {

        return false

    }
}

// ADD EVENT LISTENER

play.addEventListener("click", function() {

    // get the #result element in html

    const result = document.getElementById("result-odd-even");

    // get the user's choice between even and odd

    const oddEvenChoice = chooseOddEven.value;

    // get the number 1 to 5 chosen by the user

    const chosenNumber = launch.value;

    // create a random number 1 to 5 for computer's launch

    const computerRandomNumber = randomNumberMinMax(1, 5);

    // get the sum of user's number and random number

    const total = sum(chosenNumber, computerRandomNumber);

    // the user will win the challenge if ...

    if ( ( (oddEvenChoice == 'even') && (isEven(total) == true) ) || ( (oddEvenChoice == 'odd') && (isEven(total) == false) ) ) {

        // ... and the result will appear in the html

        result.innerHTML = `Hai vinto la sfida !`

        // otherwise the winner will be the computer ...

    }   else {

        // and also in this case the result will be shown in the html
        
        result.innerHTML = `Siamo spiacenti, ha vinto la CPU`
    }

})
