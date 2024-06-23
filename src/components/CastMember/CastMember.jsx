import css from "./CastMember.module.css";

// #region Picture-Settings
const tmdbLink = "https://image.tmdb.org/t/p/w500";
const placeholderLink =
  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
const getPicture = (picture) => {
  return picture ? tmdbLink + picture : placeholderLink;
};
// #endregion Picture-Settings

const CastMember = ({ profile_path, name, character, department }) => {
  return (
    <div className={css.member}>
      <img src={getPicture(profile_path)} alt={name} className={css.photo} />
      <p className={css.name}>{name}</p>
      <p className={css.as}>As: {character || department || "No Info"}</p>
    </div>
  );
};

export default CastMember;
