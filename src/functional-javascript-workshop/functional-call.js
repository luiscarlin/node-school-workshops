
//  FUNCTIONAL JAVASCRIPT IS GOOD
// ───────────────────────────────
//  Function Call
//  Exercise 18 of 18

// # Task

// Write a function that allows you to use Array.prototype.slice without using slice.call or slice.apply to invoke it.

// Normally you have to use slice with call or apply:

//     var slice = Array.prototype.slice

//     function() {
//       var args = slice.call(arguments) // this works
//     }

// We want this to work:

//     var slice = yourFunction

//     function() {
//       var args = slice(arguments) // this works
//     }

// ## Example

// A function, slice that exhibits the following behaviour:

//     var nums = [1,2,3,4,5]

//     // your slice function should match the regular
//     // behaviour of slice, except it takes the array
//     // as the first argument

//     slice(nums, 0, 2) // [1, 2]
//     slice(nums, 1, 2) // [2]

//     // regular slice usage for comparison
//     nums.slice(0, 2) // [1, 2]
//     nums.slice(1, 2) // [2]

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not use the `function` keyword :D

/*

────────────────────────────────────────────────────────────────────────────────

- every Function inherits methods from Function.prototype, such as (call, apply, bind, etc)
  let fn = (input) => { console.log(input) }
  fn("hello")               // outputs "hello"
  fn.call(this, "hello")    // outputs "hello"

- "Function.prototype.call" is itself function (like fn) that you can call with ".call()", so...
  Function.prototype.call.call(fn, this, "hello")    // outputs "hello"

- Function.call === Function.prototype.call, so....
  Function.call.call(fn, this, "hello")              // still prints "hello"

- In the inner working of the function "call", "this" is the function to call. So, overriding "this" will cause a different function to be called

- Function.prototype.bind() is also available. It retuns a new function, where you can bind the context of another "this"
- since call(), apply(), and bind() are functions from Function.prototype, you can apply to them the functions call(), apply(), or bind()

────────────────────────────────────────────────────────────────────────────────

*/

// attach "slice" to "this" in the function "call" and return that new function
// since we know that the function "call" stores the function to call in its "this", then
// anytime somebody calls this function will be executing "slice"

module.exports = Function.prototype.call.bind(Array.prototype.slice)
