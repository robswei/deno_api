import { fetchData } from "./db.ts";
import { User } from "../models/user.ts";

export const getUsers = async (): Promise<User[]> => {
  return await fetchData();
};
