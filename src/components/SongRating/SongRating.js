import { useEffect, useState } from "react";
import "./SongRating.css";

export const SongRating = ({ id }) => {
  // useStates
  const [views, setViews] = useState("fetching views");
  const [likes, setLikes] = useState("fetching likes");
  const [dislikes, setDislikes] = useState("fetching dislikes");
  // functions
  const calcShortNum = (num) => {
    const bil = 1000000000;
    const mil = 1000000;
    const k = 1000;
    if (num > bil) {
      return (num / bil).toFixed(2) + "b";
    }
    if (num > mil) {
      return (num / mil).toFixed(2) + "m";
    }
    if (num > k) {
      return (num / k).toFixed(2) + "k";
    }
    return num;
  };
  const fetchRating = async (id) => {
    const rsp = await fetch(
      `https://returnyoutubedislikeapi.com/votes?videoId=${id}`
    );
    const data = await rsp.json();

    setViews(calcShortNum(data.viewCount));
    setLikes(calcShortNum(data.likes));
    setDislikes(calcShortNum(data.dislikes));
  };

  // useEffects
  useEffect(() => {
    fetchRating(id);
  }, []);

  // react component
  return (
    <div className="rating">
      <h4 className="views">👁 {views}</h4>
      <h4 className="likes">👍 {likes}</h4>
      <h4 className="dislikes">👎 {dislikes}</h4>
    </div>
  );
};
