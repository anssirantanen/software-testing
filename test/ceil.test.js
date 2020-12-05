import ceil from '../src/ceil.js'

test('Use default ceil, when precision is missing', () => {
    expect(ceil(3.14159265359)).toBe(4)
})
test('Handle default presicion', () => {
    expect(ceil(2.71828182846, 0)).toBe(3)
})
test('Handle given presicion', () => {
    expect(ceil(1.61803398875, 3)).toBe(1.619)
})
test('Pad zeroes', () => {
    expect(ceil(12345678.9, -3)).toBe(12346000)
})
test('Handle large numbers', () => {
    expect(ceil(12345678.9, -10)).toBe(10000000000)
})
test('Handle infinity', () => {
    expect(ceil(Infinity, 3)).toBe(NaN)
})
test('Handle negative infinity', () => {
    expect(ceil(Infinity, -3)).toBe(NaN)
})
test('Handle number safe boundaries', () => {
    expect(ceil(12345.6789, 3.14159265359)).toBe(NaN)
})
test('Handle empty parameters', () => {
    expect(ceil()).toBe(NaN)
})