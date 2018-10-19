'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
function multiply(number1, number2) {
    var sum = 0;
    var signResult = sign(number1) === sign(number2) ? 1 : -1; 
    if (number1 === 0 || number2 === 0) {
         signResult = 0;
    }  else {
        var multiplier = abs(number1) < abs(number2) ? abs(number1) : abs(number2); 
        var multiplicand = abs(number1) === abs(multiplier) ? abs(number2) : abs(number1); 
        for (var i = 0; i < abs(multiplier); i++) {
            sum += multiplicand;
        }
    }
    return (signResult >= 0 ? sum : -sum);
}
function abs(number) {
    return (number >= 0 ? number : -number); 
}

function sign(number) {
    var signNumber = (number > 0 ? 1 : -1 );
    return (number === 0 ? 0 : signNumber);
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
