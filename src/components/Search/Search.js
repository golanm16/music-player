import { useEffect, useRef, useState } from "react";
import { ResultList } from "../ResultList/ResultList";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { CircularProgress } from "@mui/material";

export const Search = ({ addSong }) => {
  // useRefs
  const searchStrRef = useRef("stand by me");

  // useStates
  const [searchResults, setSearchResults] = useState([]);
  const [searchInProgress, setSearchInProgress] = useState(false);

  // useEffects
  useEffect(() => {}, []);

  // functions

  const fetchSearchResults = async () => {
    setSearchInProgress(true);

    const response = await fetch(
      `http://localhost:5215/ytsearch?q=${searchStrRef.current}`
    );

    if (!response.ok) {
      console.log("error fetching search results:");
      return;
    }

    const items = await response.json();

    setSearchResults(items);
    setSearchInProgress(false);
  };

  // react element
  return (
    <div className="search">
      <div className="search-input">
        <input
          placeholder="search for song"
          onChange={(e) => {
            searchStrRef.current = e.target.value;
            fetchSearchResults();
          }}
        ></input>
        <button className="search-button">
          {searchInProgress ? (
            // <CircularProgress variant="determinate" value={searchProgress} />
            <CircularProgress />
          ) : (
            <SearchIcon
              onClick={() => {
                fetchSearchResults();
              }}
            />
          )}
        </button>
      </div>
      <ResultList searchResults={searchResults} addSong={addSong} />
    </div>
  );
};
