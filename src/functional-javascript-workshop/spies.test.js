import subject from './spies'

it('spies', () => {
  let fakeObj = {
    fakeMethod: () => {}
  }

  var spy = subject(fakeObj, 'fakeMethod')

  fakeObj.fakeMethod()
  fakeObj.fakeMethod()
  fakeObj.fakeMethod()

  expect(spy.count).toBe(3)
})
