const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    }
};

console.log(calculator.plus(1, 2));
console.log(calculator.minus(1, 2));
console.log(calculator.multiply(1, 2));
console.log(calculator.divide(1, 2));
console.log(calculator.power(1, 2));