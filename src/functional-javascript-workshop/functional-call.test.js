import subject from './functional-call'

describe('functional call', () => {
  it('should behave like slice', () => {
    let nums = [1, 2, 3, 4, 5]
    expect(subject(nums, 0, 2)).toEqual([1, 2])
    expect(subject(nums, 1, 2)).toEqual([2])
  })
})
