import run from './throw-an-error'

describe('throw an error', () => {
  let badJsonString = '{ "var": }'
  let goodJsonString = {'hello': 'dogs'}
  console.log = jest.fn()

  it('should print error message to console when failed to parse Json', async () => {
    await run(badJsonString)
    expect(console.log).toHaveBeenCalledWith('Unexpected number in JSON at position 1')
  })

  it('should print parsed json when good json is input', async () => {
    await run(JSON.stringify(goodJsonString))
    expect(console.log).toHaveBeenCalledWith(goodJsonString)
  })
})
