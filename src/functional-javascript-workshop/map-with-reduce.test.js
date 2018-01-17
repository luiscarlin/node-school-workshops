import subject from './map-with-reduce.js'

it('map-reduce', () => {
  var nums = [1, 2, 3, 4, 5]

  var output = subject(nums, (item) => item * 2)

  expect(output).toEqual([2, 4, 6, 8, 10])
})
