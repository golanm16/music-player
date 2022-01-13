import { Song } from "../Song/Song";
import "./Result.css";

export const Result = ({ id, title, artist, art, addSong }) => {
  return (
    <div className="result">
      <button
        onClick={() => {
          addSong(title, artist, id, "youtube");
        }}
      >
        ➕
      </button>
      <div className="song-info">
        <div className="song-thumbnail">
          <img src={art} alt={`${title} thumbnail art`} />
        </div>
        <div className="song-text">
          <h4>💿 {title}</h4>
          <h5>👤 {artist}</h5>
        </div>
      </div>
    </div>
  );
};
