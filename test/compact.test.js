import compact from '../src/compact.js'

test('Handle empty array', () => {
    expect(compact([])).toStrictEqual([])
})
test('clean false values', () => {
    expect(compact([false])).toStrictEqual([])
})
test('clean null values', () => {
    expect(compact([null])).toStrictEqual([])
})
test('clean 0 values', () => {
    expect(compact([0])).toStrictEqual([])
})
test('clean  empty string', () => {
    expect(compact([""])).toStrictEqual([])
})
test('clean undefined values', () => {
    expect(compact([undefined])).toStrictEqual([])
})
test('clean NaN values', () => {
    expect(compact([NaN])).toStrictEqual([])
})
test('not clean good values', () => {
    expect(compact(["some"])).toStrictEqual(["some"])
})
test('handle mixed arrays', () => {
    expect(compact(["some", NaN])).toStrictEqual(["some"])
})




