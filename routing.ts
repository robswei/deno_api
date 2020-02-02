import { Router } from "https://deno.land/x/oak/mod.ts";

import getUsers from "./handlers/getUsers.ts";
import createUser from "./handlers/createUser.ts";

const router = new Router();

router.get("/users", getUsers).post("/users", createUser);

export default router;
