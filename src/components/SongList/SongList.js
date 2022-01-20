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
          key={song.title}
          link={song.link}
          provider={song.provider}
        />
      ))}
    </div>
  );
};
