const { spec } = require('pactum');

describe(`Testing the Posts route on JSONPlaceholder`, async () => {
  it(`Test the return of the 10th item in the posts list and whether it returns with the HTTP status 200 (OK)`, async () => {
    await spec()
        .get("https://jsonplaceholder.typicode.com/posts/10")
        .expectStatus(200)
        .expectJsonSchema({
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "title": "Post",
          "type": "object",
          "properties": {    
            "userId": {      
              "description": "User identifier",     
              "type": "integer"    
            },
            "id": {"type": "integer"},
            "title": {"type": "string"},
            "body": {"type": "string"}
          },
            "required": ["userId", "id"]
             
        })
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
        .expectStatus( 200 )
        .expectJsonSchema({
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "title": "Post",
          "type": "object",
          "properties": {
            "postId": {
              "description": "The unique identifier for a post",
              "type": "integer"
            },
            "id": { "type": "integer" },
            "name": { "type": "string" },
            "email": {
              "description": "Email of the user",
              "type": "string",
              "format": "email"
            },
            "body": { "type": "string" }
          },
          "required": ["postId", "id", "name", "email"]
        })
        .expectJsonLike(
          {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
          }
        );
  });

});

describe(`Testing the Albums route on JSONPlaceholder`, async () => {
  it(`Test if albums route returns everything OK`, async () => {
    await spec()
        .get("https://jsonplaceholder.typicode.com/albums/15")
        .expectStatus(200)
  });

});
