import subject from './trampoline'

describe('trampoline', () => {
  it('should run function num of times for smaller nums', () => {
    let count = 0
    let times = 100
    subject(() => count++, times, (num) => {
      expect(num).toBe(times)
    })
  })

  it('should not cause a stackoverflow for larger nums', () => {
    let count = 0
    let times = 100000
    subject(() => count++, times, (num) => {
      expect(num).toBe(times)
    })
  })
})
