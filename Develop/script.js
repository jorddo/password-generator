// when button is clicked window alerts will ask the user the following:

//declaring all letters and numbers available
const chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !"#$%&'()*+,-./:;<=>?@[\u005C]^_\u0060{|}~`;

// collect string length
const stringLength = prompt(
  'How long do you want your password to be? (8-128 chars)'
);

// do you want lower case?
const confirmLowerCase = window.confirm(
  'Would you like lower case letters in your password?'
);

// do you want uppercase?
const confirmUpperCase = window.confirm(
  'Would you like upper case letters in your password?'
);

// do you want numbers in your password?
const confirmNumber = window.confirm(
  'Would you like numbers in your password?'
);

// do you want special characters in your password?
const confirmSpecialChar = window.confirm(
  'Would you like special characters in your password?'
);

// writing if statement to confirm or deny chocies on password specificity

// // Get references to the #generate element
// let generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
