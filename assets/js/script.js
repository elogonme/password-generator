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
  var passwordLength = 0;
  // Promtpt how long password is needed
  // check is password not less than 8 characters and not more than 128 charachters
  do {

    passwordLength = prompt('How long would you like your password to be? (not less than 8, not more than 128'); 
    if (passwordLength < 8 ||passwordLength > 128) {
      alert('Password length should not be less than 8 or more than 128');
      
    }

  } while (!(passwordLength > 7 && passwordLength < 129));

  console.log('Password length: ', passwordLength);

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
