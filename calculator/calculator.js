const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((a, b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	return a ? a * factorial(a - 1) : 1;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
