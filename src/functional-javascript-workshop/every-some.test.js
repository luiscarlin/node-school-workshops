import subject from './every-some'

describe('every-some', () => {
  let goodUsers
  let testAllValid

  beforeEach(() => {
    goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
    testAllValid = subject(goodUsers)
  })

  test('when in the list', () => {
    let result = testAllValid([
      { id: 2 },
      { id: 1 }
    ])

    expect(result).toBe(true)
  })

  test('when not in the good list', () => {
    let result = testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])

    expect(result).toBe(false)
  })
})
