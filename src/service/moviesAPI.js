import axios from "axios";

const bearerToken =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmUwYTA5YThiNDM5Y2YyMjZlODkzYTQzMWQ4YjcyMCIsInN1YiI6IjY2NzU3NmU4Y2NmNzVkZTIzNjI5MDIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.itPyt07SUyiYRwcadOu3yK2ezMV9RPNB-YSDWLZxgLE";

const moviesDBInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { accept: "application/json", Authorization: bearerToken },
});

export const fetchTrendingMovies = async () => {
  const result = await moviesDBInstance.get(
    "/trending/movie/day?language=en-US"
  );
  return result.data;
};

export const fetchMoviesByKey = async ({ key, page }) => {
  const result = await moviesDBInstance.get(
    `/search/movie?query=${key}&include_adult=false&language=en-US&page=${page}`
  );

  return result.data;
};

export const fetchMovieById = async ({ id }) => {
  const result = await moviesDBInstance.get(`/movie/${id}`);
  return { results: [result.data], total_results: 1 };
};
