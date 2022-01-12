import "./App.css";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { SongList } from "./components/SongList/SongList";
import { useEffect, useRef, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

function App() {
  // use states
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState({});
  const [playerSrc, setPlayerSrc] = useState(null);

  // use refs
  const counterRef = useRef(1);

  // useeffects
  useEffect(() => {
    setSongs([
      { id: 1, title: "back in black", artist: "ac/dc", link: "pAgnJDJN4VA" },
      {
        id: 2,
        title: "hotel california",
        artist: "the eagles",
        link: "KZ1RP84QLdY",
      },
      {
        id: 3,
        title: "redemption song",
        artist: "bob marley",
        link: "yv5xonFSC4c",
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
          provider: "youtube",
        },
      ],
    });
  };
  const addSong = (title, artist, link) => {
    setSongs([...songs, { id: counterRef.current++, title, link, artist }]);
  };
  const removeSong = (song) => {
    console.log("remove");
    // setSongs([...songs.splice])
  };

  // use contexts

  return (
    <div className="App">
      <Header />
      <Form addSong={addSong} />
      <SongList songs={songs} playSong={playSong} />
      {playerSrc && <Plyr source={playerSrc} />}
    </div>
  );
}

export default App;
