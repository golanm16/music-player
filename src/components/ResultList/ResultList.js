import { Result } from "../Result/Result";
import "./ResultList.css";

// const resEx = {
//   id: "fRh_vgS2dFE",
//   type: "video",
//   title: "Justin Bieber - Sorry (PURPOSE : The Movement)",
//   link: "https://www.youtube.com/watch?v=fRh_vgS2dFE",
//   thumbnail:
//     "https://i.ytimg.com/vi/fRh_vgS2dFE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC8_TsrvrKIVO5uSffH33hArkC_0w",
//   author: {
//     name: "Justin Bieber",
//     ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
//     verified: true,
//   },
//   description:
//     "'Purpose' Available Everywhere Now! iTunes: http://smarturl.it/PurposeDlx?IQid=VEVO1113 Stream & Add To Your Spotify ...",
//   views: 3298170207,
//   duration: "3:26",
//   uploaded_at: "4 years ago",
// };

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
