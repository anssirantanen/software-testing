import slice from '../src/slice.js'


test('handle empty array', () => {
    expect(slice([], 0, 1)).toStrictEqual([])
})
test('handle start of array', () => {
    expect(slice([1, 2, 3], 0, 2)).toStrictEqual([1, 2, 3])
})
test('handle offset', () => {
    expect(slice([1, 2, 3, 4], 1, 2)).toStrictEqual([2, 3])
})
test('handle negative indexes', () => {
    expect(slice([1, 2, 3, 4], -2, -1)).toStrictEqual([3, 4])
})
test('handle index overflow', () => {
    expect(slice([1, 2, 3, 4], 3, 5)).toStrictEqual([4, undefined])
})