import add from '../src/add.js'


test('add two numbers together', () => {
  expect(add(1, 2)).toBe(3)
})
test('add two infinities', () => {
  expect(add(Infinity, Infinity)).toBe(Infinity)
})
test('handle unsafely large number', () => {
  expect(add(Math.pow(2, 53 - 1), 1)).toBe(NaN)
})
test('handle adding negative numbers', () => {
  expect(add(100000.5, -100001)).toBe(-0.5)
})
test('detect non number in first element', () => {
  expect(add("100", 1)).toBe(NaN)
})
test('detect non number in second element', () => {
  expect(add(1, "100")).toBe(NaN)
})
test('handle nan values', () => {
  expect(add(1, NaN)).toBe(NaN)
})

