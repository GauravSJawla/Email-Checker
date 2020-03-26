const expect = require('expect');
const supertest = require('supertest');
const app = require('../server');
const request = supertest(app);

describe('unique email checker', () => {
  afterAll(() => {
    request.close();
    app.destroy();
  });
  it('can return the count of unique emails', async () => {
    await request
      .post('/api/uniqueEmailChecker/emails')
      .send([
        'test.email@gmail.com',
        'test.email+spam@gmail.com',
        'testemail@gmail.com'
      ])
      .expect(response => {
        expect(response.status).toBe(200), expect(response.body).toBe(1);
      });
  });
  it('count of email is 0 when emails are null', async () => {
    await request
      .post('/api/uniqueEmailChecker/emails')
      .send([])
      .expect(response => {
        expect(response.status).toBe(400);
      });
  });
});
