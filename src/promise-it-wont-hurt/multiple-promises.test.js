import subject from './multiple-promises'

describe('multiple promises', () => {
  it('should console.log the output from both promises', async () => {
    const consoleSpy = jest.spyOn(console, 'log')
    await subject(Promise.resolve('hello'), Promise.resolve('bye'))
    expect(consoleSpy.mock.calls).toHaveLength(1)
    expect(consoleSpy.mock.calls).toEqual([[['hello', 'bye']]])
  })
})
