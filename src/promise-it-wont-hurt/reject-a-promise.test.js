import { getPromise, onRejectHandler } from './reject-a-promise'

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

  describe.skip('promiseUser', () => {
    it('should get a new promise', () => {
      // jest.mock('./reject-a-promise')
      // let getPromise = require('./reject-a-promise').getPromise
      // getPromise.mockImplementationOnce(() => Promise.reject(new Error('REJECTED!')))

      // return onRejectHandler()
      //   .catch(error => {
      //     expect(error).toBe(expectedError)
      //   })
    })
    it('use the rejection handler', () => {

    })
  })
})
