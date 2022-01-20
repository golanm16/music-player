import { Add } from "@mui/icons-material";
import { SongInfo } from "../SongInfo/SongInfo";
import { YoutubeRating } from "../YoutubeRating/YoutubeRating";
import "./Result.css";

export const Result = ({ id, title, artist, art, addSong, artistImg }) => {
  return (
    <div className="result">
      <SongInfo title={title} artist={artist} art={art} artistImg={artistImg} />
      <YoutubeRating id={id} />
      <button
        className="clickable addBtn"
        onClick={() => {
          addSong(title, artist, id, "youtube");
        }}
      >
        <Add />
      </button>
    </div>
  );
};
