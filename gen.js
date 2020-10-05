alert ("You're password is expired. Please generate a new one using this handy tool. Click on the Generate Password button to start the process");

// prompt ("Would you like to include uppercase letters?")
// prompt ("Would you like to include lowercase letters?")
// prompt ("Would you like to include special characters?")
// prompt ("Would you like to include numbers?")
// prompt ("How long would you like password to be?")

var generateBtn = document.querySelector("#generate");
// vars for user input data
var passChars;
var specialCharConfirm;
var numbersConfirm;
var alphabetUpperConfirm;
var alphabetLowerConfirm;

// declaring the var choices outside of a function for concatenation
var choices;

// Arrays for password criteria (alphabet[will convert lowercase, uppercase later], numbers, special characters)
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ['!', '#', '$', '%', '&', '*', '+', '-', '/', ':', '<', '>', '=', '?', '@', '^', '_', '~', ' '];

// convert lowercase letters to uppercase. Eliminates the need to declare uppercase letters
var toUpperCase = function(str) {
  return str.toUpperCase();
};
var alphabetUpper = alphabet.map(toUpperCase);

// event listner for generate password button
generateBtn.addEventListener("click", function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
})

// prompts the user to answer if they would like to include indicated characters
function generatePassword() {
  passChars = parseInt(prompt("Your password can be between 8 and 128 character. How many would you like?"));
  if ((passChars > 128) || (passChars < 8) || (!passChars)) {
    alert("Invalid entry. Your password must be between 8 and 128 characters");
    passChars = parseInt(prompt("Your password can be between 8 and 128 character. How many would you like?"));
  } else {
    specialCharConfirm = confirm("A strong password includes special charaters, i.e. ! @ #, would you like to include special characters?");
    numbersConfirm = confirm("Would you like your password to contain numbers?");
    alphabetUpperConfirm = confirm("Would you like your password to contain uppercase?");
    alphabetLowerConfirm = confirm("Would you like your password to contain lowercase letters?");
  }

  // alerts user that they must confirm at least one of the prompts of characters choices
  if (!specialCharConfirm && !numbersConfirm && !alphabetUpperConfirm && !alphabetLowerConfirm) {
    choices = alert("You must choose at least one character category!");
  }

  // logic functions to complete user choices
  else if ((specialCharConfirm == true) && (numbersConfirm == true) && (alphabetUpperConfirm == true) && (alphabetLowerConfirm == true) ) {
    choices = alphabet.concat(numbers, specialChars, alphabetUpper);
  }
  else if ((specialCharConfirm == true) && (numbersConfirm == true) && (alphabetUpperConfirm == true)) {
    choices = specialChars.concat(numbers, alphabetUpperConfirm);
  }
  else if ((numbersConfirm == true) && (alphabetUpperConfirm == true) && (alphabetLowerConfirm == true)) {
    choices = numbers.concat(alphabetUpper, alphabet);
  }
  else if ((alphabetUpperConfirm == true) && (alphabetLowerConfirm == true) && (specialCharConfirm == true)) {
    choices = alphabetUpper.concat(alphabet, specialChars);
  }

  else if ((alphabetUpperConfirm == true) && (alphabetLowerConfirm == true)) {
    choices = alphabetUpper.concat(alphabet);
  }
  else if ((alphabetUpperConfirm == true) && (numbersConfirm == true)) {
    choices = alphabetUpper.concat(numbers);
  }
  else if ((alphabetUpperConfirm == true) && (specialCharConfirm == true)) {
    choices = alphabetUpper.concat(specialChars);
  }
  else if ((alphabetLowerConfirm == true) && (numbersConfirm == true)) {
    choices = alphabet.concat(numbers);
  }
  else if ((alphabetLowerConfirm == true) && (specialCharConfirm == true)) {
    choices = alphabet.concat(specialChars);
  }
  else if ((numbersConfirm == true) && (specialChars == true)) {
    choices = numbers.concat(specialChars);
  }
 
  else if (alphabetUpperConfirm == true) {
    choices = alphabetUpper;
  }
  else if (alphabetLowerConfirm == true) {
    choices = alphabet;
  }
  else if (numbersConfirm == true) {
    choices = numbers;
  }
  else if (specialCharConfirm == true) {
    choices = specialChars;
  };

  // Empty array generated for users new password
  passwordArr = [];

  for (i = 0; i < passChars; i++) {
    var userChoices = choices[Math.floor(Math.random() * choices.length)];
    passwordArr.push(userChoices);
  }

  var password = passwordArr.join("");
  return password;
}