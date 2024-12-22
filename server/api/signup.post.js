export default defineEventHandler(async (event) => {
  const { name, email, password } = await readBody(event);

  // Mock database logic (just a placeholder for real DB interaction)
  if (email && password && name) {
    return { success: true, message: "User created successfully!" };
  } else {
    return { success: false, message: "Invalid input" };
  }
});
