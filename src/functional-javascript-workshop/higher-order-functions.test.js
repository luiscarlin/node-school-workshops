import subject from './higher-order-functions'

it('higher-order-functions', () => {
  let mockFunc = jest.fn()

  subject(mockFunc, 3)
  expect(mockFunc.mock.calls).toHaveLength(3)
})
