////////// Task 1 //////////

// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => {
  return `Hello ${name}!`;
};
console.log(greet("Haider"));

////////// Task 2 //////////

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

const addition = (num1, num2) => {
  return num1 + num2;
};
console.log(addition(10, 20));

////////// Task 3 //////////

// Q3) Write a simple arrow function that squares a number.

const square = (n) => {
  return n * n;
};
console.log(square(12));
