/*
  Follow the instructions in the comments
  and pass the tests!
  When I say "write a function" below, note
  that they are already started for you, and
  you need to complete them;
  e.g., function add() is already declared;
  add parameters to it and then complete the
  body to return the correct value
*/

// Write a function named add that takes
// two numbers and returns their sum
function add(numOne, numTwo) {
  return numOne + numTwo
}

// Write a function named double that takes
// one number and returns double the number
// **using the above function add()**
function double(numOne) {
  return add(numOne, numOne)
}

// Write a function named multiply that takes
// two numbers and returns their product
function multiply(numOne, numTwo) {
  return numOne * numTwo
}

// Write a function named square that takes one
// number and returns the square of the number
// **using the above function multiply()**
function square(numOne) {
  return multiply(numOne, numOne)
}

// The expected value of the following function is
// the given number minus two;
// Fix this function so it returns the expected
// value rather than undefined (**without changing
// the order of the statements**)
function subtractTwo(x) {
  return subtract(x, 2) // leave this the way it is
  function subtract(y, z) {
    return y - z
  } // make changes here
}

// CHALLENGE: write your own function and
// a test for it!
// Requirements:
// * The function must be named myFunction()
//   and take at least one argument
// * The function must take number(s) as
//   argument(s) and return a number
// * The function must call at least 2 of
//   the above functions in its body
// * You should write at least one test
//   for this function in test/index.test.js
function myFunction(numOne, numTwo) {
  return subtractTwo(multiply(numOne, numTwo))
}

module.exports = {
  add,
  double,
  multiply,
  square,
  subtractTwo,
  myFunction,
}
