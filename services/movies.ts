import { f64 } from "https://deno.land/x/rand/mod.ts";
import { RANDOM_MOVIE_URL, MOVIE_API_TOKEN } from "../config.ts";

export const randomMovie = async () => {
  return await fetch(RANDOM_MOVIE_URL + MOVIE_API_TOKEN)
    .then(response => {
      return response.json();
    })
    .then(movies => {
      let results = movies.results;

      return results[Math.floor(f64() * results.length)];
    });
};
