import { useRef } from "react";
import "./Form.css";

export const Form = ({ addSong }) => {
  const addedSong = useRef("");
  const addedArtist = useRef("");
  const addedLink = useRef("");
  const sourceTypeRef = useRef("youtube");
  const sourceTypes = ["youtube", "raw file"];

  return (
    <div className="Form">
      <h2>Form</h2>
      <input
        type="text"
        onChange={(e) => {
          addedSong.current = e.target.value;
        }}
        placeholder="title"
      ></input>
      <input
        type="text"
        onChange={(e) => {
          addedArtist.current = e.target.value;
        }}
        placeholder="artist"
      ></input>
      <input
        type="text"
        onChange={(e) => {
          addedLink.current = e.target.value;
        }}
        placeholder="link"
      ></input>
      <select
        onChange={(e) => {
          sourceTypeRef.current = e.target.value;
          console.log(sourceTypeRef.current);
        }}
      >
        {sourceTypes.map((src) => (
          <option key={src} value={src}>
            {src}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          addSong(
            addedSong.current,
            addedArtist.current,
            addedLink.current,
            sourceTypeRef.current
          );
        }}
      >
        add song
      </button>
    </div>
  );
};
