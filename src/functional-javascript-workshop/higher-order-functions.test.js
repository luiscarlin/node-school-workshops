import subject from './higher-order-functions'

it(subject, () => {
  let mockFunc = jest.fn()

  subject(mockFunc, 3)
  expect(mockFunc.mock.calls).toHaveLength(3)
})
