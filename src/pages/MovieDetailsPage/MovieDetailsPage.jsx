import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { useMovieData } from "../../hooks/useMovieData";
import { fetchMovieById } from "../../service/moviesAPI";
import css from "./MovieDetailsPage.module.css";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState("");
  const { movieId } = useParams();
  const location = useLocation();

  const setGenresList = (genres) => {
    setGenres(genres.map((genre) => genre.name).join(", "));
  };

  const fetch = useMovieData({ request: fetchMovieById, id: movieId });

  useEffect(() => {
    fetch().then((data) => {
      if (!data) return;
      setMovie(data.moviesData[0]);
      setGenresList(data.moviesData[0].genreIds);
    });
  }, []);

  return (
    <div className={css.pageBox}>
      <Link to={location.state || "/movies"} className={css.back}>
        Go Back
      </Link>
      <MovieDetails {...movie} genres={genres} />
      <div className={css.additional}>
        <ul>
          <li>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
