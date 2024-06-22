import { keyWordRequired } from "../../service/toasts";

import css from "./MovieSearch.module.css";

const MovieSearch = ({ handleSearchForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.elements.movie.value.trim()) {
      keyWordRequired();
      return;
    }
    handleSearchForm(form.elements.movie.value.trim());
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        name="movie"
        type="text"
        autoFocus
        placeholder="Enter a movie name"
      />
      <button type="submit">Search 🔍</button>
    </form>
  );
};

export default MovieSearch;
