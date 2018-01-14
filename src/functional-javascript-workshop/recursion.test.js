import subject from './recursion'

it(subject, () => {
  let inputList = [
    'apple',
    'apple',
    'banana'
  ]

  let inputFn = (accumulator, currentValue, index, array) => {
    accumulator[currentValue] = ++accumulator[currentValue] || 1
    return accumulator
  }

  let expectedObj = {
    'apple': 2,
    'banana': 1
  }

  let output = subject(inputList, inputFn, {})

  expect(output).toEqual(expectedObj)
})
