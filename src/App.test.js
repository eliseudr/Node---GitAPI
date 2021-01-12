test("Should show all users since this number", async () => {
  let url = `https://api.github.com/users?since={1}`;
  let data = await request(app)
  .get(url)
  .expect(200);
  expect(data.text).toBe("{}");
})

test("Should show the especific repo of the user", async () => {
  let url = `https://api.github.com/users/eliseudr/repos`;
  let data = await request(app)
  .get(url)
  .expect(200);
  expect(data.text).toBe("{}");
})

test("Should show the details of a user", async () => {
  let url = `https://api.github.com/users/eliseudr`;
  let data = await request(app)
  .get(url)
  .expect(200);
  expect(data.text).toBe("{}");
})