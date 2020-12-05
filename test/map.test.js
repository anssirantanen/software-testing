import map from '../src/map.js'

test('handle empty array', () => {
    expect(map([], e => e)).toStrictEqual([])
})
test('handle pass array', () => {
    expect(map([1, 2], e => e)).toStrictEqual([1, 2])
})
test('handle complex array', () => {
    expect(map([1, 2], e => e * 2)).toStrictEqual([2, 4])
})