import run from './do-some-work'

describe('do some work', () => {
  let readSpy, consoleSpy
  let fakeId = '23452345'
  let fakeJsonResponse = {
    keyOne: 'what is this',
    lockTwo: 'lock me up'
  }

  beforeEach(() => {
    jest.restoreAllMocks()
    consoleSpy = jest.spyOn(console, 'log')
    readSpy = jest.fn()
    readSpy
      .mockReturnValueOnce(Promise.resolve(fakeId))
      .mockReturnValueOnce(Promise.resolve(JSON.stringify(fakeJsonResponse)))
    const HTTP = require('q-io/http')
    HTTP.read = readSpy
  })

  it('should get the id from localhost:7000 and use it to get json from localhost:7001', async () => {
    await run()
    expect(readSpy).toHaveBeenCalledWith('http://localhost:7000')
    expect(readSpy).toHaveBeenCalledWith('http://localhost:7001/' + fakeId)
  })

  it('should console.log the returned json', async () => {
    await run()
    expect(consoleSpy).toHaveBeenCalledWith(fakeJsonResponse)
  })
})
