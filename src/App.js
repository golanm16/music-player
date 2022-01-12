import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { SongList } from "./components/SongList/SongList";
import { useEffect, useRef, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import "./App.css";
import hotelSong from "./assets/hotel.mp3";

function App() {
  const videoOptions = {
    autoplay: true,
  };

  // use states
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState({});
  const [playerSrc, setPlayerSrc] = useState(null);

  // use refs
  const counterRef = useRef(1);

  // useeffects
  useEffect(() => {
    setSongs([
      {
        id: 1,
        title: "back in black",
        artist: "ac/dc",
        link: "pAgnJDJN4VA",
        provider: "youtube",
      },
      {
        id: 2,
        title: "hotel california",
        artist: "the eagles",
        link: "KZ1RP84QLdY",
        provider: "youtube",
      },
      {
        id: 3,
        title: "redemption song",
        artist: "bob marley",
        link: "kOFu6b3w6c0",
        provider: "youtube",
      },
      {
        id: 4,
        title: "hotel california - audio only",
        artist: "the eagles",
        link: hotelSong,
        provider: null,
      },
    ]);
    counterRef.current = 4;
    // playerRef.current.volume = 0.5;
    // playerRef.current.source = console.log(playerRef.current);
  }, []);

  // functions
  const playSong = (id) => {
    const song = songs.find((s) => s.id === id);
    console.log(id);
    console.log(songs);
    console.log(song.link);
    setCurrentSong(song);
    setPlayerSrc({
      type: "audio",
      sources: [
        {
          src: song.link,
          ...(song.provider && { provider: song.provider }),
        },
      ],
    });
  };

  const addSong = (title, artist, link, srcType) => {
    setSongs([
      ...songs,
      {
        id: counterRef.current++,
        title,
        link,
        artist,
        provider: srcType === "raw file" ? null : srcType,
      },
    ]);
  };

  const removeSong = (id) => {
    console.log("remove song " + id);
    setSongs([...songs.filter((s) => s.id !== id)]);
  };

  // const exitPlayer = () => {
  //   setPlayerSrc(null);
  // };
  // use contexts

  return (
    <div className="App">
      <Header />
      <Form addSong={addSong} />
      {/* <div
        onClick={() => {
          exitPlayer();
        }}
      >
        ❌ close player
      </div> */}
      <SongList songs={songs} playSong={playSong} removeSong={removeSong} />
      {playerSrc && <Plyr source={playerSrc} options={videoOptions} />}
    </div>
  );
}

export default App;
