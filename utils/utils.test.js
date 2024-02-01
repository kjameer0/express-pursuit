const checkIsUppercase = require("./stringUtils");
const supertest = require("supertest");
const app = require("../app");
describe("checks if the string is entirely uppercase characters", () => {
  it("returns false if string is empty", () => {
    expect(checkIsUppercase("")).toBe(false);
  });
  it("returns false input is a number", () => {
    expect(checkIsUppercase(2)).toBe(false);
  });
  it("returns true if all letters are uppercase and there are only letters", () => {
    expect(checkIsUppercase("to be or NOT to be")).toBe(false);
    expect(checkIsUppercase("THAT IS THE QUESTION")).toBe(false);
    expect(checkIsUppercase("HAMLET")).toBe(true);
  });
});

describe("route that responds with capital username with no spaces", () => {
  it("responds with capital username", async () => {
    const response = await supertest(app).get("/users/capitalStudentName/1");
    expect(response.statusCode).toEqual(200);
    expect(response.text).toBe("INGABERGORTON");
  });
});

describe("route that responds with limited users or all users", () => {
  it("responds with all users", async () => {
    const response = await supertest(app).get("/users");
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
  it("responds with all users", async () => {
    const response = await supertest(app).get("/users/?limit=1");
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    // expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBe(1)
  });
  it("responds with all users if limit query is a string", async () => {
    const response = await supertest(app).get("/users/?limit=banana");
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    // expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length > 1).toBe(true)
  });
});
