import subject from './hello-world'

it(subject, () => {
  expect(subject('heLSO')).toBe('HELSO')
})
