import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CastMember from "../CastMember/CastMember";
import css from "./MovieCast.module.css";
import { oopsToast } from "../../service/toasts";
import { fetchMovieCredits } from "../../service/moviesAPI";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast.slice(0, 20));
      } catch (error) {
        oopsToast(error.message);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {cast.length ? (
        <ul className={css.castList}>
          {cast.map((crew) => (
            <li key={crew.id}>
              <CastMember {...crew} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noCast}>No known cast here yet 😴</p>
      )}
    </>
  );
};

export default MovieCast;
