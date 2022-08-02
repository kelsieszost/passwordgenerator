const characterAmountRange = document.getElementById 
("characterAmountRange")
const characterAmountNumber = document.getElementById 
("characterAmountNumber")
const includeUppercaseElement = document.getElementById 
("includeUppercase")
const includeLowercaseElement = document.getElementById
("includeLowercase")
const includeNumericElement = document.getElementById
("includeNumeric")
const includeSpecialCharacterElement = document.getElementById
("includeSpecialCharacter")
characterAmountNumber .addEventListener ("input", syncCharacterAmount)
characterAmountRange .addEventListener ("input", syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountNumber.value = value
}

const form = document.getElementById(generator-form)

form.addEventListener("submit") {
 
}

const characterAmount = characterAmountNumber.value
const includeUppercase = includeUppercaseElement.checked
const includeLowercase = includeLowercaseElement.checked
const includeNumeric = includeNumericElement.checked
const includeSpecialCharacter = includeSpecialCharacter.checked

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumeric, includeSpecialCharacter);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
