const expect = require('expect');
const supertest = require('supertest');
const app = require('../server');
const uniqueEmailCount = require('../services/uniqueEmailCount');

describe('Testing for unique email count', () => {
  afterAll(() => {
    request.close();
    app.destroy();
  });
  it('can return the count of unique emails', () => {
    const emails = [
      'test.email@gmail.com',
      'test.email+spam@gmail.com',
      'testemail@gmail.com'
    ];
    count = uniqueEmailCount(emails);
    expect(count).toBe(1);
  });
  it('can return the count of unique emails as 0 when emails are empty list', () => {
    const emails = [];
    count = uniqueEmailCount(emails);
    expect(count).toBe(0);
  });
});
