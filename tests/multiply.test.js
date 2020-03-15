const multiply = require('../multiply');

test('multiplies 2 X 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});