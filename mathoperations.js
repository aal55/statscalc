const sum = require('./sum');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const square = require('./square');
const squareroot = require('./squareroot');

class MathOperations {
    static add(a, b) {
        if(Array.isArray(a)) {
            return sum.add(a);
        } else {
            return sum.add(a, b);
        }
    }
    static minus(a, b) {
        return subtract(a, b);
    }
    static product(a, b) {
        return multiply(a, b);
    }
    static quotient(a, b) {
        return divide(a, b);
    }
    static sq(a) {
        return square(a);
    }
    static sqrt(a) {
        return squareroot(a);
    }
}

module.exports = MathOperations;