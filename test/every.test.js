import every from '../src/every.js'

test('handle empy list', () => {
    expect(every([], e => typeof e == "boolean")).toBe(true)
})
test('handle null on  list', () => {
    expect(every([true, null], e => typeof e == "boolean")).toBe(false)
})
test('handle false on  list', () => {
    expect(every([false], e => typeof e == "boolean")).toBe(true)
})
test('handle mixed values on  list', () => {
    expect(every(["str", true], e => typeof e == "boolean")).toBe(false)
})