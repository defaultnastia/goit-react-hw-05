import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./MovieReviews.module.css";
import { oopsToast } from "../../service/toasts";
import { fetchMovieReviews } from "../../service/moviesAPI";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results.slice(0, 10));
      } catch (error) {
        oopsToast(error.message);
      }
    };
    fetchCast();
  }, []);

  return (
    <>
      {reviews.length ? (
        <ul className={css.reviewsList}>
          {reviews.map((review) => (
            <li key={review.id}>
              <ReviewItem {...review} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>No reviews here yet 😴</p>
      )}
    </>
  );
};

export default MovieReviews;
