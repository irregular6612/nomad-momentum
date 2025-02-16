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

//parseInt() : 문자열을 숫자로 변환 단, 숫자 이외의 char직전까지만 변환
console.log(parseInt('fk123')) //-> NaA
console.log(parseInt('123'), parseInt('12ffd2')); // 123, 12
console.log(typeof parseInt('123.456')); // 123

//isNaN() : 숫자가 아닌 경우 true, 숫자인 경우 false
//parseInt()의 arg로 들어간 'fk123'의 첫 char가 숫자가 아니므로, NaN이 반환됨
if (isNaN(parseInt('fk123'))) {
    console.log('숫자가 아닙니다.');
} else {
    console.log('숫자입니다.');
}

console.log(true && false); //false
console.log(true || false); //true
console.log(!true); //false

// === ==
// === : 값과 타입이 모두 같아야 true
// == : 값만 같으면 true

console.log(1 === '1'); //false
console.log(1 == '1'); //true





