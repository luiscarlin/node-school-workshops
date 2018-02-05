import { getPromise, run } from './always-asynchronous'

describe('always syncrhonous', () => {
  describe('getPromise', () => {
    it('should return a promise that resolves with "PROMISE VALUE"', () => {
      expect.assertions(1)
      return expect(getPromise()).resolves.toEqual('PROMISE VALUE')
    })
  })
  describe('run', () => {
    let mockGetPromise

    beforeEach(() => {
      console.log = jest.fn()
      mockGetPromise = jest.fn(() => Promise.resolve('HELLO'))
      run(mockGetPromise)
    })

    it('should call getPromise to get a new promise', () => {
      expect(mockGetPromise).toHaveBeenCalled()
    })
    it('should print MAIN PROGRAM and then output the success of the promise', () => {
      expect(console.log).toHaveBeenCalledWith('MAIN PROGRAM')
      expect(console.log).toHaveBeenCalledWith('HELLO')
      expect(console.log).toHaveBeenCalledTimes(2)
    })
  })
})
