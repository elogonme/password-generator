// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Assign generated password to be displayed in passwordText area
  passwordText.value = password;

}

function generatePassword() {
  // Promtpt how long password is needed
    // check is password not less than 8 characters and not more than 128 charachters
    // store password length
  // Prompt what type of charachters to include in generated password
    // Prompt if include uppercase
    // Prompt if include lowercase
    //Prompt if include numeric
    //Prompt if include special characters

  // Validate that at least one type of chatacters is selected

  // Generate password based on criterias

  // Return generated password
  return 'Password generated';
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
