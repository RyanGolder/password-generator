// Assignment Code
// Selectors
var generateBtn = document.querySelector("#generate");

// Arrays of all characters
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '`', '|', '}', '{', '[', ']', ':', ';', '<', '>', '?', ',', '.', '/', '-', '='];


function generatePassword() {
  var possiblePassword = [];
  var password = [];
  var passwordLength = parseInt(prompt("Choose the length of your password (between 8 and 128 characters)."));

  // If user presses cancel the function will end
  if (isNaN(passwordLength)) {
    alert("Entry provided is not a number");
    return null;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password character length not within range of 8 to 128");
    return null;
  }

  var hasLower = confirm("Would you like lower case within your password?");
  var hasUpper = confirm("Would you like upper case within your password?");
  var hasNumber = confirm("Would you like numbers within your password?");
  var hasSpecial = confirm("Would you like special characters within your password?");

  if (hasLower === false && hasUpper === false && hasNumber === false && hasSpecial === false) {
    alert("At least one password criteria must be selected.");
    return null;
  }

  if (hasLower === true) {
    for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * lowercase.length);
    var randomChar = lowercase[index];
    possiblePassword.push(randomChar);
    }
  }

  if (hasUpper === true) {
    for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * uppercase.length);
    var randomChar = uppercase[index];
    possiblePassword.push(randomChar);
    }
  }

  if (hasNumber === true) {
    for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * number.length);
    var randomChar = number[index];
    possiblePassword.push(randomChar);
    }
  }

  if (hasSpecial === true) {
    for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * special.length);
    var randomChar = special[index];
    possiblePassword.push(randomChar);
    }
  }

  possiblePassword.sort(function() {
    return Math.random() - 0.5;
  });
  
  while (password.length < passwordLength) {
    password.push(possiblePassword.shift());
  }

return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function generatePassword() {
//   // Define possible characters to include in the password
//   const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
//   const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const numberChars = '0123456789';
//   const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

//   // Prompt the user to specify the length of the password
//   let passwordLength = parseInt(prompt('How many characters should the password contain? (between 8 and 128)'));

//   // Validate user input and prompt again if necessary
//   while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
//     passwordLength = parseInt(prompt('Invalid input. Please enter a number between 8 and 128.'));
//   }

//   // Define a variable to store the generated password
//   let password = '';

//   // Loop over the password length and randomly select characters from each character set
//   for (let i = 0; i < passwordLength; i++) {
//     let randomCharSet = Math.floor(Math.random() * 4);
//     let randomChar = '';

//     switch (randomCharSet) {
//       case 0:
//         randomChar = lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
//         break;
//       case 1:
//         randomChar = uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
//         break;
//       case 2:
//         randomChar = numberChars.charAt(Math.floor(Math.random() * numberChars.length));
//         break;
//       case 3:
//         randomChar = specialChars.charAt(Math.floor(Math.random() * specialChars.length));
//         break;
//     }

//     password += randomChar;
//   }

//   // Return the generated password
//   return password;
// }
