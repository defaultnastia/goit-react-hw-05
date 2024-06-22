import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { useMovieData } from "../../hooks/useMovieData";
import { fetchTrendingMovies } from "../../service/moviesAPI";

const HomePage = () => {
  const movies = useMovieData(fetchTrendingMovies);

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
