const env = Deno.env();
export const DB_PATH = env.DB_PATH || "./db/users.json";
export const APP_HOST = env.APP_HOST || "127.0.0.1";
export const APP_PORT = env.APP_PORT || 5000;

export const RANDOM_MOVIE_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key="
export const MOVIE_API_TOKEN = "f5cdb63de60baacd2e24a545821e3cda"