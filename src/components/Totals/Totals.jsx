import css from "./Totals.module.css";

const Totals = ({
  page,
  pages,
  results,
  handleNextButton,
  handlePreviousButton,
}) => {
  const handleNextClick = () => {
    handleNextButton();
  };

  return (
    <div className={css.totals}>
      {pages > 1 && <button onClick={handlePreviousButton}>⇦</button>}
      <p>Total movies found: {results}</p>
      <p>
        Page: {page}/{pages}
      </p>
      {pages > 1 && <button onClick={handleNextClick}>⇨</button>}
    </div>
  );
};

export default Totals;
