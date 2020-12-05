import reduce from '../src/reduce.js'

test('handle empty array', () => {
    expect(reduce([], (acc, e) => acc + e, 1)).toBe(1)
})
test('handle no initial value', () => {
    expect(reduce([1, 2], (acc, e) => acc + e)).toBe(3)
})
test('handle both', () => {
    expect(reduce([1, 2], (acc, e) => acc + e, 1)).toBe(4)
})