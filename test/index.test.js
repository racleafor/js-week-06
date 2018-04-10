const fs = require('fs')
const path = require('path')
const {
  add,
  double,
  multiply,
  square,
  subtractTwo,
  myFunction,
} = require('../index')

/* eslint-disable */

const code = fs.readFileSync(path.join('index.js'), { encoding: 'utf8' })

test('adds two numbers', () => {
  expect(add(8, 9)).toBe(17)
  expect(add(10, 20)).toBe(30)
})

test('doubles a number', () => {
  expect(double(8)).toBe(16)
  expect(double(10)).toBe(20)
})

test('calls add()', () => {
  const match = code.match(/function double\(.*?\) {([\s\S]+?)}/)
  const add_calls = match[1].match(/add\(.*?\)/g)
  expect(add_calls.length).toBeGreaterThan(0)
})

test('multiplies two numbers', () => {
  expect(multiply(8, 9)).toBe(72)
  expect(multiply(10, 20)).toBe(200)
})

test('squares a number', () => {
  expect(square(8)).toBe(64)
  expect(square(10)).toBe(100)
})

test('calls multiply()', () => {
  const match = code.match(/function square\(.*?\) {([\s\S]+?)}/)
  const mult_calls = match[1].match(/multiply\(.*?\)/g)
  expect(mult_calls.length).toBeGreaterThan(0)
})

test('subtracts two from a number', () => {
  expect(subtractTwo(9)).toBe(7)
  expect(subtractTwo(20)).toBe(18)
  expect(subtractTwo(0)).toBe(-2)
})

test('takes one arg and returns first', () => {
  const regex = /function subtractTwo\(x\) {([\s\S]+?return subtract\(x, 2\))/
  expect(regex.test(code)).toBeTruthy()
})

test('myFunction calls at least two other functions', () => {
  const match = code.match(/function myFunction\(.*?\) {([\s\S]+?)}/)
  const body = match[1]
  const functions = ['add(', 'double(', 'multiply(', 'square(', 'subtractTwo(']
  const calls_two = functions.filter(x => body.includes(x))
  expect(calls_two.length).toBeGreaterThanOrEqual(2)
})

test('myFunction works', () => {
  // pass your argument(s) to myFunction here
  const result = myFunction()
  // what should it return?
  // complete the toBe() call below
  expect(result).toBe()
})
