import request from 'supertest'
import app from './pug'

describe('pug', () => {
  it('should respond with a page showing todays date', async () => {
    const expectedData = new Date().toDateString()
    const response = await request(app).get('/home')
    expect(response.text).toContain(expectedData)
  })
})
