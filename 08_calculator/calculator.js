const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
	let totalSum = numbers.reduce((sum, current) => sum + current, 0);
  return totalSum
};

const multiply = function(numbers) {
  let totalMult = numbers.reduce((value, current) => value * current, 1)
  return totalMult
};

const power = function(a, b) {
  return Math.pow(a, b)
};

const factorial = function(a) {
  let value = 1

  if (a === 0) {
    return 1;
  }
    for (let i = a; i > 0; i--) {
      value *= i
    }
    return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
