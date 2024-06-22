import { useEffect, useState } from "react";

export const useMovieData = (request) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await request();
        setMovies(
          results.map((movie) => ({
            title: movie.original_title,
            id: movie.id,
            release: movie.release_date.slice(0, 4),
            backdrop: movie.backdrop_path,
            poster: movie.poster_path,
            overview: movie.overview,
            score: movie.vote_average,
            genres: movie.genre_ids,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return movies;
};
