import css from "./MovieDetails.module.css";

// #region Poster-Settings
const tmdbLink = "https://image.tmdb.org/t/p/w500";
const placeholderLink =
  "https://cringemdb.com/img/movie-poster-placeholder.png";
const getPoster = (poster) => {
  return poster ? tmdbLink + poster : placeholderLink;
};
// #endregion Poster-Settings

const MovieDetails = ({
  title,
  origTitle,
  release,
  poster,
  overview,
  score,
  genres,
}) => {
  return (
    <div className={css.details}>
      <img src={getPoster(poster)} alt={title} />
      <div>
        <h2>
          {title} ({release})
        </h2>
        <p>Original title: &ldquo;{origTitle}&ldquo;</p>
        <p>Rating: {Math.round(score)}/10</p>
        <h3>Overview</h3>
        <p>{overview || "No Info"}</p>
        <h3>Genres</h3>
        <p>{genres || "No Info"}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
