import subject from './partial-application-without-bind'

it(subject, () => {
  var info = subject('INFO:')
  info('this is an info message')
  // INFO: this is an info message
})
