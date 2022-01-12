import "./Song.css";

export const Song = ({ title, artist, playSong, id }) => {
  return (
    <div className="Song">
      song: {title} <br />
      by: {artist}
      <div
        className="playBtn"
        onClick={() => {
          console.log("in song", id);
          playSong(id);
        }}
      >
        ▶
      </div>
    </div>
  );
};
