const reverseString = require('./reverseString');

test('it reverses a string', () => {
    expect(reverseString('This is my beautiful string')).toBe('gnirts lufituaeb ym si sihT');
})

test('it only accepts strings', () => {
    expect(reverseString(6969)).toBe('Please enter a string');
})