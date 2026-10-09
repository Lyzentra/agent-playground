const request = require('supertest');
const app = require('../src/index');

describe('GET /hello', () => {
  it('should return HTTP status 200 and a greeting message', async () => {
    const response = await request(app).get('/hello');
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, world!');
  });
});