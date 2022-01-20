import "./Song.css";
import { SongInfo } from "../SongInfo/SongInfo";
import { YoutubeRating } from "../YoutubeRating/YoutubeRating";
import { useContext } from "react";
import songContext from "../../contexts/SongContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const Song = ({ title, artist, id, link, provider }) => {
  const thumbnail_img = provider
    ? `https://img.youtube.com/vi/${link}/0.jpg`
    : null;
  const { removeSong, playSong, currentSongId, stopSong } =
    useContext(songContext);
  return (
    <div className="Song">
      <div className="container-left">
        <div
          className="clickable removeBtn"
          onClick={() => {
            if (removeSong) {
              removeSong(id);
            }
          }}
        >
          <DeleteForeverIcon />
        </div>

        <SongInfo title={title} artist={artist} art={thumbnail_img} />
        {provider && <YoutubeRating id={link} />}
      </div>
      <div
        className="clickable playBtn"
        onClick={() => {
          if (playSong && currentSongId !== id) {
            console.log("playing song", link);
            playSong(id);
          } else if (currentSongId) {
            stopSong();
          }
        }}
      >
        {currentSongId !== id ? <PlayArrowIcon /> : <StopIcon />}
      </div>
    </div>
  );
};
