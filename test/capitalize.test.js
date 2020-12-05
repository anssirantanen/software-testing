import capitalize from '../src/capitalize.js'

test('Stringify number', () => {
    expect(capitalize(200)).toBe("200")
})
test('Return already capitalized', () => {
    expect(capitalize("Capitalized")).toBe("Capitalized")
})
test('Capitalize first letter', () => {
    expect(capitalize("small letters only")).toBe("Small letters only")
})
test('Handle all caps', () => {
    expect(capitalize("ALL CAPS")).toBe("All caps")
})
test('Handle empty string', () => {
    expect(capitalize("")).toBe("")
})
