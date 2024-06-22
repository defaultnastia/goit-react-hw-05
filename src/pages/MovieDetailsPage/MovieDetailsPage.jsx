import { NavLink, useLocation } from "react-router-dom";

const tmdbLink = "https://image.tmdb.org/t/p/w500";
const placeholderLink =
  "https://cringemdb.com/img/movie-poster-placeholder.png";

const getBackdrop = (poster) => {
  return poster ? tmdbLink + poster : placeholderLink;
};

const MovieDetailsPage = () => {
  const location = useLocation();

  // console.log(location);

  const { title, id, release, poster, overview, score, genres } =
    location.state;

  return (
    <>
      <NavLink>Go Back</NavLink>
      <div>
        <img src={getBackdrop(poster)} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>Rating: {score}/10</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p></p>
        </div>
        <div>
          <p>Additional Information</p>
          <NavLink>Cast</NavLink>
          <NavLink>Reviews</NavLink>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
