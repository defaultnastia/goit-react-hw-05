import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { Toaster } from "react-hot-toast";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesByKey } from "../../service/moviesAPI";
import Totals from "../../components/Totals/Totals";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import { noMoviesFound } from "../../service/toasts";

const emptyStateImg =
  "https://i.pinimg.com/originals/3c/1a/e7/3c1ae797efafc7257699de4234d9f508.png";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [key, setKey] = useState(null);
  const [page, setPage] = useState(1);
  const [totals, setTotals] = useState({});

  const handleSearchForm = (searchValue) => {
    setPage(1);
    setMovies({});
    setTotals({});
    setKey(searchValue);
  };

  const handleNextButton = () => {
    totals.pages > page && setPage((prev) => prev + 1);
  };

  const handlePreviousButton = () => {
    page > 1 && setPage((prev) => (prev -= 1));
  };

  useEffect(() => {
    if (!key) return;
    const getMovies = async () => {
      try {
        const { results, total_pages, total_results } = await fetchMoviesByKey(
          key,
          page
        );
        if (!total_results) {
          noMoviesFound(key);
          return;
        }
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
        setTotals({ pages: total_pages, results: total_results });
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [key, page]);

  return (
    <div className={css.container}>
      <MovieSearch handleSearchForm={handleSearchForm} />
      {!!totals.results && (
        <Totals
          {...totals}
          handleNextButton={handleNextButton}
          handlePreviousButton={handlePreviousButton}
          page={page}
        />
      )}
      {!!movies.length && <MovieList movies={movies} />}
      {!movies.length && <img className={css.emptyState} src={emptyStateImg} />}
      <div>
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default MoviesPage;
