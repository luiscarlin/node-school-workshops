import { getPromise, onRejected, run } from './to-reject-or-not'

describe('to reject or not', () => {
  describe('getPromise', () => {
    it('returns a promise that resolves to "I FIRED"', () => {
      expect.assertions(1)
      return expect(getPromise()).resolves.toEqual('I FIRED')
    })
  })

  describe('rejection handler', () => {
    it('should print error.message to console log', () => {
      console.log = jest.fn()

      onRejected(new Error('hello'))
      expect(console.log).toHaveBeenCalledWith('hello')
    })
  })

  describe('promiseUser', () => {
    let mockGetPromise, mockOnRejected

    beforeEach(() => {
      console.log = jest.fn()
      mockGetPromise = jest.fn(() => Promise.resolve('SUCCESS'))
      mockOnRejected = jest.fn(() => {})
      run(mockGetPromise, mockOnRejected)
    })

    it('should get a new promise', () => {
      expect(mockGetPromise).toHaveBeenCalled()
    })

    it('should use console.log on success', () => {
      expect(console.log).toHaveBeenCalledWith('SUCCESS')
    })

    it('should not use onReject function', () => {
      expect(mockOnRejected).not.toHaveBeenCalled()
    })
  })
})
