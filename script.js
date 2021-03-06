// Assignment code here


// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// Add event listener to generate button

// THEN I am presented with a series of prompts for password criteria

// my character variables 
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharactersValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:"];

//function writePassword() {
function generatePassword() {
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  //setting the length the user wants the password to be//
  length = parseInt(prompt("Please select the number of characters ( Min 8 - Max 128 ) you would like included"));

  if (length < 8) {
    alert("Passwords must be between 8 and 128 characters long");
    prompt("Please select the number of characters ( Min 8 - Max 128 ) you would like included");
  }

  if (length > 128) {
    alert("Passwords must be between 8 and 128 characters long");
    prompt("Please select the number of characters ( Min 8 - Max 128 ) you would like included");
  }

  else if (length >= 8 && length <= 128); {
  }

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  special = confirm("Include Special Characters (@#$%)?");
  lowerCase = confirm("Include Lowercase Characters (abcd...)?");
  upperCase = confirm("Include Uppercase Characters (ABCD...)?");
  numeric = confirm("Include Numeric Characters (1234)?");
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  var passwordBox = []

  if (special === true) {
    passwordBox = (passwordBox.concat(specialCharacters))
  }
  if (lowerCase === true) {
    passwordBox = (passwordBox.concat(lowerCaseCharacters))
  }
  if (upperCase === true) {
    passwordBox = (passwordBox.concat(upperCaseCharacters))
  }
  if (numeric = true) {
    passwordBox = (passwordBox.concat(numericCharactersValue))
  }
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
  var completedString = ""
for (i=0; i< length; i++) {
  var passwordMix = Math.floor(Math.random()*passwordBox.length)
  var randomMix = passwordBox[passwordMix]
  completedString += randomMix
  console.log(randomMix, passwordMix)
}
 // WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page 
  return completedString
}

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
