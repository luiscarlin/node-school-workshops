import request from 'supertest'
import app from './good-old-form'

describe('Good Old Form', () => {
  it('should return data in reverse order when doing a post to /form', async () => {
    const response = await request(app).post('/form').send(`str=abcdefg`)
    expect(response.text).toBe('gfedcba')
  })
})
