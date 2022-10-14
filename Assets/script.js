var generateBtn = document.querySelector("#generate");
 var charNumber = ["0123456789"];
 var charUpper = [ "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
 var charLower = ["abcdefghijklmnopqrstuvwxyz"];
 var charSpecial = ["!#$%&'()*+,-./:;<=?@[^_`{]|}~"];
 var included =[];
let randomPassword= "";


function newPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", newPassword);

function generatePassword(){
  var chosenLength =prompt("Chose a length between 8 and 128 characters"); 

  if ((chosenLength <8) || (chosenLength>128)){
    alert("Chose a length between 8 and 128 characters");
    var chosenLength =prompt(" Choose a length between 8 and 128 characters");

  }else((chosenLength >= 8) && (chosenLength<= 128)) 
    console.log( "Length" + chosenLength);

  //include lower case letters
  var includeLower =confirm ( "Include lower case letters? Press OK for yes and Cancel for No");

  //include lower case characters
  if (includeLower){
    included += charLower;
    console.log(charLower);
  }

  //include upper case letters
  var includeUpper =confirm ("Include upper case letters? Press OK for yes and Cancel for No");

  //include upper chase characters 
  if (includeUpper){
    included += charUpper;
    console.log(charUpper);
  }

   //include numbers 
  var includeNumber =confirm ("Include numbers? Press OK for yes and Cancel for No");

  //include number characters. 
  if (includeNumber){
    included += charNumber;
    console.log(charNumber);
  }

  //include special characters 
  var includeSpecial =confirm ("Do you want to include special characters? Press OK for yes and Cancel for No");


  if (includeSpecial){
    included += charSpecial;
    console.log(charSpecial)
  }else if (!includeLower && !includeUpper && !includeNumber && !includeSpecial){
    alert("Please select parameters")
  }

  // generates random string of characters of the desired length.
  for (var i=0; i < chosenLength; i++) {
    
    randomPassword += included[Math.floor(Math.random()*included.length)];

  }
  //generates password on the screen.
  console.log(randomPassword)
  return randomPassword;
  
 

}
