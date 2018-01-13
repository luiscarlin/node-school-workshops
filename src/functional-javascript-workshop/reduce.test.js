import subject from './reduce'

it(subject, () => {
  let input = [
    'hello',
    'bye',
    'hello',
    'none',
    'none',
    'none'
  ]

  let expected = {
    'hello': 2,
    'bye': 1,
    'none': 3
  }

  let output = subject(input)

  expect(output).toEqual(expected)
})
