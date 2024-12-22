export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  // Mock database
  const users = [{ email: "test@example.com", password: "password123" }];

  const user = users.find((u) => u.email === email && u.password === password);

  return user
    ? { success: true }
    : { success: false, message: "Invalid credentials" };
});
