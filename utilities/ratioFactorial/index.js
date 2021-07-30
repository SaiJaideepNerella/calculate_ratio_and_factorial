const factorialNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");
const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialNumber(num3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
