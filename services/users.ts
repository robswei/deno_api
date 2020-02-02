import { fetchData, saveData } from "./db.ts";
import { User } from "../models/user.ts";
import { randomMovie } from "../services/movies.ts";

import createId from "../services/createId.ts";

type UserData = Pick<User, "name" | "email" >;

export const getUsers = async (): Promise<User[]> => {
  return await fetchData();
};

export const createUser = async (userData: UserData): Promise<string> => {
  const users = await fetchData();

  const newUser: User = {
    id: createId(),
    name: String(userData.name),
    email: String(userData.email),
    favorite_movie: await randomMovie(),
    createdAt: new Date()
  };

  await saveData([...users, newUser]);

  return newUser.id;
};
