import subject from './currying'

describe('currying', () => {
  it('should call the function to curry and return its result', () => {
    let functionSpy = jest.fn((one, two) => { return one + two })

    let output = subject(functionSpy)(1)(2)
    expect(functionSpy).toHaveBeenCalledWith(1, 2)
    expect(output).toBe(3)
  })

  it('should return 3 functions for 3 args of function to curry', () => {
    let functionToCurry = (one, two, three) => {
      return one + two + three
    }

    let firstFunc = subject(functionToCurry)
    expect(firstFunc).toEqual(expect.any(Function))

    let secondFunc = firstFunc(1)
    expect(secondFunc).toEqual(expect.any(Function))

    let thirdFunc = secondFunc(2)
    expect(thirdFunc).toEqual(expect.any(Function))
  })

  it('should allow us to reuse inner function to generate multiple outputs', () => {
    let functionSpy = jest.fn((one, two) => { return one + two })

    let getOutput = subject(functionSpy)(1)
    expect(getOutput(2)).toBe(3)
    expect(getOutput(1)).toBe(2)
    expect(getOutput(10)).toBe(11)
  })
})
