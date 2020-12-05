import words from '../src/words.js'

test('handle regex', () => {
    expect(words("word1 word2", /[^ ]+/g)).toStrictEqual(["word1", "word2"])
})