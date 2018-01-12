import subject from './filter'

it(subject, () => {
  let mockObj = [
    {
      message: '123456789012345678901234567890123456789012345678901'
    },
    {
      message: '12345678901234567890123456789012345678901234567890'
    },
    {
      message: '1234567890123456789012345678901234567890123456789'
    },
    {
      message: 'another'
    }
  ]

  let expected = [
    '1234567890123456789012345678901234567890123456789',
    'another'
  ]

  let output = subject(mockObj)

  expect(output).toHaveLength(2)
  expect(output).toEqual(expect.arrayContaining(expected))
})
