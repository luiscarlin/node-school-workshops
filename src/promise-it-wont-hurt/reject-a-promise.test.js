import { getPromise } from './reject-a-promise'

describe('reject a promise', () => {
  describe('promise', () => {
    describe('timer', () => {
      beforeAll(() => {
        jest.useFakeTimers()
      })

      afterAll(() => {
        jest.runAllTimers()
      })

      it('should have a timeout of 300ms', () => {
        getPromise()
        expect(setTimeout).toHaveBeenCalledTimes(1)
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300)
      })
    })
    it.skip('should reject with error containing message "REJECTED!"', async () => {

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
