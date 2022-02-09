import { MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import PlaylistCreator from "../PlaylistCreator/PlaylistCreator";
import "./PlaylistPicker.css";

const PlaylistPicker = ({ playlist, setPlaylist, syncUserSongs }) => {
  const [playlists, setPlaylists] = useState(null);
  const [creatingPlaylist, setCreatingPlaylist] = useState(false);

  const { userAccessToken } = useContext(UserContext);

  const serverUrl = process.env.REACT_APP_SONGS_SERVER_URL;

  const getUserPlaylists = async () => {
    const rsp = await fetch(serverUrl + "playlist/all", {
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + userAccessToken,
      },
    });
    const playLists = await rsp.json();
    console.log(playLists);
    setPlaylists(playLists);
  };

  // get playlists on login
  useEffect(() => {
    userAccessToken && getUserPlaylists();
  }, [userAccessToken]);

  useEffect(() => {
    setCreatingPlaylist(false);
  }, [playlists]);

  const changePlaylist = (e) => {
    if (e.target.value === "new") {
      setCreatingPlaylist(true);
      return;
    }
    setPlaylist(e.target.value);
  };
  return (
    <div>
      {playlists && (
        <Select
          value={playlist}
          label="choose playlist"
          onChange={changePlaylist}
        >
          <MenuItem
            value={null}
            key="head"
            onClick={() => syncUserSongs(userAccessToken)}
          >
            none
          </MenuItem>
          {playlists.map((pl) => (
            <MenuItem key={pl._id} value={pl._id}>
              {pl.name}
            </MenuItem>
          ))}
          <MenuItem
            key="create"
            value="new"
            onClick={() => setCreatingPlaylist(true)}
          >
            create new
          </MenuItem>
        </Select>
      )}
      {creatingPlaylist && (
        <PlaylistCreator getUserPlaylists={getUserPlaylists} />
      )}
    </div>
  );
};

export default PlaylistPicker;
