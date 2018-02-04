import { getPromise } from './to-reject-or-not'

describe('to reject or not', () => {
  describe('getPromise', () => {
    it('returns a promise that resolves to "I FIRED"', () => {
      expect.assertions(1)
      return expect(getPromise()).resolves.toEqual('I FIRED')
    })
  })
})
