// FUNCTIONAL JAVASCRIPT IS GOOD
// ───────────────────────────────
//  Basic: Call
//  Exercise 8 of 18

// JavaScript implements 'duck' typing. Duck typing is a style of dynamic typing in which an object's methods and properties determine the valid semantics, rather than its inheritance from a particular class or implementation of a specific interface. The name of the concept refers to the duck test, attributed to James Whitcomb Riley, which may be phrased as follows:

//   "When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck"

// In JavaScript, in order to write robust programs we sometimes need to check an object conforms to the type that we need.

// We can use Object#hasOwnProperty to detect if an object 'has' a property defined on itself (i.e. not inherited from its prototype):

//     var duck = {
//       quack: function() {
//         console.log('quack')
//       }
//     }

//     duck.hasOwnProperty('quack') // => true

// We didn't give the duck a .hasOwnProperty method, where did it come from?

// Duck was created with the {} syntax, and as such it inherits from Object.prototype:

//     var object = {quack: true}

//     Object.getPrototypeOf(object) === Object.prototype // => true
//     object.hasOwnProperty('quack')                     // => true

// But what if an object doesn't inherit from Object.prototype?

//     // create an object with 'null' prototype.
//     var object = Object.create(null)
//     object.quack = function() {
//       console.log('quack')
//     }

//     Object.getPrototypeOf(object) === Object.prototype // => false
//     Object.getPrototypeOf(object) === null             // => true

//     object.hasOwnProperty('quack')
//     // => TypeError: Object object has no method 'hasOwnProperty'

// We can still use hasOwnProperty from the Object.prototype though, if we call it with the this value set to something that 'looks like an object'. Function#call allows us to invoke any function with an altered this value.

//     // the first argument to call becomes the value of `this`
//     // the rest of the arguments are passed to the function as per

//     Object.prototype.hasOwnProperty.call(object, 'quack') // => true

// # Task:

// Write a function duckCount that returns the number of arguments passed to it which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.

// Example:

//     var notDuck = Object.create({quack: true})
//     var duck = {quack: true}
//     duckCount(duck, notDuck) // 1

// ## Arguments

//   * You will be passed 0-20 arguments. Each argument could be of any type with any properties. Some of these items will have a 'quack' property.

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any counter/accumulator variables.
//   * Do not create any unnecessary functions e.g. helpers.

// ## Hint

//   * The `arguments` variable, available in every function, is an *Object* that quacks like an *Array*:

//     {
//       0: 'argument0',
//       1: 'argument1', // etc
//       length: 2
//     }

// ## Resources

//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments

/*
  SUMMARY:
  - Duck typing = "if a bird acts as a duck, then it's a duck". Meaning, you can assume the type of an object by checking on its properties.
  - myObject#hasOwnProperty("name_func_or_var") => true if myObject has prop "name_func_or_var" and it was not inherited from the prototype
  - All objects have a prototype from where they inherit functions and properties (prototype is an object)
    - 'let object = {}' inherits from the "Object.prototype" prototype
    - 'let object = Object.create(MyCustomPrototype)' inherits from the "MyCustomPrototype" prototype
  - Objects inherited from Object.prototype get function "hasOwnProperty()"
  - Object.prototype.hasOwnProperty.call(object, 'name_of_func_or_propr') will always work
*/

function duckCount (...args) {
  // args is an array
  let input = args

  // let filteredArray = unfilteredArray.filter(testElement(elementInArray))
  // will loop through the unfilterdArray and run function testElement() for each elementInArray.
  // If the testElement() returns true, the element will be part of the Filtered Array.

  // Save object in new array if object has own property 'quack' (not inherited from its prototype)
  let filtered = input.filter((obj) => Object.prototype.hasOwnProperty.call(obj, 'quack'))

  return filtered.length
}

module.exports = duckCount
