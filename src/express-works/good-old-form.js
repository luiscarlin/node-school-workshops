// Master Express.js and have fun!
// ─────────────────────────────────
//  GOOD OLD FORM
//  Exercise 4 of 8

// Forms are important. This exercise will teach you how to process the traditional (non-AJAX) web form.

// Write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and responds with the value of str backwards.

// To handle a POST request, use the post() method which is used the same way as get():

//     app.post('/path', function(req, res){...})

// Express.js uses middleware to provide extra functionality to your web server.

// Simply put, a middleware is a function invoked by Express.js before your own
// request handler.

// Middleware provide a large variety of functionality such as logging, serving
// static files, and error handling.

// A middleware is added by calling use() on the application and passing the
// middleware as a parameter.

// To parse x-www-form-urlencoded request bodies, Express.js can use urlencoded()
// middleware from the body-parser module.

//     var bodyparser = require('body-parser')
//     app.use(bodyparser.urlencoded({extended: false}))

// -------------------------------------------------------------------------------

// ## HINTS

// Here is how we can print characters backwards (just one way to do it):

//     req.body.str.split('').reverse().join('')

// Extended set to true (qs) or false (querystring) determines the parser module.

// Read more about Connect middleware here:

//   [https://](https://)

// The documentation of the body-parser module can be found here:

//   [https://](https://)

// Videos: [http://](http://)

// -------------------------------------------------------------------------------

// ## NOTE

// When creating your projects from scratch, install the body-parser dependency
// with npm by running:

//     $ npm install body-parser

// …in your terminal.

// Again, the port to use is passed expressworks to the application as process.argv[2].

//  » To print these instructions again, run: expressworks print
//  » To execute your program in a test environment, run: expressworks run program.js
//  » To verify your program, run: expressworks verify program.js
//  » For help run: expressworks help

let express = require('express')
let bodyparser = require('body-parser')
let app = express()

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', (req, res) => {
  let backwards = req.body.str.split('').reverse().join('')
  res.send(backwards)
})

// if (process.argv[2] && typeof process.argv[2] === 'number') {
app.listen(process.argv[2], () => {
  console.log('server listening on port ', process.argv[2])
})
// }

// export default app
