// Assignment code here
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*()_+=-`;'][{}\|,./?><+*:";
var numberChars = "1234567890";
var charLength = 8;

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


function passCriteria() {
  userInput = [];

  userLengthInput = parseInt(prompt("How many characters would you like your password to be?"));

  if (userLengthInput > 7 && userLengthInput < 129) {
    generatedPassword = true

   else alert("Character length does not meet requirements. Must be greater than 8 characters and less than 128 characters. Try again");
  }
  
  if (confirm("Woud you like numbers included in your password?")) {
    userInput = userInput += (numberChars);
  }

  if (confirm("Woud you like uppercase characters included in your password?")) {
    userInput = userInput += (upperCaseChars);
  }

  if (confirm("Woud you like lowercase characters included in your password?")) {
    userInput = userInput += (lowerCaseChars);
  }

  if (confirm("Woud you like special characters included in your password?")) {
    userInput = userInput += (specialChars);
  }

  return true;

}









