// Random de 0 à 9 = 10 posições
// 3 dígitos com 10 possibilidades totalizando 1000 possibilidades
// 10 * 10 * 10

const randomFirstDigit = () => {
  return Math.floor(Math.random() * 10);
};

const randomSecondDigit = () => {
  return Math.floor(Math.random() * 10);
};

const randomThirdDigit = () => {
  return Math.floor(Math.random() * 10);
};

const concatNumbers = (combination) => {
  return (combination = Number(
    `${randomFirstDigit()}${randomSecondDigit()}${randomThirdDigit()}`.padEnd(
      3,
      "0"
    )
  ));
};

const renderCombination = () => {
  let combination = [];
  for (let i = 0; i <= 999; i++) {
    if (!combination.includes(concatNumbers())) {
      combination.push(`${concatNumbers()}\n`);
      console.log(combination.length);
    }
  }

  let secret = document.createElement("span");
  // numbers.innerHTML = `Number ${combination}`;

  let numbers = document.createTextNode(combination);
  secret.appendChild(numbers);

  document.querySelector(".combination").appendChild(secret);
};

renderCombination();
