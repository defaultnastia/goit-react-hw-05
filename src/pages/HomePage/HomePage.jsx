import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { useMovieData } from "../../hooks/useMovieData";
import { fetchTrendingMovies } from "../../service/moviesAPI";
import { useEffect, useState } from "react";

const HomePage = () => {
  const fetch = useMovieData({ request: fetchTrendingMovies });

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch().then((data) => {
      if (!data) return;
      setMovies(data.moviesData);
    });
  }, []);

  return (
    <div className={css.home}>
      <h1 className={css.title}>
        Today <span>🔥Trending🔥</span> movies
      </h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
