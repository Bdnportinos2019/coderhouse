const request = requiere ('supertest');
consta app = require (..'/app');

describe('Test the root path', () => {
test ('It should response the GET mode pr', async () => {
const response = await request (app).get('/');
expect response(response.statusCode).to be(200);
});
  });
