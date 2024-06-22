import css from "./ReviewItem.module.css";

const ReviewItem = ({ author, content }) => {
  return (
    <div className={css.review}>
      <p className={css.author}>{author}</p>
      <p className={css.content}>{content}</p>
    </div>
  );
};

export default ReviewItem;
