import { Result } from "../Result/Result";
import "./ResultList.css";

export const ResultList = ({ searchResults, addSong }) => {
  return (
    <div className="result-list">
      {searchResults.map((res) => (
        <Result
          addSong={addSong}
          key={res.id}
          id={res.id}
          title={res.title}
          artist={res.artist.title}
          artistImg={res.artist.imgs[res.artist.imgs.length - 1]}
          art={res.imgs[res.imgs.length - 1].url}
        />
      ))}
    </div>
  );
};
