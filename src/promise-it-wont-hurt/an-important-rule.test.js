import { run } from './an-important-rule'

describe('an important rule', () => {
  it('should print 1 2 3 4 5 "OH NOES"', async () => {
    const consoleSpy = jest.spyOn(console, 'log')
    await run()
    expect(consoleSpy.mock.calls).toHaveLength(6)
    expect(consoleSpy.mock.calls).toEqual([[1], [2], [3], [4], [5], ['OH NOES']])
  })
})
