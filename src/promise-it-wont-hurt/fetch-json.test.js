import subject from './fetch-json'

describe('fetch json', () => {
  let readSpy, jsonSuccess, jsonFailure, consoleSpy

  jsonSuccess = {
    name: 'cuppo',
    type: 'coffee cup',
    success: 'true'
  }

  jsonFailure = {
    success: 'false'
  }

  beforeEach(() => {
    jest.restoreAllMocks()
    consoleSpy = jest.spyOn(console, 'log')
  })

  it('should fetch json from localhost:1337 as a promise', () => {
    readSpy = jest.fn(() => Promise.resolve('hello'))
    const HTTP = require('q-io/http')
    HTTP.read = readSpy
    subject()
    expect(readSpy).toHaveBeenCalledWith('http://localhost:1337')
  })

  describe('on success', () => {
    beforeEach(() => {
      readSpy = jest.fn(() => Promise.resolve(JSON.stringify(jsonSuccess)))
      const HTTP = require('q-io/http')
      HTTP.read = readSpy
    })

    it('should print json message on success', async () => {
      await subject()
      expect(consoleSpy).toHaveBeenCalledWith(jsonSuccess)
    })
  })

  describe('on failure', () => {
    beforeEach(() => {
      readSpy = jest.fn(() => Promise.resolve(JSON.stringify(jsonFailure)))
      const HTTP = require('q-io/http')
      HTTP.read = readSpy
    })

    it('should print json message on failure', async () => {
      await subject()
      expect(consoleSpy).toHaveBeenCalledWith(jsonFailure)
    })
  })
})
