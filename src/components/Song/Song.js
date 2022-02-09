import "./Song.css";
import { SongInfo } from "../SongInfo/SongInfo";
import { YoutubeRating } from "../YoutubeRating/YoutubeRating";
import { useContext, useState } from "react";
import songContext from "../../contexts/SongContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Add, Remove } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";
import UserContext from "../../contexts/UserContext";

export const Song = ({ title, artist, id, link, provider }) => {
  const [playlists, setPlaylists] = useState(null);

  const serverUrl = process.env.REACT_APP_SONGS_SERVER_URL;
  const { userAccessToken } = useContext(UserContext);

  const getUserPlaylists = async () => {
    const rsp = await fetch(serverUrl + "playlist/all", {
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + userAccessToken,
      },
    });
    const playLists = await rsp.json();
    setPlaylists(playLists);
  };

  const addSongToPlaylist = async (songId, playlistId) => {
    const rsp = await fetch(serverUrl + "playlist/addsong", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + userAccessToken,
      },
      body: JSON.stringify({ songId, playlistId }),
    });

    if (rsp.status === 200) {
      console.log("added");
    } else {
      console.log("adding song to playlist failed");
    }
  };

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
        className="clickable"
        onClick={() => {
          playlists ? setPlaylists(null) : getUserPlaylists();
        }}
      >
        {playlists ? <Remove /> : <Add />}
        {playlists && (
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            {playlists.map((pl) => (
              <Button
                key={pl._id}
                value={pl._id}
                onClick={(e) => {
                  addSongToPlaylist(link, e.target.value);
                  setPlaylists(null);
                }}
              >
                {pl.name}
              </Button>
            ))}
          </ButtonGroup>
        )}
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
