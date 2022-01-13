import "./SongInfo.css";
import no_thumbnail from "../../assets/no_thumbnail.png";

export const SongInfo = ({ title, artist, art }) => {
  return (
    <div className="song-info">
      <div className="song-thumbnail">
        <img src={art ? art : no_thumbnail} alt={`${title} thumbnail art`} />
      </div>
      <div className="song-text">
        <h4>💿 {title}</h4>
        <h5>👤 {artist}</h5>
      </div>
    </div>
  );
};
