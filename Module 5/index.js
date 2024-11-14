// Variables for login form
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var loginError = document.getElementById("loginError");
var inputForm = document.getElementById("inputForm");
var submitButton = document.getElementById("validate");

// The submit button stopped working after I added the id so I added this to help.
//Oddly enough it was still working on strings, but I went ahead and changed it in there to0.
submitButton.onclick = validate;

// User Validation
function validate() {
    var usernames = ["Shaniya Griffin", "Jill Coddington"];
    var passwords = ["student1221", "uat2024"];
    var username = usernameInput.value;
    var password = passwordInput.value;

    if ((username === usernames[0] && password === passwords[0]) || (username === usernames[1] && password === passwords[1])) {
        loginError.textContent = "";
        inputForm.style.display = "none"; // Hide the form
        location.replace("strings.html"); // Redirect to strings.html
    } else {
        loginError.textContent = "Invalid username or password. Please try again.";
    }
}

function newTab() {
    window.open("boards.html");
}