//  FUNCTIONAL JAVASCRIPT IS GOOD
// ───────────────────────────────
//  Blocking Event Loop
//  Exercise 13 of 18

// # Task

// Modify the recursive repeat function provided in the boilerplate, such that it does not block the event loop (i.e. Timers and IO handlers can fire).  This necessarily requires repeat to be asynchronous.

// A timeout is queued to fire after 100 milliseconds, which will print the results of the test and exit the process. repeat should release control of the event loop to allow the timeout to interrupt before all of the operations complete.

// Try to perform as many operations as you can before the timeout fires!

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any unnecessary functions e.g. helpers.

// ## Hints

//   * If your program takes a long time to run, something is probably wrong.Use Control - C to kill the node process.

// ## Resources

//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers

/*
  PROBLEM:
  Javascript has 1 event queue. Events are added to that queue and run in a loop. One by one by the Javascript engine.
  Synchronous "blocking" code (i.e. execution waits until prev process finishes) blocks the event loop. That means that timers, IO handlers can't fire
  while the blocking code is running.
  Since this is a recursive function that could run for a long time, we want to force it release control of the event loop often.

  SOLUTION:
  Use setTimeout(function, milliseconds). This way the function will be placed in the event queue only after # milliseconds specified. During the timeout,
  other events will be run in the event loop.
*/

function repeat (operation, num) {
  if (num <= 0) return

  // perform the operation
  operation()

  // every 10 iterations, take a break and allow other events to run
  if (num % 10 === 0) {
    setTimeout(function () {
      repeat(operation, --num)
    }, 100)
  } else {
    repeat(operation, --num)
  }
}

module.exports = repeat
