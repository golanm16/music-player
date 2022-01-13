import { SongInfo } from "../SongInfo/SongInfo";
import { SongRating } from "../SongRating/SongRating";
import "./Result.css";

export const Result = ({ id, title, artist, art, addSong }) => {
  return (
    <div className="result">
      <SongInfo title={title} artist={artist} art={art} />
      <SongRating id={id} />
      <button
        className="clickable addBtn"
        onClick={() => {
          addSong(title, artist, id, "youtube");
        }}
      >
        ➕
      </button>
    </div>
  );
};
