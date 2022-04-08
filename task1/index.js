function calculate(str) {
  if (typeof str !== 'string') {
    return '';
  }
  const strArr = str.split('').filter(el => el !== ' ');
  const operatorIndex = strArr.findIndex(el => el !== '.');

  const firstNumber = strArr.indexOf(strArr[operatorIndex]);
  const secondNumber =
    strArr.length - 1 - strArr.lastIndexOf(strArr[operatorIndex]);

  let resNumber = 0;
  switch (strArr[operatorIndex]) {
    case '+':
      resNumber = firstNumber + secondNumber;
      break;
    case '-':
      resNumber = firstNumber - secondNumber;
      break;
    case '*':
      resNumber = firstNumber * secondNumber;
      break;
    case '/':
      resNumber = Math.floor(firstNumber / secondNumber);
      break;

    default:
      break;
  }
  if (resNumber === 0) {
    return '';
  }
  return '.'.repeat(resNumber);
}

console.log('result: ', calculate('..+. ..'));
