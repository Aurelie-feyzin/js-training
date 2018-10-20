'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(sentence) {
    var wordInArray = sentence.split(' ');
    var wordCapitalizedInArray = wordInArray.map(capitalizeFirstLetter);
    return wordCapitalizedInArray.join(" ");
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?")
assert.strictEqual(jadenCase("HOW are you ?"), "How Are You ?")
// End of tests */
