const analysis = require('./arrayAnalysis');

test('it returns an array of objects', () => {
    expect(analysis([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
})