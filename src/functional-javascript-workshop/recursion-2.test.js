import subject from './recursion-2'

describe('recursion 2', () => {
  const mockTree = {
    'name': 'lorem-ipsum',
    'version': '0.1.1',
    'dependencies': {
      'optimist': {
        'version': '0.3.7',
        'dependencies': {
          'wordwrap': {
            'version': '0.0.2'
          }
        }
      },
      'inflection': {
        'version': '1.2.6'
      }
    }
  }

  it('should return a list', () => {
    let output = subject(mockTree)
    expect(Array.isArray(output)).toBe(true)
  })

  it.skip('should return a list of dependencies and subdependecies', () => {
    let output = subject(mockTree)
    expect(Array.isArray(output)).toEqual(expect.arrayContaining([ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]))
  })
})
