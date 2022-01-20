import "./SongInfo.css";
import no_thumbnail from "../../assets/compact-disk.png";

export const SongInfo = ({ title, artist, art, artistImg }) => {
  return (
    <div className="song-info">
      <div className="song-thumbnail">
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        <img src={art ? art : no_thumbnail} alt={`${title} thumbnail art`} />
      </div>
      <div className="song-text">
        <h4>💿 {title}</h4>
        <h5>
          {artistImg ? (
            <img src={artistImg.url} alt={artist} height="30" />
          ) : (
            `👤`
          )}
          {artist}
        </h5>
      </div>
    </div>
  );
};
