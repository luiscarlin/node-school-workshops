//  FUNCTIONAL JAVASCRIPT IS GOOD
// ───────────────────────────────
//  Recursion
//  Exercise 16 of 18

// # Task

// Implement a recursive function that returns all of the unique dependencies, and sub-dependencies of a module, sorted alphabetically. Dependencies should be printed as dependency@version e.g. 'inflection@1.2.6'.

// Multiple versions of the same module are allowed, but duplicates modules of the same version should be removed.

// ## Arguments:

//   * tree: A dependency tree. See below for an example of the structure.

// ## Example

// var loremIpsum = {
//   'name': 'lorem-ipsum',
//   'version': '0.1.1',
//   'dependencies': {
//     'optimist': {
//       'version': '0.3.7',
//       'dependencies': {
//         'wordwrap': {
//           'version': '0.0.2'
//         }
//       }
//     },
//     'inflection': {
//       'version': '1.2.6'
//     }
//   }
// }

// getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

// ## Conditions:

//   * Do not use any for/while loops.

// ## Boilerplate

function getDependencies (tree, arrayToReturn = []) {
  let dependenciesTree = tree.dependencies
  if (dependenciesTree) {
    // grab children
    let children = Object.keys(dependenciesTree)

    children.forEach((libraryName) => {
      arrayToReturn.push((libraryName + '@' + dependenciesTree[libraryName].version))
      let dependencies = getDependencies(dependenciesTree[libraryName], arrayToReturn)
      arrayToReturn.concat(dependencies)
    })
    return arrayToReturn.sort()
  } else {
    return []
  } // children.forEach((possibleObject) => {
  //   if (typeof tree[possibleObject] === 'object') {
  //     if (possibleObject === 'dependencies') {
  //       dependencyParent = true
  //       dependencyArray.push(possibleOb)
  //     }
  //     console.log('object found', possibleObject)
  //     return getDependencies(tree[possibleObject])
  //   }
}

module.exports = getDependencies
