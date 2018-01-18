//  FUNCTIONAL JAVASCRIPT IS GOOD
// ───────────────────────────────
//  Function Spies
//  Exercise 12 of 18

// # Task

// Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

// Create a spy that keeps track of how many times a function is called.

// ## Example

//     var spy = Spy(console, 'error')

//     console.error('calling console.error')
//     console.error('calling console.error')
//     console.error('calling console.error')

//     console.log(spy.count) // 3

// ## Arguments

//   * target: an object containing the method `method`
//   * method: a string with the name of the method on `target` to spy on.

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any unnecessary functions e.g. helpers.

// ## Hint

//   * Functions have context, input and output. Make sure you consider the context, input to *and output from* the function you are spying on.

// ## Boilerplate

function Spy (target, method) {
  let spyToReturn = {count: 0}

  // save the original function
  let originalFunc = target[method]

  // override it
  target[method] = function () {
    // add it to your spy
    spyToReturn.count++

    // call original with arguments array-like
    return originalFunc.apply(target, arguments)
  }

  // return your spy
  return spyToReturn
}

module.exports = Spy
