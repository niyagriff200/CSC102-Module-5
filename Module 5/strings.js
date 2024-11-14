// Variables for Assignment 3.2
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var wrongCombination = document.getElementById("wrongCombination");
var correctCombination = document.getElementById("correctCombination");
var submitButton = document.getElementById("validate");

//It is check instead of validate in here because that is the name of my function.
submitButton.onclick = check;

// Variables for Assignment 3.1
var palcheck = document.getElementById("palindromecheck");
var answer = document.getElementById("answer");

// User Validation
function check() {
    var usernames = ["Shaniya Griffin", "Jill Coddington"];
    var passwords = ["student1221", "uat2024"];
    var username = usernameInput.value;
    var password = passwordInput.value;

    if ((username === usernames[0] && password === passwords[0]) || (username === usernames[1] && password === passwords[1])) {
        correctCombination.textContent = "Access granted! Here is the secret: 42";
        wrongCombination.textContent = "";
    } else {
        wrongCombination.textContent = "Wrong combination. Please try again.";
        correctCombination.textContent = "";
    }
}

// Palindrome true or false?
function isPalindrome() {
    var str = palcheck.value;
    var cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    var reversedStr = cleanedStr.split('').reverse().join('');
    var result = cleanedStr === reversedStr;
    if (result) {
        answer.textContent = "It is a palindrome.";
    } else {
        answer.textContent = "It is not a palindrome.";
    }
}