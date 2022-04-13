function isValidParentheses(str) {
  let result = 0;
  str.split('').forEach(el => {
    el === '(' ? ++result : --result;
  });
  return result === 0;
}
console.log('isValidParentheses: ', isValidParentheses('(())((()())())'));
