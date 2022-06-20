const dataLowercase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0987654321";
const dataSymbol = "&é'(-è_çà)=+°$£µ*ù%§!/:.;?,\"";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

const generatePAssword = () => {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumber);
  if (symbols.checked) data.push(...dataSymbol);

  if (data.length === 0) {
    alert("veuillez séléctionné des critères ");
    return;
  }

  for (let i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "copié";

  setTimeout(() => {
    generateButton.textContent = "le mot de passe est généré est copié";
  }, 1000);
};

generateButton.addEventListener("click", generatePAssword);
