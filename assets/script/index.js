

const alf = document.getElementById("alf");
const alphabet = alf.innerText;
const randomword = () => {
  const randomIndex = Math. round(Math. random() * alphabet.length-1);
  const randomLetter = alphabet[randomIndex];
  return randomLetter;
}

const string = randomword() + randomword() + randomword() + randomword()
console.log(string);







