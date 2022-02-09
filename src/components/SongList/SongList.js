import { Song } from "../Song/Song";
import "./SongList.css";

export const SongList = ({ songs }) => {
  return (
    <div className="SongList">
      <h2>song list:</h2>
      {songs.map((song) => (
        <Song
          id={song.id}
          title={song.title}
          artist={song.artist}
          key={song.src}
          link={song.src}
          provider={song.provider}
        />
      ))}
    </div>
  );
};
