// Assignment code here


// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// Add event listener to generate button

// THEN I am presented with a series of prompts for password criteria
window.alert("Password must be at least 8 characters and no more than 128 characters in length.  Please select from the prompts to create a new random password");

special = confirm("Include Special Characters (@#$%)?");
lowerCase = confirm("Include Lowercase Characters (abcd...)?");
upperCase = confirm("Include Uppercase Characters (ABCD...)?");
numeric = confirm("Include Numeric Characters (1234)?");
// prompts for user usage

// var lowerCase = confirm("Include Lowercase Characters (abcd...)?")
// var upperCase = confirm("Include Uppercase Characters (ABCD...)?")
// var numeric = confirm("Include Numeric Characters (1234)?")
// var special = confirm("Include Special Characters (@#$%)")

// my character variables 
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharactersValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:"];

function newPassword() {

//setting the length the user wants the password to be//
  length = parseInt(prompt("Please select the number of characters ( Min 8 - Max 128 ) you would like included "));

  if (length < 8) {
    alert("Passwords must be between 8 and 128 characters long");
    prompt("Please select the number of characters ( Min 8 - Max 128 ) you would like included");
}
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
special = confirm("Include Special Characters (@#$%)?");
lowerCase = confirm("Include Lowercase Characters (abcd...)?");
upperCase = confirm("Include Uppercase Characters (ABCD...)?");
numeric = confirm("Include Numeric Characters (1234)?");
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 character

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
