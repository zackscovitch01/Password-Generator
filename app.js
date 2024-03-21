const eyeIcon = document.getElementById("eyeicon");
const lengthoOfpassword = document.getElementById("passwordLength");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const symbols = document.getElementById("symbols");
const digits = document.getElementById("digits");

let showPassword = document.getElementById("password");
let errorMessage = getElementById("errorHandling");

function generatePassword() {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "?!@#$%&*+)(-_=";

  let allowedChars = "";
  let password = "";
  let passwordLength = Number(lengthoOfpassword.value);

  allowedChars += lowercase.checked ? lowercaseChars : "";
  allowedChars += uppercase.checked ? uppercaseChars : "";
  allowedChars += digits.checked ? numberChars : "";
  allowedChars += symbols.checked ? symbolChars : "";

  console.log(passwordLength);

  if (passwordLength < 4) {
    errorMessage.innerText = "Password length must be at least 4";
    // return `(Password length must be at least 6)`;
  }
  if (allowedChars.length === 0) {
    return `(At least one set of characters needs to be selected)`;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  showPassword.value = password;
}

function hidePassword() {
  if (showPassword.type == "password") {
    showPassword.type = "text";
    eyeIcon.src = "./images/eye-open.png";
  } else {
    showPassword.type = "password";
    eyeIcon.src = "./images/eye-close.png";
  }
}
