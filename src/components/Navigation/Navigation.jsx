import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.menu}>
      <NavLink to="/" className={css.option}>
        Home
      </NavLink>
      <NavLink to="movies" className={css.option}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
