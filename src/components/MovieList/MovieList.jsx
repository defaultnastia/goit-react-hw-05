import { NavLink } from "react-router-dom";
import css from "./MovieList.module.css";

const tmdbLink = "https://image.tmdb.org/t/p/w500";
const placeholderLink =
  "https://cringemdb.com/img/movie-poster-placeholder.png";

const getBackdrop = (obj) => {
  return obj.backdrop ? tmdbLink + obj.backdrop : placeholderLink;
};

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li
          className={css.movie}
          key={movie.id}
          style={{ backgroundImage: `url(${getBackdrop(movie)})` }}
        >
          <NavLink to={`/movies/${movie.id}`} className={css.backdrop}>
            <div className={css.caption}>
              <p className={css.title}>{movie.title}</p>
              <p className={css.year}>{movie.release_date.slice(0, 4)}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
