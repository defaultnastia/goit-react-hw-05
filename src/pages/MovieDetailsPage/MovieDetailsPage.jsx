import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useMovieData } from "../../hooks/useMovieData";
import { fetchMovieById } from "../../service/moviesAPI";
import css from "./MovieDetailsPage.module.css";

// #region Poster-Settings
const tmdbLink = "https://image.tmdb.org/t/p/w500";
const placeholderLink =
  "https://cringemdb.com/img/movie-poster-placeholder.png";

const getPoster = (poster) => {
  return poster ? tmdbLink + poster : placeholderLink;
};
// #endregion Poster-Settings

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState("");
  const { movieId } = useParams();
  const location = useLocation();

  const { title, origTitle, release, poster, overview, score } = movie;

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
      <NavLink to={location.state || "/movies"} className={css.back}>
        Go Back
      </NavLink>
      <div className={css.details}>
        <img src={getPoster(poster)} alt={title} />
        <div>
          <h2>
            {title} ({release})
          </h2>
          <p>Original title: &ldquo;{origTitle}&ldquo;</p>
          <p>Rating: {score}/10</p>
          <h3>Overview</h3>
          <p>{overview || "No Info"}</p>
          <h3>Genres</h3>
          <p>{genres || "No Info"}</p>
        </div>
      </div>
      <div>
        <p>Additional Information</p>
        <NavLink>Cast</NavLink>
        <NavLink>Reviews</NavLink>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
