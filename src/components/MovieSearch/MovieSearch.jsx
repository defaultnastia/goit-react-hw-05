import { keyWordRequired } from "../../service/toasts";

import css from "./MovieSearch.module.css";

const MovieSearch = ({ handleSearchForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.elements.movie.value) {
      keyWordRequired();
      return;
    }
    handleSearchForm(form.elements.movie.value);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="movie" type="text" autoFocus />
      <button type="submit">Search 🔍</button>
    </form>
  );
};

export default MovieSearch;
