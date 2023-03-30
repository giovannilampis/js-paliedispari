"use strict"

// EXERCISE 1 : PALINDROME WORD

// get the #type-word element in html

const typeWord = document.getElementById("type-word");

// get the #check-word element in html

const checkWord = document.getElementById("check-word");

// get the #result element in html

const result = document.getElementById("result");

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

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// get the select element in html

const chooseOddEven = document.getElementById("choose-odd-even");

// get the input element in html

const launch = document.getElementById("launch");

// get the #result-odd-even element inhtml

const resultOddEven = document.getElementById("result-odd-even");

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const play = document.getElementById("play");





// Sommiamo i due numeri



// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)



// Dichiariamo chi ha vinto.