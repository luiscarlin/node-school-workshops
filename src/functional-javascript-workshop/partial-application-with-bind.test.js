import subject from './partial-application-with-bind'

describe(subject, () => {
  it('returns a new function when called', () => {
    expect(subject('INFO:')).not.toBeNull()
  })

  it('prints message to console.log', () => {
    console.log = jest.fn()

    let info = subject('INFO:')

    info('this is an info message')
    expect(console.log).toHaveBeenCalledWith('INFO:', 'this is an info message')
  })

  it('prints message to console.log when passed as array', () => {
    console.log = jest.fn()

    let info = subject('INFO:')

    info('this', 'is', 'another', 'message')
    expect(console.log).toHaveBeenCalledWith('INFO:', 'this', 'is', 'another', 'message')
  })
})
