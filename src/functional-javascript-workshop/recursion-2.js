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

// FIRST SOLUTION
// function getDependencies (tree, arrayToReturn = []) {
//   let dependenciesTree = tree.dependencies
//   if (dependenciesTree) {
//     let children = Object.keys(dependenciesTree)

//     children.forEach((libraryName) => {
//       arrayToReturn.push((libraryName + '@' + dependenciesTree[libraryName].version))
//       let dependencies = getDependencies(dependenciesTree[libraryName], arrayToReturn)
//       arrayToReturn.concat(dependencies)
//     })
//     return [...new Set(arrayToReturn.sort())]
//   } else {
//     return []
//   }
// }

function getDependencies (tree, result) {
  // if undefined, set it to empty []
  // holds the final result. [ "name@version", "name1@version1" ]
  result = result || []

  // if tree exists, and tree.dependencies exists use dependencies otherwise use empty []
  let dependencies = (tree && tree.dependencies) || []

  // get all the dependencies names as an array
  // for each of those names...
  Object.keys(dependencies).forEach((dependencyName) => {
    // form the entry for the dependency "name@version"
    let dependencyEntry = dependencyName + '@' + tree.dependencies[dependencyName].version

    // search for the dependency entry to see if it's already in the result list
    // if not there, add it to the list
    if (result.indexOf(dependencyEntry) === -1) result.push(dependencyEntry)

    // call the function again with the subtree
    getDependencies(tree.dependencies[dependencyName], result)
  })

  // sort before return it
  return result.sort()
}

module.exports = getDependencies
