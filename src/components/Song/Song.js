import "./Song.css";
import default_thumbnail_img from "../../assets/no_thumbnail.png";
import play_button_img from "../../assets/play-button.png";

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

        <div className="song-info">
          <div className="song-thumbnail">
            <img src={thumbnail_img} alt={`${title} thumbnail art`} />
          </div>
          <div className="song-text">
            <h4>💿 {title}</h4>
            <h5>👤 {artist}</h5>
          </div>
        </div>
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
