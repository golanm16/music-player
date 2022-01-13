import { useEffect, useRef, useState } from "react";
import { rapidApiKey } from "../api_access/secret";
import { ResultList } from "../ResultList/ResultList";
import "./Search.css";
import loading_gif from "../../assets/hug.gif";
import search_icon from "../../assets/loupe.png";

const rspEx = {
  originalQuery: "stand by me",
  correctedQuery: "stand by me",
  results: 1236173408,
  activeFilters: [
    {
      name: "Relevance",
      active: true,
      url: null,
      description: "Sort by relevance",
    },
  ],
  refinements: [],
  items: [
    {
      type: "video",
      title: "Ben E. King - Stand By Me",
      id: "hwZNL7QVJjE",
      url: "https://www.youtube.com/watch?v=hwZNL7QVJjE",
      bestThumbnail: {
        url: "https://i.ytimg.com/vi/hwZNL7QVJjE/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCadKoUJuxieFR0VoYoeF3Wy8_3bg",
        width: 480,
        height: 270,
      },
      thumbnails: [
        {
          url: "https://i.ytimg.com/vi/hwZNL7QVJjE/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCadKoUJuxieFR0VoYoeF3Wy8_3bg",
          width: 480,
          height: 270,
        },
      ],
      isUpcoming: false,
      upcoming: null,
      isLive: false,
      badges: [],
      author: {
        name: "Soulful Sounds",
        channelID: "UCYXzyvyTDhaFwdtZxL5ChFA",
        url: "https://www.youtube.com/user/BlackAsWhite1",
        bestAvatar: {
          url: "https://yt3.ggpht.com/ytc/AKedOLQ8YHTefgbsbjnv_DEmetvGj55RbHqR3jurUN3zMQ=s68-c-k-c0x00ffffff-no-rj",
          width: 68,
          height: 68,
        },
        avatars: [
          {
            url: "https://yt3.ggpht.com/ytc/AKedOLQ8YHTefgbsbjnv_DEmetvGj55RbHqR3jurUN3zMQ=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
            height: 68,
          },
        ],
        ownerBadges: ["Verified"],
        verified: true,
      },
      description: null,
      views: 514976569,
      duration: "2:58",
      uploadedAt: "12 years ago",
    },
    {
      type: "movie",
      title: "Stand By Me - Das Geheimnis eines Sommers",
      videoID: "UbDKD6SWDZk",
      url: "https://www.youtube.com/watch?v=UbDKD6SWDZk",
      bestThumbnail: {
        url: "https://i.ytimg.com/vi/UbDKD6SWDZk/movieposter.jpg",
        width: 279,
        height: 402,
      },
      thumbnails: [
        {
          url: "https://i.ytimg.com/vi/UbDKD6SWDZk/movieposter.jpg",
          width: 279,
          height: 402,
        },
      ],
      owner: {
        name: "YouTube Movies",
        channelID: "UClgRkhTL3_hImCAmdLfDE4g",
        url: "https://www.youtube.com/channel/UClgRkhTL3_hImCAmdLfDE4g",
        ownerBadges: ["Verified"],
        verified: true,
      },
      description:
        "Vier 12-Jährige suchen nach der Leiche eines vermissten Jungen und finden mehr, als sie erwartet haben. (Originaltitel - Stand ...",
      meta: ["Action & adventure • 1987 • FSK 6 • German audio"],
      actors: ["Jerry O'Connell", "Corey Feldman", "Gary Riley"],
      directors: ["Rob Reiner"],
      duration: "1:28:41",
    },
    {
      type: "video",
      title: "Stand By Me | Playing For Change | Song Around The World",
      id: "Us-TVg40ExM",
      url: "https://www.youtube.com/watch?v=Us-TVg40ExM",
      bestThumbnail: {
        url: "https://i.ytimg.com/vi/Us-TVg40ExM/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBbY8tGntXvo8O-5cj_qBZt4Lxhgw",
        width: 480,
        height: 270,
      },
      thumbnails: [
        {
          url: "https://i.ytimg.com/vi/Us-TVg40ExM/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBbY8tGntXvo8O-5cj_qBZt4Lxhgw",
          width: 480,
          height: 270,
        },
      ],
      isUpcoming: false,
      upcoming: null,
      isLive: false,
      badges: ["CC"],
      author: {
        name: "Playing For Change",
        channelID: "UCn25nZ12HEZq_w_m_1DmbbA",
        url: "https://www.youtube.com/user/PlayingForChange",
        bestAvatar: {
          url: "https://yt3.ggpht.com/ytc/AKedOLRS86Q08sQDM-thHaNJiWUsn0f7bWiHZJknS0zCpA=s68-c-k-c0x00ffffff-no-rj",
          width: 68,
          height: 68,
        },
        avatars: [
          {
            url: "https://yt3.ggpht.com/ytc/AKedOLRS86Q08sQDM-thHaNJiWUsn0f7bWiHZJknS0zCpA=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
            height: 68,
          },
        ],
        ownerBadges: ["Verified"],
        verified: true,
      },
      description: null,
      views: 174513174,
      duration: "5:28",
      uploadedAt: "13 years ago",
    },
    {
      type: "video",
      title: "Oasis - Stand By Me (Official Video)",
      id: "maTP315XZCQ",
      url: "https://www.youtube.com/watch?v=maTP315XZCQ",
      bestThumbnail: {
        url: "https://i.ytimg.com/vi/maTP315XZCQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDMF1wA_GoJiueqlCD2PCujjMa74A",
        width: 720,
        height: 404,
      },
      thumbnails: [
        {
          url: "https://i.ytimg.com/vi/maTP315XZCQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDMF1wA_GoJiueqlCD2PCujjMa74A",
          width: 720,
          height: 404,
        },
        {
          url: "https://i.ytimg.com/vi/maTP315XZCQ/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD6IHCsff7ygelaUxBdJEkhFIMyOw",
          width: 360,
          height: 202,
        },
      ],
      isUpcoming: false,
      upcoming: null,
      isLive: false,
      badges: [],
      author: {
        name: "Oasis",
        channelID: "UCUDVBtnOQi4c7E8jebpjc9Q",
        url: "https://www.youtube.com/channel/UCUDVBtnOQi4c7E8jebpjc9Q",
        bestAvatar: {
          url: "https://yt3.ggpht.com/ytc/AKedOLRdaUD4sONkYeGSQtByWMIDFa37T3Ds6cX-rWU5PQ=s88-c-k-c0x00ffffff-no-rj",
          width: 68,
          height: 68,
        },
        avatars: [
          {
            url: "https://yt3.ggpht.com/ytc/AKedOLRdaUD4sONkYeGSQtByWMIDFa37T3Ds6cX-rWU5PQ=s88-c-k-c0x00ffffff-no-rj",
            width: 68,
            height: 68,
          },
        ],
        ownerBadges: ["Official Artist Channel"],
        verified: true,
      },
      description: null,
      views: 109467568,
      duration: "5:58",
      uploadedAt: "10 years ago",
    },
    {
      type: "video",
      title: "Ben E. King - Stand By Me (Official Vinyl Video)",
      id: "z5i9vT8wGY8",
      url: "https://www.youtube.com/watch?v=z5i9vT8wGY8",
      bestThumbnail: {
        url: "https://i.ytimg.com/vi/z5i9vT8wGY8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBqfKxVXmXiFAhue6uFYI9CBN0VlQ",
        width: 720,
        height: 404,
      },
      thumbnails: [
        {
          url: "https://i.ytimg.com/vi/z5i9vT8wGY8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBqfKxVXmXiFAhue6uFYI9CBN0VlQ",
          width: 720,
          height: 404,
        },
        {
          url: "https://i.ytimg.com/vi/z5i9vT8wGY8/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD2mTy6uwKsLhJtcD-Iq444nZB-QA",
          width: 360,
          height: 202,
        },
      ],
      isUpcoming: false,
      upcoming: null,
      isLive: false,
      badges: [],
      author: {
        name: "RHINO",
        channelID: "UCWEtnEiVwUy7mwFeshyAWLA",
        url: "https://www.youtube.com/user/RhinoEntertainment",
        bestAvatar: {
          url: "https://yt3.ggpht.com/ytc/AKedOLT-ddxTkN6_wN_L5fGsXyyYVeHegwODdZgUk4jaNQ=s68-c-k-c0x00ffffff-no-rj",
          width: 68,
          height: 68,
        },
        avatars: [
          {
            url: "https://yt3.ggpht.com/ytc/AKedOLT-ddxTkN6_wN_L5fGsXyyYVeHegwODdZgUk4jaNQ=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
            height: 68,
          },
        ],
        ownerBadges: ["Verified"],
        verified: true,
      },
      description: null,
      views: 18925765,
      duration: "3:04",
      uploadedAt: "3 years ago",
    },
    {
      type: "video",
      title: "Stand By Me | Playing For Change Band | Live in Brazil",
      id: "7hF-P1RJyhk",
      url: "https://www.youtube.com/watch?v=7hF-P1RJyhk",
      bestThumbnail: {
        url: "https://i.ytimg.com/vi/7hF-P1RJyhk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAb3qNNimFjRL1_b5DPcbLWCSmG9A",
        width: 720,
        height: 404,
      },
      thumbnails: [
        {
          url: "https://i.ytimg.com/vi/7hF-P1RJyhk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAb3qNNimFjRL1_b5DPcbLWCSmG9A",
          width: 720,
          height: 404,
        },
        {
          url: "https://i.ytimg.com/vi/7hF-P1RJyhk/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDxcLUrCfelDBesksnypfYETz0hZQ",
          width: 360,
          height: 202,
        },
      ],
      isUpcoming: false,
      upcoming: null,
      isLive: false,
      badges: ["CC"],
      author: {
        name: "Playing For Change",
        channelID: "UCn25nZ12HEZq_w_m_1DmbbA",
        url: "https://www.youtube.com/user/PlayingForChange",
        bestAvatar: {
          url: "https://yt3.ggpht.com/ytc/AKedOLRS86Q08sQDM-thHaNJiWUsn0f7bWiHZJknS0zCpA=s68-c-k-c0x00ffffff-no-rj",
          width: 68,
          height: 68,
        },
        avatars: [
          {
            url: "https://yt3.ggpht.com/ytc/AKedOLRS86Q08sQDM-thHaNJiWUsn0f7bWiHZJknS0zCpA=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
            height: 68,
          },
        ],
        ownerBadges: ["Verified"],
        verified: true,
      },
      description: null,
      views: 84314249,
      duration: "8:32",
      uploadedAt: "7 years ago",
    },
    {
      type: "video",
      title: "Stand By Me - Music Travel Love (Cover)",
      id: "mlBIpwtNxxE",
      url: "https://www.youtube.com/watch?v=mlBIpwtNxxE",
      bestThumbnail: {
        url: "https://i.ytimg.com/vi/mlBIpwtNxxE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB0Syw-Tl5VUH48jjca6zJDD9TYLw",
        width: 720,
        height: 404,
      },
      thumbnails: [
        {
          url: "https://i.ytimg.com/vi/mlBIpwtNxxE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB0Syw-Tl5VUH48jjca6zJDD9TYLw",
          width: 720,
          height: 404,
        },
        {
          url: "https://i.ytimg.com/vi/mlBIpwtNxxE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCTVKxVxMFXYTod-xzOME30gRAImw",
          width: 360,
          height: 202,
        },
      ],
      isUpcoming: false,
      upcoming: null,
      isLive: false,
      badges: [],
      author: {
        name: "Music Travel Love",
        channelID: "UCLxAS02eWvfZK4icRNzWD_g",
        url: "https://www.youtube.com/channel/UCLxAS02eWvfZK4icRNzWD_g",
        bestAvatar: {
          url: "https://yt3.ggpht.com/ytc/AKedOLTCOsct0UoGtFCFkQIwBEZTvl4ixtUVHgQ_WU6cQA=s88-c-k-c0x00ffffff-no-rj",
          width: 68,
          height: 68,
        },
        avatars: [
          {
            url: "https://yt3.ggpht.com/ytc/AKedOLTCOsct0UoGtFCFkQIwBEZTvl4ixtUVHgQ_WU6cQA=s88-c-k-c0x00ffffff-no-rj",
            width: 68,
            height: 68,
          },
        ],
        ownerBadges: ["Official Artist Channel"],
        verified: true,
      },
      description: null,
      views: 57693088,
      duration: "3:20",
      uploadedAt: "3 years ago",
    },
    {
      type: "video",
      title: "Tracy Chapman - Stand by Me (Live on Letterman 2015)",
      id: "8XL6C3vY0jM",
      url: "https://www.youtube.com/watch?v=8XL6C3vY0jM",
      bestThumbnail: {
        url: "https://i.ytimg.com/vi/8XL6C3vY0jM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBtKJwhC_WU2zFHscvnWHAKWTA2Fg",
        width: 720,
        height: 404,
      },
      thumbnails: [
        {
          url: "https://i.ytimg.com/vi/8XL6C3vY0jM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBtKJwhC_WU2zFHscvnWHAKWTA2Fg",
          width: 720,
          height: 404,
        },
        {
          url: "https://i.ytimg.com/vi/8XL6C3vY0jM/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBnpXaeFvG5K5hGoGaYJ5PEwH-jJQ",
          width: 360,
          height: 202,
        },
      ],
      isUpcoming: false,
      upcoming: null,
      isLive: false,
      badges: [],
      author: {
        name: "Tracy Chapman Online",
        channelID: "UCIITPAqCgOjtfxfrd8YqQCg",
        url: "https://www.youtube.com/user/TChapmanfan",
        bestAvatar: {
          url: "https://yt3.ggpht.com/ytc/AKedOLRRZ97KCZrYgHfcD9VwlkRCxaGiGWLNokekDUb3=s68-c-k-c0x00ffffff-no-rj",
          width: 68,
          height: 68,
        },
        avatars: [
          {
            url: "https://yt3.ggpht.com/ytc/AKedOLRRZ97KCZrYgHfcD9VwlkRCxaGiGWLNokekDUb3=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
            height: 68,
          },
        ],
        ownerBadges: [],
        verified: false,
      },
      description: null,
      views: 15421183,
      duration: "3:07",
      uploadedAt: "6 years ago",
    },
    {
      type: "video",
      title: "Skylar Grey - Stand By Me (Official)",
      id: "T2bcUxUOUQg",
      url: "https://www.youtube.com/watch?v=T2bcUxUOUQg",
      bestThumbnail: {
        url: "https://i.ytimg.com/vi/T2bcUxUOUQg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCoRv3t-eGLCl5vDHRPtcMejjS_Vg",
        width: 720,
        height: 404,
      },
      thumbnails: [
        {
          url: "https://i.ytimg.com/vi/T2bcUxUOUQg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCoRv3t-eGLCl5vDHRPtcMejjS_Vg",
          width: 720,
          height: 404,
        },
        {
          url: "https://i.ytimg.com/vi/T2bcUxUOUQg/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAp4IDQUmNl78ntMpMNbljb4ib87A",
          width: 360,
          height: 202,
        },
      ],
      isUpcoming: false,
      upcoming: null,
      isLive: false,
      badges: ["CC"],
      author: {
        name: "Skylar Grey",
        channelID: "UCRdVg6Xj_Az9YOsqDzLRbtA",
        url: "https://www.youtube.com/channel/UCRdVg6Xj_Az9YOsqDzLRbtA",
        bestAvatar: {
          url: "https://yt3.ggpht.com/LUO4WLuabMIjW-wI4LYKwjIDEGlp_BDakvPk6sWMKrhUOp3rDcIXAZg075zODViId05E5LbtacY=s88-c-k-c0x00ffffff-no-rj",
          width: 68,
          height: 68,
        },
        avatars: [
          {
            url: "https://yt3.ggpht.com/LUO4WLuabMIjW-wI4LYKwjIDEGlp_BDakvPk6sWMKrhUOp3rDcIXAZg075zODViId05E5LbtacY=s88-c-k-c0x00ffffff-no-rj",
            width: 68,
            height: 68,
          },
        ],
        ownerBadges: ["Official Artist Channel"],
        verified: true,
      },
      description: null,
      views: 26372624,
      duration: "2:28",
      uploadedAt: "3 years ago",
    },
    {
      type: "video",
      title:
        "'Stand by Me' performed by Karen Gibson and The Kingdom Choir - The Royal Wedding - BBC",
      id: "AyFlLjdNqk8",
      url: "https://www.youtube.com/watch?v=AyFlLjdNqk8",
      bestThumbnail: {
        url: "https://i.ytimg.com/vi/AyFlLjdNqk8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCjw3iOL19r2reeUMv0FrjbIaJzSg",
        width: 720,
        height: 404,
      },
      thumbnails: [
        {
          url: "https://i.ytimg.com/vi/AyFlLjdNqk8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCjw3iOL19r2reeUMv0FrjbIaJzSg",
          width: 720,
          height: 404,
        },
        {
          url: "https://i.ytimg.com/vi/AyFlLjdNqk8/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCdrofm8MUlTRLk73gyFfMWV5ZDdg",
          width: 360,
          height: 202,
        },
      ],
      isUpcoming: false,
      upcoming: null,
      isLive: false,
      badges: ["CC"],
      author: {
        name: "BBC",
        channelID: "UCCj956IF62FbT7Gouszaj9w",
        url: "https://www.youtube.com/user/BBC",
        bestAvatar: {
          url: "https://yt3.ggpht.com/Y_iNjNBFP6bpHwT2hAHaLj7J3po22sGjwlR6mn26PWRp2IFesRAeNQEpSuh9xFiG8R57OOE83DE=s68-c-k-c0x00ffffff-no-rj",
          width: 68,
          height: 68,
        },
        avatars: [
          {
            url: "https://yt3.ggpht.com/Y_iNjNBFP6bpHwT2hAHaLj7J3po22sGjwlR6mn26PWRp2IFesRAeNQEpSuh9xFiG8R57OOE83DE=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
            height: 68,
          },
        ],
        ownerBadges: ["Verified"],
        verified: true,
      },
      description: null,
      views: 19847743,
      duration: "3:34",
      uploadedAt: "3 years ago",
    },
  ],
  continuation: null,
  status: true,
};

export const Search = ({ addSong }) => {
  // useRefs
  const searchStrRef = useRef("stand by me");

  // useStates
  const [searchResults, setSearchResults] = useState(
    rspEx.items.filter((item) => item.type === "video")
  );
  const [searchButtonIcon, setSearchButtonIcon] = useState(search_icon);

  // useEffects
  useEffect(() => {}, []);

  // functions
  const fetchSearchResults = async () => {
    setSearchButtonIcon(loading_gif);
    // await setTimeout(() => {
    //   setSearchButtonIcon(search_icon);
    // }, 1000);

    const response = await fetch(
      `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${searchStrRef.current}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
          "x-rapidapi-key": rapidApiKey,
        },
      }
    );
    if (!response.ok) {
      console.log("error fetching search results:");
      setSearchButtonIcon(search_icon);
      return;
    }
    const data = await response.json();
    console.log(JSON.stringify(data));
    const items = data.items.filter((item) => item.type === "video");
    setSearchResults(items);
    setSearchButtonIcon(search_icon);
  };

  // react element
  return (
    <div className="search">
      <div className="search-input">
        <input
          placeholder="search for song"
          onChange={(e) => {
            searchStrRef.current = e.target.value;
          }}
        ></input>
        <button
          disabled
          className="search-button"
          onClick={() => {
            console.log(searchStrRef.current);
            fetchSearchResults();
          }}
        >
          <img
            className="search_icon"
            src={searchButtonIcon}
            alt="search icon"
          />
        </button>
      </div>
      <ResultList searchResults={searchResults} addSong={addSong} />
    </div>
  );
};
