import 'babel-polyfill';
import request from 'supertest';
import app from '../server';

describe('GET /nonexistingendpoint', () => {
  test('It should say the endpoint does not exists', async () => {
    return request(app)
      .get('/nonexistingendpoint')
      .expect(404)
      .then(response => {
        expect(response.text).toBe('Not a valid endpoint');
      });
  });
});