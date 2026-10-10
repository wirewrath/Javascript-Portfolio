/**
 * @file JavaScript Primitive Types & Coercion Reference
 * @description Examples covering core JS primitives (String, Number, Boolean),
 * type checking with `typeof`, and implicit type coercion (string concatenation).
 * @author wirewrath
 */

// ==========================================
// 1. Primitive Data Types
// ==========================================

/** My username represented as a string primitive */
const myName = "wireWrath";

/** Age in years, represented as a JS number (covers both ints and floats) */
const age = 38;

/** Student status flag as a boolean */
const isStudent = true;

// ==========================================
// 2. Type Inspection with `typeof`
// ==========================================

// Inspecting primitive types using the typeof operator
console.log(typeof myName);    // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"

// ==========================================
// 3. Implicit Type Coercion (JS vs Python)
// ==========================================

/**
 * Demonstrates string concatenation coercion.
 * In JS, adding a string and a number converts the number to a string and glues them.
 * Note: Unlike Python ('5' + 1 -> TypeError), JS evaluates '5' + 1 as '51'.
 */
console.log('5' + 1);          // "51"
console.log(typeof ('5' + 1)); // "string"

const userName = ('wireWrath');
const number = 123;
const boolean = true;

console.log(typeof userName);
console.log(typeof number);
console.log(typeof boolean);