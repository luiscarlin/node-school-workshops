import subject from './call'

it(subject, () => {
  let notDuck = Object.create({quack: true})
  let duck = {quack: true}
  let output = subject(duck, notDuck)

  expect(output).toBe(1)
})
