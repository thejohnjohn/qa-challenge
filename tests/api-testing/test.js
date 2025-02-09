const { spec } = require('pactum');

describe('Testing GET method on PokeAPI', async () => {
  it('Testing the 200OK return', async () => {
    await spec()
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .expectStatus(200);
  });  
});
