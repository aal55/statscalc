const MathOperations = require('./mathoperations');

class Calculator {
    Add(a, b) {
        if (Array.isArray(a)) {
            return this.Result = MathOperations.add(a);

        } else {
            return this.Result = MathOperations.add(a, b);
        }
    }
    Subtract(a, b) {
        return this.Result = MathOperations.minus(a, b);
    }
    Divide(a, b) {
        return this.Result = MathOperations.quotient(a, b);
    }
    Multiply(a, b) {
        return this.Result = MathOperations.product(a, b);
    }
    Square(a) {
        return this.Result = MathOperations.sq(a);
    }
    SquareRoot(a) {
        return this.Result = MathOperations.sqrt(a);
    }
}
module.exports = Calculator;