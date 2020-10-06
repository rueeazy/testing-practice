const calculator = require('./calculator');

test('it adds 2 numbers', () => {
    expect(calculator.add(1, 1)).toBe(2);
})

test('it subtracts 2 numbers', () => {
    expect(calculator.sub(10,5)).toBe(5);
})

test('it multiplies 2 numbers', () => {
    expect(calculator.mul(4, 3)).toBe(12);
})

test('it divides 2 numbers', () => {
    expect(calculator.div(72, 9)).toBe(8);
})