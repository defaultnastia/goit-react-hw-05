import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { useSearchParams } from "react-router-dom";

import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MovieList from "../../components/MovieList/MovieList";
import Totals from "../../components/Totals/Totals";

import css from "./MoviesPage.module.css";

import { fetchMoviesByKey } from "../../service/moviesAPI";
import { sameSearchToast } from "../../service/toasts";
import { useMovieData } from "../../hooks/useMovieData";

const emptyStateImg =
  "https://i.pinimg.com/originals/3c/1a/e7/3c1ae797efafc7257699de4234d9f508.png";

//Loader Settings
const override = {
  display: "block",
  margin: "200px auto",
};

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [totals, setTotals] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [key, setKey] = useState(searchParams.get("key") || null);
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [loader, setLoader] = useState(false);

  const handleLoader = (toggle) => {
    setLoader(toggle);
  };

  const fetch = useMovieData({
    request: fetchMoviesByKey,
    key,
    page,
    handleLoader,
  });

  useEffect(() => {
    if (!key) return;
    fetch().then((data) => {
      if (!data) return;
      setMovies(data.moviesData);
      setTotals(data.totalsData);
    });
  }, [key, page]);

  useEffect(() => {
    page > 1 &&
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        page: page,
      });
  }, [page]);

  const handleSearchForm = (searchValue) => {
    if (searchValue === key) {
      sameSearchToast(searchValue);
      return;
    }
    setPage(1);
    setMovies({});
    setTotals({});
    setSearchParams({
      key: searchValue,
    });
    setKey(searchValue);
  };

  const handleNextButton = () => {
    totals.pages > page && setPage((prev) => prev + 1);
  };

  const handlePreviousButton = () => {
    page > 1 && setPage((prev) => (prev -= 1));
  };

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
      {!movies.length && !loader && (
        <img className={css.emptyState} src={emptyStateImg} />
      )}
      {loader && <HashLoader cssOverride={override} color={"#FE5F55"} />}
    </div>
  );
};

export default MoviesPage;
