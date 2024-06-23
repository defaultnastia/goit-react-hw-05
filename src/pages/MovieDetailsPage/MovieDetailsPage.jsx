import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import css from "./MovieDetailsPage.module.css";
import { useMovieData } from "../../hooks/useMovieData";
import { fetchMovieById } from "../../service/moviesAPI";
import { HashLoader } from "react-spinners";

//Loader Settings
const override = {
  display: "block",
  margin: "200px auto",
};

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState("");
  const { movieId } = useParams();
  const location = useLocation();
  const [loader, setLoader] = useState(false);
  const handleLoader = (toggle) => {
    setLoader(toggle);
  };

  const setGenresList = (genres) => {
    setGenres(genres.map((genre) => genre.name).join(", "));
  };

  const fetch = useMovieData({
    request: fetchMovieById,
    id: movieId,
    handleLoader,
  });

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
      {!!movie.title && <MovieDetails {...movie} genres={genres} />}
      {loader && <HashLoader cssOverride={override} color={"#FE5F55"} />}
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
