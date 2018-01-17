import subject from './call'

describe('call', () => {
  it('takes a variable number of arguments without throwing error', () => {
    subject({boolean: true}, {hello: 'value'}, {num: 2}, {someprop: 'somevalue'}, {}, {})
    subject()
  })

  it('returns number of objects passed as arguments that contain "quack" property', () => {
    let noDuck = Object.create({quack: true})
    let duck = {quack: true}
    let output = subject(duck, noDuck)

    expect(output).toBe(1)
  })

  it('returns 0 if none of the objects being passed as arguments contain a "quack" property', () => {
    let noDuck = Object.create({quack: true})
    let noDuckEither = {someFunc: (a) => a, someProp: 5}
    let output = subject(noDuck, noDuckEither)

    expect(output).toBe(0)
  })
})
