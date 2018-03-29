import request from 'supertest'
import app from './hello-world'

describe('Hello World', () => {
  it('should respond with hello world when GET /home', async () => {
    const response = await request(app).get('/home')
    expect(response.text).toBe('Hello World!')
  })
})
