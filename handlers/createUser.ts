import { createUser } from "../services/users.ts";

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }

  const {
    value: { name, email }
  } = await request.body();

  if (!name || !email) {
    response.status = 422;
    response.body = { msg: "Incorrect user data. Name and email are required" };
    return;
  }

  const userId = await createUser({ name, email });

  response.body = { msg: "User created", userId };
};