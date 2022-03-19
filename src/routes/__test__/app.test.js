const request = require("supertest");
const app = require("../../app");

describe(`[App]`, () => {
  it(`route GET /api responds with 200 Hello, from the GET /api route`, async () => {
    await request(app)
      .get("/api")
      .expect(200, "Hello, from the GET /api route");
  });

  it(`route POST /api responds with 200 Hello, from the POST /api route`, async () => {
    await request(app)
      .post("/api")
      .expect(200, "Hello, from the POST /api route");
  });
});
