const divide = require('../divide');

test('divides 12 / 3 to equal 4', () => {
   expect(divide(3, 12)).toBe(4);
});