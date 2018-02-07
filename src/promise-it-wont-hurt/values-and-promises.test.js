import run from './values-and-promises'

describe('values and promises', () => {
  console.log = jest.fn()

  it('should print DR. MANHATTAN', async () => {
    await run()
    expect(console.log).toHaveBeenCalledWith('DR. MANHATTAN')
  })
})
