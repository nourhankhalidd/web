const request = require('supertest');
const app = require('../server');
const server = app.listen(3000);

describe('GET /', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from CI/CD Pipeline!');
  });
  
  afterAll(() => {
    server.close(); 
  });
});
