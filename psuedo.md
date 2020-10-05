alert you need a new password "click to help generate new password"
prompt for password requirements
selector for password requirements
prompt with password criteria


// - pseudocode for hw3
// 1. using a series of confirm prompts, ask if the user wants to include uppercase letters, lowercase letters, numbers, and/or special characters in the random password
// 2. use a prompt to ask how many digits(the length) the user wants the password to be
// 3. create the combined list of allowed characters, eg. if user only wants lowercase letters and numbers, you will be generating random password with "abcde...xyz0123456789" these characters
// 4. using a *hint hint for loop, running for a number of iterations(depending on the users password length choice), each loop will choose a random char from the allowed char string. Refer to in class activity for choosing random element from an array or random char from string with Math.random() function
// 5. save the random char from each iteration by adding them to an output variable. You can eventually use the value of that variable and set it as the textContent on the DOM element you want to display the created password in