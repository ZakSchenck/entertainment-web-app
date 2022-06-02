import React from "react";
import "./Recommended.css";
import { useContext, useState } from "react";
import { DataContext } from "../../App";
import movies from "../../assets/icon-nav-movies.svg";
import series from "../../assets/icon-nav-tv-series.svg";
import play from "../../assets/icon-play.svg";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../../assets/icon-bookmark-full.svg";
import Search from "../Search/Search";
import Trending from "../Trending/Trending";
import MediaCard from "../MediaCard/MediaCard";

function Recommended() {
  const dataList = useContext(DataContext);
  const list = dataList[0].filteredData;
  const [searchState, setSearchState] = useState(false)
  

  let filteredList;
  if (searchState === false) {
    filteredList = list.filter((item) => item.isTrending === false);
  } else {
    filteredList = list.filter(
      (item) => item.isTrending === false || item.isTrending === true
    );
  }
  return (
    <section className="recommended-section">
        <Search setSearchState={setSearchState} />
        {!searchState && <Trending />}
      {!searchState ? (
        <h1>Recommended for you</h1>
      ) : (
        <h1>Found {list.length} results</h1>
      )}
      <div className="recommended-grid">
        {filteredList.map((item) => {
            return <MediaCard media={item} key={item.title} />
        })}
      </div>
    </section>
  );
}

export default Recommended;
