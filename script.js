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

for (let i = 0; i <= 1000; i++) {
  let combination = [];
  combination.push(concatNumbers());
  console.log(combination);
}
