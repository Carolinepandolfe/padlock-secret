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
  return (combination = `${randomFirstDigit()}${randomSecondDigit()}${randomThirdDigit()}`);
};

const renderCombination = () => {
  let combination = [];
  for (let i = 0; i <= 999; i++) {
    combination.push(String(i).padStart(3, "0"));
    console.log(combination);
  }

  let secret = document.createElement("span");

  const orderCombination = combination.sort();

  let numbers = document.createTextNode(orderCombination);
  secret.appendChild(numbers);

  document.querySelector(".combination").appendChild(secret);
};

renderCombination();
