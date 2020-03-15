const Calculator = require('../calculator');

test('Calculator Add 2 and 6 to get 8', () => {
    let Calc = new Calculator();
    expect(Calc.Add(2, 6)).toBe(8);
    expect(Calc.Result).toBe(8);
});

test('Calculator Subtract 4 by 1 to get 3', () => {
    let Calc = new Calculator();
    expect(Calc.Subtract(4, 1)).toBe(3);
    expect(Calc.Result).toBe(3);
});

test('Calculator Multiply 5 by 3 to get 15', () => {
    let Calc = new Calculator();
    expect(Calc.Multiply(5, 3)).toBe(15);
    expect(Calc.Result).toBe(15);
});

test('Calculator Divide 8 by 2 to get 4', () => {
    let Calc = new Calculator();
    expect(Calc.Divide(8, 2)).toBe(4);
    expect(Calc.Result).toBe(4);
});

test('Calculator Square 13 to get 169', () => {
    let Calc = new Calculator();
    expect(Calc.Square(13)).toBe(169);
    expect(Calc.Result).toBe(169);
});

test('Calculator Take the Square Root of 121 to get 11', () => {
    let Calc = new Calculator();
    expect(Calc.SquareRoot(121)).toBe(11);
    expect(Calc.Result).toBe(11);
});

test('Add array of 5, 10, 15 to get 40', () => {
    let Calc = new Calculator();
    let arr = [5, 10, 15];
    expect(Calc.Add(arr)).toBe(30);
    expect(Calc.Result).toBe(30);
});