import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.box}>
      <p>
        The requested URL was not found on our server.
        <Link to="/"> Go to the homepage</Link>
      </p>
      <div className={css.quote}>
        <div className={css.error}>
          <p>404</p>
          <p>ERROR</p>
        </div>
        <p>This is not the webpage you are looking for!</p>
      </div>
      <Link to="/movies/11" className={css.obi}>
        🍿 Obi-Wan, Star Wars: Episode IV - A New Hope (1977)
      </Link>
    </div>
  );
};

export default NotFoundPage;
