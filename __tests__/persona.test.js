import 'babel-polyfill';
import request from 'supertest';
import app from '../server';

describe('GET /v1/persona/:personaId', () => {
  test('It should return a persona category_name', async () => {
    return request(app)
      .get('/v1/persona/123456789012345678901234567890123456')
      .expect(200)
      .then(response => {
        expect(response.body.success).toBe(true);
        expect(response.body.data).toBe('nl_simple');
      });
  });
});