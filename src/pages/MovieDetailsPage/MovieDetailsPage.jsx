import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useMovieData } from "../../hooks/useMovieData";
import { fetchMovieById, getGenres } from "../../service/moviesAPI";
import css from "./MovieDetailsPage.module.css";

const tmdbLink = "https://image.tmdb.org/t/p/w500";
const placeholderLink =
  "https://cringemdb.com/img/movie-poster-placeholder.png";

const getBackdrop = (poster) => {
  return poster ? tmdbLink + poster : placeholderLink;
};

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  // const [genres, setGenres] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetch().then((data) => {
      if (!data) return;
      setMovie(data.moviesData[0]);
    });
  }, []);

  if (location.state) setMovie(location.state);

  const fetch = useMovieData({ request: fetchMovieById, id: movieId });

  const { title, origTitle, release, poster, overview, score, genreIds } =
    movie;

  useEffect(() => {
    const getGenres = async () => {
      try {
        const gen = await getGenres();
        return gen;
      } catch (error) {
        console.log(error);
      }
    };

    const gList = getGenres();
    console.log(gList);
  }, []);

  return (
    <div className={css.pageBox}>
      <NavLink className={css.back}>Go Back</NavLink>
      <div className={css.details}>
        <img src={getBackdrop(poster)} alt={title} />
        <div>
          <h2>
            {title} ({release})
          </h2>
          <p>Original title: &ldquo;{origTitle}&ldquo;</p>
          <p>Rating: {score}/10</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p></p>
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
