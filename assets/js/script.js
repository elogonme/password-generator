// Main Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Helper functons
// ----------------------------------------------
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
  // check if password not less than 8 characters and not more than 128 charachters
  do {
    passwordLength = prompt('How long would you like your password to be? (not less than 8, not more than 128'); 
    if (passwordLength < 8 ||passwordLength > 128) {
      alert('Password length should not be less than 8 or more than 128');
    }
  } while (!(passwordLength > 7 && passwordLength < 129));
  
  // Character sets to choose from
  var lowercaseCharSet = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericCharSet = '0123456789'
  var specialCharSet = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~' + "'";
  
  var uppercase, lowercase, numeric, special; // varaibles to set choice
  var password = '';
  var charsetToUse ='';

  // Prompt what type of charachters to include in generated password
  // Validate that at least one type of chatacters is selected
  while (!(uppercase || lowercase || numeric || special)) {
    // Prompt if include uppercase
    uppercase = confirm('Would you like to include Uppercase characters in your password?');
    if (uppercase) {
      charsetToUse = uppercaseCharSet; // Include uppercase to choose from
    }

    // Prompt if include lowercase
    lowercase = confirm('Would you like to include Lowercase characters in your password?');
    if (lowercase) {
      charsetToUse += lowercaseCharSet; // Include lowercase to choose from
    }
    
    //Prompt if include numeric
    numeric = confirm('Would you like to include Numeric characters in your password?');
    if (numeric) {
      charsetToUse += numericCharSet; // Include lowercase to choose from
    }

    //Prompt if include special characters
    special = confirm('Would you like to include Special characters in your password?');
    if (special) {
      charsetToUse += specialCharSet; // Include lowercase to choose from
    }

    // Warn if none of the types of characters is selected
    if (!(uppercase || lowercase || numeric || special)) {
      alert('At least one type of character should be selected!');
      charsetToUse = ''; // clear charsetToUse to start over
    }
  }
  
  // Generate password based on criterias
  // Loop to repeat to generate each character in password
  for (var i = 1; i <= passwordLength; i++) {
    positon = Math.floor(Math.random() * (charsetToUse.length)); // Generate position from 0 to length of password - 1
    password += charsetToUse.charAt(positon); // pick chatacter from charSet and add it to password string
  }
  
  console.log(password + '   Password length: ' + password.length); // For testing to confirm password

  // Return generated password
  return password;
}


