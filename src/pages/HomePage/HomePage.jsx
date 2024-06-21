import { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import { fetchTrendingMovies } from "../../service/moviesAPI";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(
          results.map((movie) => ({
            title: movie.original_title,
            id: movie.id,
            release_date: movie.release_date,
            backdrop: movie.backdrop_path,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
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
