import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { Toaster } from "react-hot-toast";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesByKey } from "../../service/moviesAPI";
import Totals from "../../components/Totals/Totals";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import { useMovieData } from "../../hooks/useMovieData";

const emptyStateImg =
  "https://i.pinimg.com/originals/3c/1a/e7/3c1ae797efafc7257699de4234d9f508.png";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [key, setKey] = useState(null);
  const [page, setPage] = useState(1);
  const [totals, setTotals] = useState({});

  const fetch = useMovieData(() => fetchMoviesByKey(key, page));

  useEffect(() => {
    const { moviesData, totalsData } = (async () => await fetch)();
    console.log(moviesData, totalsData);
    // setMovies(movies);
    // setTotals(totals);
  }, [key, page]);

  // setMovies({});
  // setTotals({});

  const handleSearchForm = (searchValue) => {
    setPage(1);
    setKey(searchValue);
  };

  const handleNextButton = () => {
    totals.totals.pages > page && setPage((prev) => prev + 1);
  };

  const handlePreviousButton = () => {
    page > 1 && setPage((prev) => (prev -= 1));
  };

  return (
    <div className={css.container}>
      {/* <MovieSearch handleSearchForm={handleSearchForm} /> */}
      {/* {!!totals.totals.results && (
        <Totals
          {...totals.totals}
          handleNextButton={handleNextButton}
          handlePreviousButton={handlePreviousButton}
          page={page}
        />
      )}
      {!!movies.movies.length && <MovieList movies={movies.movies} />}
      {!movies.movies.length && (
        <img className={css.emptyState} src={emptyStateImg} />
      )}
      <div>
        <Toaster position="top-right" />
      </div> */}
    </div>
  );
};

export default MoviesPage;
