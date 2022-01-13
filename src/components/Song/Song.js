import "./Song.css";
import default_thumbnail_img from "../../assets/no_thumbnail.png";
import play_button_img from "../../assets/play-button.png";
import { SongInfo } from "../SongInfo/SongInfo";

export const Song = ({
  title,
  artist,
  playSong,
  id,
  link,
  provider,
  removeSong,
}) => {
  const thumbnail_img = provider
    ? `https://img.youtube.com/vi/${link}/0.jpg`
    : default_thumbnail_img;
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
          🗑
        </div>

        <SongInfo title={title} artist={artist} art={thumbnail_img} />
      </div>
      <div
        className="clickable playBtn"
        onClick={() => {
          if (playSong) {
            console.log("in song", id);
            playSong(id);
          }
        }}
      >
        <img className="play-btn-img" src={play_button_img} alt="play button" />
      </div>
    </div>
  );
};
