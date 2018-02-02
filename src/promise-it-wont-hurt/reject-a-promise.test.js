import { getPromise } from './reject-a-promise'

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
      expect.assertions(1)

      let promise = getPromise()
      jest.runAllTimers()

      return expect(promise).rejects.toEqual(new Error('REJECTED!'))
    })
  })
  describe.skip('rejection handler', () => {
    it('should print error.message to console log', () => {

    })
  })
  describe.skip('promiseUser', () => {
    it('should get a new promise', () => {

    })
    it('use the rejection handler', () => {

    })
  })
})
