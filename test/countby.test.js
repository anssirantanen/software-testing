import count from '../src/countBy.js'

test('handle empty set', () => {
    expect(count([], e => e)).toStrictEqual({})
})
test('handle true key set', () => {
    expect(count([{ "test": "key1", "eq": true }], e => e.eq)).toBe({ "true": 1, "false": 0 })
})
test('handle false key set', () => {
    expect(count([{ "test": "key1", "eq": false }], e => e.eq)).toBe({ "true": 0, "false": 1 })
})
test('handle both key set', () => {
    expect(count([{ "test": "key1", "eq": false }, { "test": "key2", "eq": true }], e => e.eq)).toBe({ "true": 1, "false": 1 })
})