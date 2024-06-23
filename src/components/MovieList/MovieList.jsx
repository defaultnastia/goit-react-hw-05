import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

// #region Backdrop-Settings
const tmdbLink = "https://image.tmdb.org/t/p/w500";
const placeholderLink =
  "https://cringemdb.com/img/movie-poster-placeholder.png";
const getBackdrop = (obj) => {
  if (obj.backdrop) return tmdbLink + obj.backdrop;
  if (obj.poster) return tmdbLink + obj.poster;
  return placeholderLink;
};
// #endregion Backdrop-Settings

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li
          className={css.movie}
          key={movie.id}
          style={{ backgroundImage: `url(${getBackdrop(movie)})` }}
        >
          <Link
            to={`/movies/${movie.id}`}
            state={location}
            className={css.backdrop}
          >
            <div className={css.caption}>
              <p className={css.title}>{movie.title}</p>
              <p className={css.year}>{movie.release}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
