import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { SongList } from "./components/SongList/SongList";
import { useEffect, useRef, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import "./App.css";
import hotelSong from "./assets/hotel.mp3";
import { Search } from "./components/Search/Search";
import songContext from "./contexts/SongContext";
import UserContext from "./contexts/UserContext";
import { Song } from "./classes/Song";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { Button } from "@mui/material";

function App() {
  const videoOptions = { autoplay: true };

  // use states
  const [songs, setSongs] = useState([]);
  const [currentSongId, setCurrentSongId] = useState(null);
  const [playerSrc, setPlayerSrc] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [userAccessToken, setUserAccessToken] = useState(null);

  // use refs
  const playAllCondRef = useRef(false);
  const plyrRef = useRef(null);
  const currentSongIndexRef = useRef(null);

  // useeffects

  const addStarterSongs = async () => {
    setSongs([
      new Song("back in black", "ac/dc", "pAgnJDJN4VA", "youtube"),
      new Song("hotel california", "the eagles", "KZ1RP84QLdY", "youtube"),
      new Song("redemption song", "bob marley", "kOFu6b3w6c0", "youtube"),
      new Song("hotel california - audio only", "the eagles", hotelSong),
    ]);
  };
  useEffect(() => {
    // addStarterSongs();
  }, []);

  useEffect(() => {
    if (userAccessToken) {
      syncUserSongs(userAccessToken);
    } else {
      setSongs([]);
    }
  }, [userAccessToken]);

  // functions
  const syncUserSongs = async (AccessToken) => {
    try {
      for (const s of songs) {
        await addSongToDB(s);
      }
    } catch {
      console.log("failed adding current songs to DB");
    }
    try {
      const rsp = await fetch("http://localhost:5215/songs/", {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + AccessToken,
        },
      });
      console.log("fetched");
      const userSongs = await rsp.json();
      console.log(userSongs);

      setSongs([
        ...userSongs.map((s) => {
          return { ...s, link: s.src };
        }),
      ]);
    } catch {
      console.log("failed fetching songs from DB");
    }
  };

  const playAll = () => {
    playAllCondRef.current = true;
    const songsSources = songs.map((song) => {
      return {
        src: song.link,
        ...(song.provider && { provider: song.provider }),
      };
    });
    setCurrentSongId(songs[0].id);
    setPlayerSrc({
      type: "audio",
      sources: [songsSources[0]],
    });
    currentSongIndexRef.current = 0;
  };

  const playSong = (id) => {
    const song = songs.find((s) => s.id === id);
    setCurrentSongId(song.id);
    setPlayerSrc({
      type: "audio",
      sources: [
        {
          src: song.link,
          ...(song.provider && { provider: song.provider }),
        },
      ],
    });
    setShowPlayer(true);
  };

  const getNextSongId = () => {
    if (
      songs.length <= currentSongIndexRef.current - 2 ||
      currentSongIndexRef.current < 0
    ) {
      console.log("no next song");
      return;
    }
    currentSongIndexRef.current++;
    return songs[currentSongIndexRef.current].id;
  };

  const playNextSong = () => {
    const nextSongId = getNextSongId();
    nextSongId && playSong(nextSongId);
  };

  const stopSong = () => {
    setCurrentSongId(null);
    setPlayerSrc({});
    setShowPlayer(false);
    // plyrRef.current.plyr.pause();
  };

  const addSongToDB = async (song) => {
    try {
      const rsp = await fetch("http://localhost:5215/songs/", {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + userAccessToken,
        },
        method: "POST",
        body: JSON.stringify({
          title: song.title,
          artist: song.artist,
          src: song.link,
          authorization: userAccessToken,
          id: song.id,
          provider: song.provider,
        }),
      });
      if (rsp.ok) {
        console.log("fetch in addtodb");
        const data = await rsp.json();
        console.log(data);
      } else {
        console.log("not added");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addSong = async (title, artist, link, srcType) => {
    if (songs.find((s) => s.link === link)) {
      console.log("song already exists");
      return;
    }
    const song = new Song(title, artist, link, srcType);
    if (userAccessToken) {
      await addSongToDB(song);
    }
    setSongs([...songs, song]);
  };

  const removeSong = async (id) => {
    console.log("removing " + id);
    if (userAccessToken) {
      const rsp = await fetch("http://localhost:5215/songs/" + id, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + userAccessToken,
        },
        method: "DELETE",
      });
      const data = await rsp.json();
      console.log(data);
    }
    setSongs([...songs.filter((s) => s.id !== id)]);
    console.log(songs);
  };

  const shuffleSongs = () => {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    setSongs([...songs]);
  };

  // const exitPlayer = () => {
  //   setPlayerSrc(null);
  // };
  // use contexts

  return (
    <div className="App">
      <UserContext.Provider value={{ userAccessToken, setUserAccessToken }}>
        <LoginPage></LoginPage>
        <Button
          onClick={() => {
            playAll();
          }}
        >
          play all
        </Button>
        <Button
          onClick={() => {
            playNextSong();
          }}
        >
          next
        </Button>
        <Button onClick={shuffleSongs}>shuffle</Button>
        <Header />
        <Form addSong={addSong} />

        <div className="song-containers">
          <songContext.Provider
            value={{ currentSongId, removeSong, playSong, stopSong: stopSong }}
          >
            <SongList songs={songs} />
          </songContext.Provider>
          <Search addSong={addSong} />
        </div>
      </UserContext.Provider>
      <Plyr
        ref={(el) => {
          if (el?.plyr?.on) {
            el.plyr.on("ended", () => {
              if (playAllCondRef.current) {
                playNextSong();
              }
            });
          }
          plyrRef.current = el;
        }}
        source={playerSrc}
        options={videoOptions}
        hidden={showPlayer}
      />
    </div>
  );
}

export default App;
