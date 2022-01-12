import { Song } from "../Song/Song";
import "./SongList.css";

export const SongList = ({ songs, playSong, removeSong }) => {
  return (
    <div className="SongList">
      <h2>song list:</h2>
      {songs.map((song) => (
        <Song
          id={song.id}
          title={song.title}
          artist={song.artist}
          key={song.title}
          playSong={playSong}
          link={song.link}
          provider={song.provider}
          removeSong={removeSong}
        />
      ))}
    </div>
  );
};
