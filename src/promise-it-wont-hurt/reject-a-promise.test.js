import { getPromise, onRejectHandler, promiseUser } from './reject-a-promise'

describe('reject a promise', () => {
  jest.useFakeTimers()

  describe('promise', () => {
    it('should have a timeout of 300ms', () => {
      getPromise().catch(() => {})
      jest.runAllTimers()

      expect(setTimeout).toHaveBeenCalledTimes(1)
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300)
    })

    it('should reject with error object containing message "REJECTED!"', async () => {
      let promise = getPromise()
      jest.runAllTimers()

      expect.assertions(1)
      return expect(promise).rejects.toEqual(new Error('REJECTED!'))
    })
  })
  describe('rejection handler', () => {
    it('should print error.message to console log', () => {
      console.log = jest.fn()

      onRejectHandler(new Error('hello'))
      expect(console.log).toHaveBeenCalledWith('hello')
    })
  })

  describe('promiseUser', () => {
    let mockGetPromise, mockOnRejectHandler

    beforeEach(() => {
      mockGetPromise = jest.fn(() => Promise.reject(new Error('some error')))
      mockOnRejectHandler = jest.fn(() => {})
      promiseUser(mockGetPromise, mockOnRejectHandler)
    })

    it('should get a new promise', () => {
      expect(mockGetPromise).toHaveBeenCalled()
    })

    it('should use the on reject handler on rejection', () => {
      expect(mockOnRejectHandler).toHaveBeenCalledWith(new Error('some error'))
    })
  })
})
