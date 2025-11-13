const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  return numbers.reduce( (sum, currentNum) => sum + currentNum, 0);
};

const multiply = function(numbers) {
  return numbers.reduce( (multiply, currentNum) => multiply * currentNum, 1);
};

const power = function(base, exponent) {
  // let pow = 1;
	// while(exponent > 0){
  //   pow *= base;
  //   exponent--;
  // }
  // return pow;
  return base ** exponent;
};

const factorial = function(number) {
	let fact = 1;
  for( let i=number; i>0; i-- ){
    fact *= i;
  }
  return fact;
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
