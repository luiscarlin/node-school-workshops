import subject from './map'

it('map', () => {
  expect(subject([2, 5, 6, 8, 9]).sort()).toEqual([4, 10, 12, 16, 18].sort())
})
