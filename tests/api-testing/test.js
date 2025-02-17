const { spec } = require('pactum');

describe(`Testing the Posts route on JSONPlaceholder`, async () => {
  it(`Test the return of the 10th item in the posts list and whether it returns with the HTTP status 200 (OK)`, async () => {
    await spec()
        .get("https://jsonplaceholder.typicode.com/posts/10")
        .expectStatus(200)
        .expectJsonLike(
          {
            "userId": 1,
            "id": 10,
            "title": "optio molestias id quia eum",
            "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
          }
        );
  });  
});

describe(`Testing the Comments route on JSONPlaceholder`, async () => {
  it(`Test the return of the 10th item in the posts list and whether it returns with the HTTP status 200 (OK)`, async () => {
    await spec()
        .get("https://jsonplaceholder.typicode.com/comments/2")
        .expectStatus(200)
        .expectJsonLike(
          {
            "userId": 1,
            "id": 10,
            "title": "optio molestias id quia eum",
            "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
          }
        );
  }); 
});

describe(`Testing the Albums route on JSONPlaceholder`, async () => {
   
});

describe(`Testing the Photos route on JSONPlaceholder`, async () => {
   
});

describe(`Testing the Users route on JSONPlaceholder`, async () => {
   
});

describe(`Testing the Todos route on JSONPlaceholder`, async () => {
   
});