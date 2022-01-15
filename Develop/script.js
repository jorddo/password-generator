// declaring all letters and numbers available
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChar = ` !"#$%&'()*+,-./:;<=>?@[\u005C]^_\u0060{|}~`;
// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// function to gather length and true/false answers
function alertPrompts() {
  //  collect string length
  const stringLength = prompt(
    'How long do you want your password to be? (8-128 chars)'
  );
  // restricting to 8-128 values
  if (stringLength < 8 || stringLength > 128) {
    alert('You must choose a value between 8-128.');
    alertPrompts();
  }
  //do you want lower case?
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

  return {
    stringLength,
    confirmLowerCase,
    confirmUpperCase,
    confirmNumber,
    confirmSpecialChar,
  };
}

function generatePassword(answers) {
  let charPool = '';
  let localPassword = '';

  if (answers.confirmLowerCase) {
    charPool += lowerCase;
  }
  if (answers.confirmUpperCase) {
    charPool += upperCase;
  }
  if (answers.confirmNumber) {
    charPool += numbers;
  }
  if (answers.confirmSpecialChar) {
    charPool += specialChar;
  }

  for (let i = 0; i < answers.stringLength; i++) {
    localPassword += charPool.charAt(
      Math.floor(Math.random() * charPool.length)
    );
  }

  return localPassword;
}

// Write password to the #password input
function writePassword() {
  const answers = alertPrompts();
  const password = generatePassword(answers);
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
