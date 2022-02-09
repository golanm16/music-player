import "./PlaylistCreator.css";
import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

const PlaylistCreator = ({ getUserPlaylists }) => {
  const [playlistName, setPlaylistName] = useState("");

  const serverUrl = process.env.REACT_APP_SONGS_SERVER_URL;
  const { userAccessToken } = useContext(UserContext);

  const createPlaylist = async (playlistName) => {
    console.log("creating playlist");
    const rsp = await fetch(serverUrl + "playlist/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + userAccessToken,
      },
      body: JSON.stringify({ name: playlistName }),
    });
    if (rsp.status === 200) {
      getUserPlaylists();
    } else {
      console.log("creating playlist failed");
    }
  };
  return (
    <div>
      <TextField
        label="new playlist name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <Button
        onClick={() => (playlistName ? createPlaylist(playlistName) : "")}
      >
        add playlist
      </Button>
    </div>
  );
};

export default PlaylistCreator;
