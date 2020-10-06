const capitalize = require('./capitalize');

test('it takes a string and returns 1st letter capital', () => {
    expect(capitalize('i got the job at google')).toBe('I got the job at google');
})

test('it rejects non-strings', () => {
    expect(capitalize(69)).toBe('Please enter a string')
})