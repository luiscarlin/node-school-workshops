import { runCaughtRejection, runCaughtError, runCaughtRejectBeforeError, runCaughtErrorBeforeRejection } from './shortcuts'

describe('shortcuts', () => {
  beforeEach(() => {
    console.log = jest.fn()
  })

  describe('runCaughtRejection', () => {
    it('should catch rejection and print error message', async () => {
      expect.assertions(1)
      await runCaughtRejection()
      expect(console.log).toHaveBeenCalledWith('getPromiseReject - REJECTED')
    })
  })

  describe('runCaughtError', () => {
    it('should catch error and print error message', async () => {
      expect.assertions(1)
      await runCaughtError()
      expect(console.log).toHaveBeenCalledWith('getPromiseThrowingError - ERROR')
    })
  })

  describe('runCaughtRejectBeforeError', () => {
    it('should catch reject and print error message even if error thrown below chain', async () => {
      expect.assertions(1)
      await runCaughtRejectBeforeError()
      expect(console.log).toHaveBeenCalledWith('getPromiseReject - REJECTED')
    })
  })

  describe('runCaughtErrorBeforeRejection', () => {
    it('should catch error and print error message even if rejection happening below chain', async () => {
      expect.assertions(1)
      await runCaughtErrorBeforeRejection()
      expect(console.log).toHaveBeenCalledWith('getPromiseThrowingError - ERROR')
    })
  })
})
