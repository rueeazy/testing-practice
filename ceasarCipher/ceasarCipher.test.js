const ceasarCipher = require('./ceasarCipher');

test('it shifts by x characters', () => {
    expect(ceasarCipher('Christian Ruiz', 7)).toBe('Joypzaphu Ybpg')
})

test('it accepts punctuation', () => {
    expect(ceasarCipher("It's a hard knock life", 8)).toBe("Qb'a i pizl svwks tqnm")
})

test('it keeps the same casing', () => {
    expect(ceasarCipher("A Dog's Life", 5)).toBe("F Itl'x Qnkj")
})

test('it accepts very large numbers', () => {
    expect(ceasarCipher("Sugar", 11902)).toBe("Moaul")
})