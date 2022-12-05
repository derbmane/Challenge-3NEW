// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 // lowercase upper case numbers special characters
  const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*_+";
// pasword length
  let passwordLength = 8;

  let password = '';

  for (let i= 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random()
    * characters.length);

    password += characters.substring(randomNumber,
      randomNumber + 1);
      console.log(password);
  }
    document.getElementById('password').value = password;
  // 4 dispaly password
  return password;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
