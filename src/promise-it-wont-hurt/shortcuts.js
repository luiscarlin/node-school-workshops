//  Promise It Won’t Hurt
// ───────────────────────
//  Shortcuts
//  Exercise 6 of 13

// (node:16079) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.

// # Promise me... quicker

// The ES2015 specification defines some shortcuts that make creating and working
// with promises faster and easier.

// The first is .catch. So far we already know how to handle the rejection of a
// promise -- through the second parameter to .then function. However,
// sometimes you only want to handle the rejection and not success. In these
// cases, since the onFulfilled callback is optional, you can specify null in
// place of it.  However, a much easier way to achieve this is to use .catch.
// Instead of having to write

//     promise.then(null, function (err) {
//       console.error('THERE IS AN ERROR!!!');
//       console.error(err.message);
//     });

// You could simply write

//     promise.catch(function (err) {
//       console.error('THERE IS AN ERROR!!!');
//       console.error(err.message);
//     });

// This notation also has the benefit of making the syntax easier to understand for
// people who do not speak Promises yet, since it is fairly obvious to everyone
// who has done JavaScript programming to understand what catch means.

// The second and third are Promise.resolve and Promise.reject. The code
// examples below will tell you exactly what they do:

//     // The way you have learned: create promise through the constructor.

//     var promise = new Promise(function (fulfill, reject) {
//       fulfill('SECRET VALUE');
//     });

//     // Introducing: Promise.resolve
//     // It does the exact same thing as above:

//     var promise = Promise.resolve('SECRET VALUE');

//     // Likewise...

//     var promise = new Promise(function (fulfill, reject) {
//       reject(new Error('SECRET VALUE'));
//     });

//     var promise = Promise.reject(new Error('SECRET VALUE'));

// ## Task

// We don’t have any specific task we’d like to assign to you for this lesson.
// Feel free to explore all three functions at your own pace. When you are
// preparing to submit though, make sure you are using at least catch and one
// of Promise.resolve and Promise.reject ☺

let getPromiseResolve = () => Promise.resolve('getPromiseResolve - RESOLVED')

let getPromiseReject = () => Promise.reject(new Error('getPromiseReject - REJECTED'))

let getPromiseThrowingError = () => {
  return new Promise((resolve, reject) => {
    throw new Error('getPromiseThrowingError - ERROR')
  })
}

let errorHandler = (error) => {
  console.log(error.message)
}

let runCaughtRejection = () => {
  return getPromiseResolve()
    .then(getPromiseReject)
    .catch(errorHandler)
}

let runCaughtError = () => {
  return getPromiseResolve()
    .then(getPromiseThrowingError)
    .catch(errorHandler)
}

let runCaughtRejectBeforeError = () => {
  return getPromiseResolve()
    .then(getPromiseReject)
    .then(getPromiseThrowingError)
    .catch(errorHandler)
}

let runCaughtErrorBeforeRejection = () => {
  return getPromiseResolve()
    .then(getPromiseThrowingError)
    .then(getPromiseReject)
    .catch(errorHandler)
}

runCaughtRejection()

runCaughtError()

runCaughtRejectBeforeError()

runCaughtErrorBeforeRejection()

export { runCaughtRejection, runCaughtError, runCaughtRejectBeforeError, runCaughtErrorBeforeRejection }
