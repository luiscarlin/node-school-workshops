//  FUNCTIONAL JAVASCRIPT IS GOOD
// ───────────────────────────────
//  Trampoline
//  Exercise 14 of 18

// The boilerplate includes a definition of repeat. repeat will take a Function operation, and a Number num, and invoke operation num times:

//     var count = 0
//     repeat(function() {
//       count++
//     }, 100)

//     console.log('executed %d times.', count)
//     // => executed 100 times.

// BUT note that executing repeat with a large num causes a stack overflow:

//     var count = 0
//     repeat(function() {
//       count++
//     }, 100000)

//     console.log('executed %d times', count)
//     // => RangeError: Maximum call stack size exceeded

// # Task

// Modify the boilerplate below such that it uses a trampoline to continuously call itself synchronously.

// You can assume that the operation passed to repeat does not take arguments (or they are already bound to the function) and the return value is not important.

// ## Conditions

//   * Do not change the implementation of repeat to include any loops(you may change it in other ways though).

// ## Hints

//   * Modify `repeat` so it returns the 'next step', if there is one.
//   * A trampoline continues to synchronously execute steps, getting new steps, until there are no more steps. You can use a loop here!
//   * If your program takes a long time to run, something is probably wrong.  Use Control - C to kill the node process.

// ## Solution

/*
  PROBLEM:
  We want to use the recursive function "repeat", but it causes a stackoverflow for large numbers.

  SOLUTION:
  Pretty much, we are converting a recursive function into a regular function that performs an operation and returns the next
  call of itself to perform. That way the stack doesn't blow up.
  We use a trampoline function as a caller.
*/

function repeat (operation, num) {
  if (num <= 0) return null

  // perform the operation
  operation()

  // return a function calling repeat with the next num
  return () => {
    return repeat(operation, --num)
  }
}

function trampoline (fn) {
  let acc = 0
  // while fn is still a function, execute it
  while (typeof (fn) === 'function') {
    fn = fn()
    if (fn) acc += 1
  }
  return acc
}

module.exports = function (operation, num, cb) {
  // call trampoline to start the recursive function with first step
  let timesExecuted = trampoline(() => {
    return repeat(operation, num)
  })
  if (cb) cb(timesExecuted)
}
