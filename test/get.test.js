import get from '../src/get.js'

test('handle no path', () => {
    expect(get({ "a": 0 }, "b")).toBe(undefined)
})
test('handle no path default value', () => {
    expect(get({ "a": 0 }, "b", "default")).toBe("default")
})
test('handle nested path', () => {
    expect(get({ "a": { "b": "key" } }, "a.b", "default")).toBe("key")
})
test('handle nested path array', () => {
    expect(get({ "a": { "b": "key" } }, ["a", "b"], "default")).toBe("key")
})