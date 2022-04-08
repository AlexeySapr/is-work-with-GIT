function oneRow(startCharNumber, numberOfChars) {
  const strArr = [];
  let charCounter = 0;
  while (charCounter < numberOfChars) {
    if (startCharNumber > 122) {
      startCharNumber = 97;
    }

    strArr.push(String.fromCharCode(startCharNumber));
    ++startCharNumber;
    ++charCounter;
  }
  return strArr;
}

function grid(num) {
  if (num < 0) {
    return null;
  }

  let strCounter = 0;
  let charCounter = 0;
  const startCharNumber = 97;
  const strArr = [];

  while (strCounter < num) {
    let charNumber = startCharNumber + charCounter;
    if (charNumber > 122) {
      charCounter = 0;
    }

    const tempStrArr = oneRow(charNumber, num).join(' ');
    strArr.push(tempStrArr);
    strArr.push('\n');
    ++strCounter;
    ++charCounter;
  }
  return strArr.join('');
}

console.log(grid(30));
