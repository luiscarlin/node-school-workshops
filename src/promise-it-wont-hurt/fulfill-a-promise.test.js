describe('fulfill a promise', () => {
  describe('promise', () => {
    describe('timer', () => {
      beforeAll(() => {
        jest.useFakeTimers()
      })

      afterAll(() => {
        jest.runAllTimers()
      })

      it('should have a timeout of 300ms', () => {
        require('./fulfill-a-promise')
        expect(setTimeout).toHaveBeenCalledTimes(1)
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300)
      })
    })

    it('should resolve successfully with message FULFILLED!', () => {
      let promise = require('./fulfill-a-promise')

      expect.assertions(1)

      return promise.then(message => {
        expect(message).toBe('FULFILLED!')
      })
    })
  })

  describe.skip('caller', () => {
    it('should print resolved message to the console', () => {
      jest.spyOn(console, 'log')

      require('./fulfill-a-promise')
      expect(console.log).toHaveBeenCalledWith('FULFILLED!')
    })
  })
})
