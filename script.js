var numeric = ["1,", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "I", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var characterLength = 8;
var possibleCharacters = []; //put this in global
var password = ""; //put this in global 






function askMe() {
  possibleCharacters;
  characterLength = parseInt(prompt("how many characters would you like in your password (1-128)?"))
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {  //if this is false
    alert("oops! Try again!")
    return false;
  } if (confirm("would you like lowercase letters?")) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    console.log(true); //to check if its working
  }
  if (confirm("would you like uppercase letters?")) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    console.log(true); //to check if its working
  }
  if (confirm("would you like numbers?")) {
    possibleCharacters = possibleCharacters.concat(numeric);
    console.log(true); //to check if its working
  }
  return true;
}


var generateBtn = document.querySelector("#generate"); //this variable targets the generate id in html
// below will be the function used to turn our array we concacted into a password based off of the answer to the prompt.
function generatePassword() {
   password;
  for (i = 0; i < characterLength; i++) {
    var characterResponse = Math.floor(Math.random() * possibleCharacters.length);
    password = password + possibleCharacters[characterResponse];
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var correctResponse = askMe();
  var passwordText = document.querySelector("#password");

  if (correctResponse) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
