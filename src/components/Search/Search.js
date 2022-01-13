import { useEffect, useRef, useState } from "react";
import { rapidApiKey } from "../api_access/secret";
import { ResultList } from "../ResultList/ResultList";
import "./Search.css";
import loading_gif from "../../assets/hug.gif";
import search_icon from "../../assets/loupe.png";

const rspEx = {
  query: "justin bieber",
  items: [
    {
      id: "8EJ3zbKTWQ8",
      type: "video",
      title: "Justin Bieber - Yummy (Official Video)",
      link: "https://www.youtube.com/watch?v=8EJ3zbKTWQ8",
      bestThumbnail: {
        url: "",
      },
      thumbnail:
        "https://i.ytimg.com/vi/8EJ3zbKTWQ8/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAUi04-Pq8KGONBi6bIjg2hu1hQxA",
      author: {
        name: "Justin Bieber",
        ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
        verified: true,
      },
      description:
        "Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...",
      views: 411969057,
      duration: "3:51",
      uploaded_at: "5 months ago",
    },
    {
      type: "channel",
      name: "Justin Bieber",
      channel_id: "UCIwFjwMjI0y7PDBVEO9-bkQ",
      link: "https://www.youtube.com/user/kidrauhl",
      avatar:
        "https://lh3.googleusercontent.com/a-/AOh14GjLNDp0_qd6-QiVBZqlrz0JAySMB41MXgIRrt691w=s176-c-k-c0x00ffffff-no-rj-mo",
      verified: false,
      followers: 0,
      description_short:
        "Help change the world. http://stuckwithu.lnk.to/agjb.",
      videos: 172,
    },
    {
      type: "shelf-vertical",
      title: "Latest from Justin Bieber",
      items: [
        {
          id: "TiK7QtIHy_Y",
          type: "video",
          title: "Justin Bieber - E.T.A. (Nature Visual)",
          link: "https://www.youtube.com/watch?v=TiK7QtIHy_Y",
          bestThumbnail: {
            url: "",
          },
          thumbnail:
            "https://i.ytimg.com/vi/TiK7QtIHy_Y/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCpPLGO0u1uGx51SmzxLGBOkGn0Pw",
          author: {
            name: "Justin Bieber",
            ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
            verified: true,
          },
          description:
            "Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...",
          views: 4512497,
          duration: "2:56",
          uploaded_at: "2 weeks ago",
        },
        {
          id: "nrJTtH3cw0o",
          type: "video",
          title:
            "Ariana Grande, Justin Bieber - Stuck with U (Mother's Day Edition)",
          link: "https://www.youtube.com/watch?v=nrJTtH3cw0o",
          bestThumbnail: {
            url: "",
          },
          thumbnail:
            "https://i.ytimg.com/vi/nrJTtH3cw0o/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA3sjgAqRsW5r7_21Kw9wK7IZY9uA",
          author: {
            name: "Justin Bieber",
            ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
            verified: true,
          },
          description:
            "This is a special moment in time and for Mother's Day we wanted to give you all this memory. Thank you for sending in your stuck ...",
          views: 5686812,
          duration: "4:32",
          uploaded_at: "1 month ago",
        },
        {
          id: "16j_6JPr8m4",
          type: "video",
          title: "Justin Bieber & Ariana Grande  - Stuck with U (Prom Scenes)",
          link: "https://www.youtube.com/watch?v=16j_6JPr8m4",
          bestThumbnail: {
            url: "",
          },
          thumbnail:
            "https://i.ytimg.com/vi/16j_6JPr8m4/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC67E_D9vhcSXoHJBWv7R_jCVsMNA",
          author: {
            name: "Justin Bieber",
            ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
            verified: false,
          },
          description:
            "Watch Official Video: http://stuckwithu.lnk.to/video Shop Stuck with U bundles: https://shop.justinbiebermusic.com Love this.",
          views: 2694815,
          duration: "3:44",
          uploaded_at: "1 month ago",
        },
        {
          id: "h2jvHynuMjI",
          type: "video",
          title: "Ariana Grande, Justin Bieber - Stuck with U (Lyric Video)",
          link: "https://www.youtube.com/watch?v=h2jvHynuMjI",
          bestThumbnail: {
            url: "",
          },
          thumbnail:
            "https://i.ytimg.com/vi/h2jvHynuMjI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCsXaHO4hJoJHGi6of8cOL0hM1-_w",
          author: {
            name: "Justin Bieber",
            ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
            verified: true,
          },
          description:
            "Watch Official Video: http://stuckwithu.lnk.to/video SB Projects along with longtime clients Ariana Grande and Justin Bieber ...",
          views: 14428651,
          duration: "3:50",
          uploaded_at: "1 month ago",
        },
        {
          id: "lpcOokegspU",
          type: "video",
          title: "Justin Bieber - Available (Nature Visual)",
          link: "https://www.youtube.com/watch?v=lpcOokegspU",
          bestThumbnail: {
            url: "",
          },
          thumbnail:
            "https://i.ytimg.com/vi/lpcOokegspU/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDhrJNbI2mY0EY6_iABYq2v544IHA",
          author: {
            name: "Justin Bieber",
            ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
            verified: true,
          },
          description:
            "Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...",
          views: 4364334,
          duration: "4:18",
          uploaded_at: "1 month ago",
        },
        {
          id: "yKnt8dsFiO0",
          type: "video",
          title: "Justin Bieber - Habitual (Nature Visual)",
          link: "https://www.youtube.com/watch?v=yKnt8dsFiO0",
          bestThumbnail: {
            url: "",
          },
          thumbnail:
            "https://i.ytimg.com/vi/yKnt8dsFiO0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAyo-xQq8GrYRyBALm8tfKw78Dz0Q",
          author: {
            name: "Justin Bieber",
            ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
            verified: true,
          },
          description:
            "Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...",
          views: 5601513,
          duration: "2:54",
          uploaded_at: "2 months ago",
        },
        {
          id: "hUz4yCmwH74",
          type: "video",
          title:
            "Justin Bieber, Summer Walker - Yummy (Summer Walker Remix / CHANGES: The Movement)",
          link: "https://www.youtube.com/watch?v=hUz4yCmwH74",
          bestThumbnail: {
            url: "",
          },
          thumbnail:
            "https://i.ytimg.com/vi/hUz4yCmwH74/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB8W1PXzJIILH0Es8G6XJofqJa_vA",
          author: {
            name: "Justin Bieber",
            ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
            verified: true,
          },
          description:
            "Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...",
          views: 1432706,
          duration: "3:49",
          uploaded_at: "2 months ago",
        },
        {
          id: "PcbrKsAcwn4",
          type: "video",
          title: "Justin Bieber - At Least For Now (CHANGES: The Movement)",
          link: "https://www.youtube.com/watch?v=PcbrKsAcwn4",
          bestThumbnail: {
            url: "",
          },
          thumbnail:
            "https://i.ytimg.com/vi/PcbrKsAcwn4/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDrwFn8Pc6ug3Otd97hkeiTb405rw",
          author: {
            name: "Justin Bieber",
            ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
            verified: true,
          },
          description:
            "Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...",
          views: 1804163,
          duration: "2:53",
          uploaded_at: "2 months ago",
        },
        {
          id: "AUnypjWNa7Q",
          type: "video",
          title: "Justin Bieber - Changes (Nature Visual)",
          link: "https://www.youtube.com/watch?v=AUnypjWNa7Q",
          bestThumbnail: {
            url: "",
          },
          thumbnail:
            "https://i.ytimg.com/vi/AUnypjWNa7Q/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCVnnKJHrf_nQqhU2yDLL9cG4slrQ",
          author: {
            name: "Justin Bieber",
            ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
            verified: true,
          },
          description:
            "Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...",
          views: 4644815,
          duration: "2:19",
          uploaded_at: "2 months ago",
        },
        {
          id: "_uOnmHaDmMQ",
          type: "video",
          title: "Justin Bieber - That's What Love Is (CHANGES: The Movement)",
          link: "https://www.youtube.com/watch?v=_uOnmHaDmMQ",
          bestThumbnail: {
            url: "",
          },
          thumbnail:
            "https://i.ytimg.com/vi/_uOnmHaDmMQ/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAUvSmg2-ddSxg0t8At7A9aeaYd6g",
          author: {
            name: "Justin Bieber",
            ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
            verified: true,
          },
          description:
            "Changes Out Now: https://justinbieber.lnk.to/Changes Follow Justin: http://facebook.com/justinbieber http://twitter.com/justinbieber ...",
          views: 3348436,
          duration: "2:51",
          uploaded_at: "2 months ago",
        },
      ],
    },
    {
      id: "3AyMjyHu1bA",
      type: "video",
      title:
        "Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo",
      link: "https://www.youtube.com/watch?v=3AyMjyHu1bA",
      bestThumbnail: {
        url: "",
      },
      thumbnail:
        "https://i.ytimg.com/vi/3AyMjyHu1bA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB9qnFat3M-TDwnmJMQNdgGPiv0BQ",
      author: {
        name: "Justin Bieber",
        ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
        verified: true,
      },
      description:
        "Changes: https://justinbieber.lnk.to/Changes Watch Official Video: https://justinbieber.lnk.to/IntentionsVideo Join Justin Bieber in ...",
      views: 109107197,
      duration: "3:45",
      uploaded_at: "4 months ago",
    },
    {
      id: "ekDJcs4ywXQ",
      type: "video",
      title:
        "Ed Sheeran, Adele, Shawn Mendes, Maroon 5, Taylor Swift, Charlie Puth, Sam Smith 🍑 Top Hits 2020",
      link: "https://www.youtube.com/watch?v=ekDJcs4ywXQ",
      bestThumbnail: {
        url: "",
      },
      thumbnail:
        "https://i.ytimg.com/vi/ekDJcs4ywXQ/hqdefault_live.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB53rvbYO8nfzPkSOCJjc1EAEM8Fg",
      author: {
        name: "Music Collection 2020",
        ref: "https://www.youtube.com/channel/UCq8sNODw9D-5qN6o8ougOXA",
        verified: false,
      },
      description:
        "Video Ed Sheeran, Adele, Shawn Mendes, Maroon 5, Taylor Swift, Charlie Puth, Sam Smith - Top Hits 2020. The compilation of ...",
      views: null,
      duration: "",
      uploaded_at: "729 watching",
    },
    {
      id: "DK_0jXPuIr0",
      type: "video",
      title: "Justin Bieber - What Do You Mean? (Official Music Video)",
      link: "https://www.youtube.com/watch?v=DK_0jXPuIr0",
      bestThumbnail: {
        url: "",
      },
      thumbnail:
        "https://i.ytimg.com/vi/DK_0jXPuIr0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB9PzjWOE0-KfXEIX6ifFfbswiuow",
      author: {
        name: "Justin Bieber",
        ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
        verified: true,
      },
      description:
        "'Purpose' Available Everywhere Now! iTunes: http://smarturl.it/PurposeDlx?IQid=VEVO1113 Stream & Add To Your Spotify ...",
      views: 2093136555,
      duration: "4:58",
      uploaded_at: "4 years ago",
    },
    {
      id: "pE49WK-oNjU",
      type: "video",
      title: "Ariana Grande & Justin Bieber - Stuck with U (Official Video)",
      link: "https://www.youtube.com/watch?v=pE49WK-oNjU",
      bestThumbnail: {
        url: "",
      },
      thumbnail:
        "https://i.ytimg.com/vi/pE49WK-oNjU/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD4iHpCs4ty9-sqwcU-8cwXPanP_Q",
      author: {
        name: "Ariana Grande",
        ref: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
        verified: true,
      },
      description:
        "SB Projects along with longtime clients Ariana Grande and Justin Bieber release “Stuck with U” to benefit First Responders ...",
      views: 63516472,
      duration: "4:18",
      uploaded_at: "1 month ago",
    },
    {
      id: "kffacxfA7G4",
      type: "video",
      title: "Justin Bieber - Baby ft. Ludacris (Official Music Video)",
      link: "https://www.youtube.com/watch?v=kffacxfA7G4",
      bestThumbnail: {
        url: "",
      },
      thumbnail:
        "https://i.ytimg.com/vi/kffacxfA7G4/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB4F4tsQRIVSf8K9Oqn3cUwxZNx-w",
      author: {
        name: "Justin Bieber",
        ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
        verified: true,
      },
      description:
        "Music video by Justin Bieber performing Baby feat. Ludacris. #VEVOCertified on April 25, 2010.",
      views: 2248215458,
      duration: "3:45",
      uploaded_at: "10 years ago",
    },
    {
      id: "9p2wMpVVtXg",
      type: "video",
      title: "Justin Bieber - Intentions ft. Quavo (Official Video)",
      link: "https://www.youtube.com/watch?v=9p2wMpVVtXg",
      bestThumbnail: {
        url: "",
      },
      thumbnail:
        "https://i.ytimg.com/vi/9p2wMpVVtXg/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD_vLuHCsg5j4GBwaDAvacefd5QLQ",
      author: {
        name: "Justin Bieber",
        ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
        verified: true,
      },
      description:
        "Changes: https://justinbieber.lnk.to/Changes Join Justin Bieber in supporting Alexandria House's mission to help women and ...",
      views: 51275223,
      duration: "6:40",
      uploaded_at: "4 months ago",
    },
    {
      id: "fRh_vgS2dFE",
      type: "video",
      title: "Justin Bieber - Sorry (PURPOSE : The Movement)",
      link: "https://www.youtube.com/watch?v=fRh_vgS2dFE",
      bestThumbnail: {
        url: "",
      },
      thumbnail:
        "https://i.ytimg.com/vi/fRh_vgS2dFE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC8_TsrvrKIVO5uSffH33hArkC_0w",
      author: {
        name: "Justin Bieber",
        ref: "https://www.youtube.com/channel/UCIwFjwMjI0y7PDBVEO9-bkQ",
        verified: true,
      },
      description:
        "'Purpose' Available Everywhere Now! iTunes: http://smarturl.it/PurposeDlx?IQid=VEVO1113 Stream & Add To Your Spotify ...",
      views: 3298170207,
      duration: "3:26",
      uploaded_at: "4 years ago",
    },
  ],
  nextpageRef: "/results?search_query=justin+bieber&sp=SBSYAQE%253D",
  results: 0,
  filters: [
    {
      ref: null,
      name: "Relevance",
      active: true,
    },
  ],
  currentRef: null,
  status: true,
};

export const Search = ({ addSong }) => {
  // useRefs
  const searchStrRef = useRef("");

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
    await setTimeout(() => {
      setSearchButtonIcon(search_icon);
    }, 1000);

    // const response = await fetch(
    //   `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${searchStrRef}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
    //       "x-rapidapi-key": rapidApiKey,
    //     },
    //   }
    // );
    // if (!response.ok) {
    //   console.log("error fetching search results:");
    //   return;
    // }
    // const data = await response.json();
    // console.log(JSON.stringify(data));
    // const items = data.items.filter((item) => item.type === "video");
    // setSearchResults(items);
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
