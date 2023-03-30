"use strict"
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