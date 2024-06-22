// import { useEffect, useState } from "react";
import { noMoviesFound } from "../service/toasts";

export const useMovieData = ({ request, key, page, id }) => {
  const getMovies = async () => {
    try {
      const { results, total_pages, total_results } = await request({
        key,
        page,
        id,
      });
      if (!total_results) {
        noMoviesFound(key);
        return;
      }
      const moviesData = results.map((movie) => ({
        title: movie.title,
        origTitle: movie.original_title,
        id: movie.id,
        release: movie.release_date?.slice(0, 4),
        backdrop: movie.backdrop_path,
        poster: movie.poster_path,
        overview: movie.overview,
        score: movie.vote_average,
        genreIds: movie.genres,
      }));

      const totalsData = { pages: total_pages, results: total_results };

      return { moviesData, totalsData };
    } catch (error) {
      console.log(error);
    }
  };

  return getMovies;
};
