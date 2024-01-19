import axios from 'axios';

describe('GET /', () => {
  it('Api server should work, and return users data', async () => {
    const res = await axios.get(`/api/users`);
    expect(res.status).toBe(200);
  });
});
