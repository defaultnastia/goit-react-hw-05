import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";
import { useMovieData } from "../../hooks/useMovieData";
import { fetchTrendingMovies } from "../../service/moviesAPI";

//Loader Settings
const override = {
  display: "block",
  margin: "200px auto",
};

const HomePage = () => {
  const [loader, setLoader] = useState(false);
  const handleLoader = (toggle) => {
    setLoader(toggle);
  };
  const fetch = useMovieData({ request: fetchTrendingMovies, handleLoader });

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
      {!!movies.length && <MovieList movies={movies} />}
      {loader && <HashLoader cssOverride={override} color={"#FE5F55"} />}
    </div>
  );
};

export default HomePage;
