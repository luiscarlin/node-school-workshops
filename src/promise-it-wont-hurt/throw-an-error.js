//  Promise It Won’t Hurt
// ───────────────────────
//  Throw an error
//  Exercise 9 of 13

// # What happens when an error is thrown?

// One of the tremendous strengths of promises is that they handle errors in a
// manner similar to synchronous code.  Unlike in traditional callback-based code,
// you do not need to strictly handle all your errors at every step.

// If an error is thrown inside a function, it can be captured.

// If an error is thrown inside a function, it will be handled by the next
// available "rejection" handler.  This allows you to write code that looks
// remarkably like a try/catch block would in synchronous code.

//     try {
//       doSomethingRisky();
//       doAnotherRiskyThing();
//     } catch (e) {
//       console.log(e.message);
//     }

// The equivalent "promisified" code might look like:

//     doSomethingRisky()
//     .then(doAnotherRiskyThing)
//     .then(null, console.log);

// ## Task

// Let's build exactly the system discussed above.

// Some invalid JSON will be available on process.argv[2].

//   * Build a function called `parsePromised` that creates a promise,performs `JSON.parse` in a `try`/`catch` block, and fulfills or rejectsthe promise depending on whether an error is thrown.**Note:** your function should synchronously return the promise!
//   * Build a sequence of steps like the ones shown above that catchesany thrown errors and logs them to the console.

let parsePromised = (textToParse) => {
  return new Promise((resolve, reject) => {
    try {
      let parsed = JSON.parse(textToParse)
      resolve(parsed)
    } catch (e) {
      reject(e)
    }
  })
}

let onReject = (error) => {
  console.log(error.message)
}

let run = async (raw) => {
  await parsePromised(raw)
    .then(console.log)
    .then(null, onReject)
}

// run(process.argv[2])

export default run
