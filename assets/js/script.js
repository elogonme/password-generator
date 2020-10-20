// Main Code
// Add event listener to generate button to execute password generator
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); // Call writePassword function on click of button

// Helper functons
// ----------------------------------------------
// Function writePassword calls generatePassword and writes password to the #password textarea
function writePassword() {

  // Getting values of input fields for password length and type
  var passwordLength = document.getElementById('password-length').value;
  var isUppercaseChecked = document.getElementById('uppercase').checked;
  var isLowercaseChecked = document.getElementById('lowercase').checked;
  var isNumbersChecked = document.getElementById('numbers').checked;
  var isSpecialChecked = document.getElementById('special').checked;
  var password = ''; // Define varaible to store password

  // Check if entered password length is more than 8 and less than 128 and display error message
  if ((passwordLength < 8) || (passwordLength > 128)) {
    document.getElementById('error1').style.display = 'block'; // set error message display ON
    passwordLength = 0;
  } else document.getElementById('error1').style.display = 'none'; // set error message display OFF

  // variable to check if at least one of character types is selected
  var formValidity = (isUppercaseChecked || isLowercaseChecked || isNumbersChecked || isSpecialChecked);

  // Check if at least one type of characters is selected and display error message
  if (!formValidity) {
    document.getElementById('error2').style.display = 'block'; // set error message display ON
  } else document.getElementById('error2').style.display = 'none'; // set error message display OFF

  // Call generatePassword function with selected criterias and assign to password variable
  password = generatePassword(passwordLength, isUppercaseChecked, isLowercaseChecked, isNumbersChecked, isSpecialChecked);
  
  var passwordText = document.querySelector("#password"); // select textarea in html to write password

  // Assign generated password to be displayed in password Textarea
  passwordText.value = password;
};

function generatePassword(passwordLength, uppercase, lowercase, numeric, special) {
  
  // Character sets to choose from
  var lowercaseCharSet = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericCharSet = '0123456789'
  var specialCharSet = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~' + "'";
  
  var password = '';
  var charsetToUse ='';

  // Check what type of charachters to include in generated password
  
    // Check if include uppercase
    if (uppercase) {
      charsetToUse = uppercaseCharSet; // Include uppercase to choose from
    };

    // Check if include lowercase
    if (lowercase) {
      charsetToUse += lowercaseCharSet; // Include lowercase to choose from
    };
    
    //Check if include numeric
    if (numeric) {
      charsetToUse += numericCharSet; // Include lowercase to choose from
    };

    //Check if include special characters
    if (special) {
      charsetToUse += specialCharSet; // Include lowercase to choose from
    };

  // Generate password based on criterias
  // Loop to repeat to generate each character in password
  for (var i = 1; i <= passwordLength; i++) {
    positon = Math.floor(Math.random() * (charsetToUse.length)); // Generate random position from 0 to length of password - 1
    password += charsetToUse.charAt(positon); // pick chatacter at position from charSet and add it to password string
  };

  // Return generated password
  return password;
};
