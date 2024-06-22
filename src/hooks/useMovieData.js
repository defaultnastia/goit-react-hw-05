// import { useEffect, useState } from "react";
import { noMoviesFound } from "../service/toasts";

export const useMovieData = async (request) => {
  const getMovies = async () => {
    try {
      const { results, total_pages, total_results } = await request();
      if (!total_results) {
        noMoviesFound();
        return;
      }
      const moviesData = results.map((movie) => ({
        title: movie.original_title,
        id: movie.id,
        release: movie.release_date.slice(0, 4),
        backdrop: movie.backdrop_path,
        poster: movie.poster_path,
        overview: movie.overview,
        score: movie.vote_average,
        genres: movie.genre_ids,
      }));

      const totalsData = { pages: total_pages, results: total_results };

      return { moviesData, totalsData };
    } catch (error) {
      console.log(error);
    }
  };

  return await getMovies();
};
