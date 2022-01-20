import { useEffect, useState } from "react";
import "./YoutubeRating.css";
import logo from "../../assets/youtube-logo.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const YoutubeRating = ({ id }) => {
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
      <div className="logo-container">
        <YouTubeIcon />
      </div>
      <label className="views">
        <VisibilityIcon /> {views}
      </label>
      <br />
      <label className="likes">
        <ThumbUpIcon /> {likes}
      </label>
      <br />
      <label className="dislikes">
        <ThumbDownIcon /> {dislikes}
      </label>
    </div>
  );
};
