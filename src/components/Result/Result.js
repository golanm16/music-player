import { SongInfo } from "../SongInfo/SongInfo";
import "./Result.css";

export const Result = ({ id, title, artist, art, addSong }) => {
  return (
    <div className="result">
      <SongInfo title={title} artist={artist} art={art} />
      <button
        className="clickable"
        onClick={() => {
          addSong(title, artist, id, "youtube");
        }}
      >
        ➕
      </button>
    </div>
  );
};
