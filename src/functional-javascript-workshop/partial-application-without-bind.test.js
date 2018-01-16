import subject from './partial-application-without-bind'

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
})
