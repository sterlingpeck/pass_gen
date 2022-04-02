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


function generatePassword() {
  let userInput = []
  const chars = window.prompt("How many characters would you like your password to be?");

  if (chars < 7 || chars > 129) {
    alert("Character length does not meet requirements. Must be greater than 8 characters and less than 128 characters. Try again"); 
    return;
    } 
  
  if (confirm("Would you like numbers included in your password?")) {
    userInput.push(numberChars);
  }

  if (confirm("Would you like uppercase characters included in your password?")) {
    userInput.push(upperCaseChars);
  }

  if (confirm("Would you like lowercase characters included in your password?")) {
    userInput.push(lowerCaseChars);
  }

  if (confirm("Would you like special characters included in your password?")) {
    userInput.push(specialChars);
  }
 
  userInput = userInput.join(",")
  console.log(userInput)

  let generatedPass = ""

  for (var i = 0; i < chars; i++) {
    const randomNumb = Math.floor(Math.random() * userInput.length);
    generatedPass = generatedPass + userInput[randomNumb];
  }

return generatedPass;

}








