import defaultTo from '../src/defaultTo.js'

test('handle NaN', () => {
    expect(defaultTo(NaN, "default")).toBe("default")
})
test('handle undefined', () => {
    expect(defaultTo(undefined, "default")).toBe("default")
})
test('handle null', () => {
    expect(defaultTo(null, "default")).toBe("default")
})
test('handle value', () => {
    expect(defaultTo("value", "default")).toBe("value")
})