# deno_api
Messing around with Deno

Using Oak -> A middleware framework for Deno's http server

Database consists of a local JSON file

# Current Routes

| Method | Route | Body | Response |
| --- | --- | --- |
| `GET` | `/users` | N/A | Return all users in db |
| `POST` | `/users` | `name: string`, `email: string` | Creates a user and stores into db |
