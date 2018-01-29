describe('warm up ', () => {
  jest.useFakeTimers()

  it('should print execute after 300 ms', () => {
    require('./warm-up')
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300)
  })
})
