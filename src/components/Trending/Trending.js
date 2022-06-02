import React, { useState } from "react";
import "./Trending.css";
import { useContext } from "react";
import { DataContext } from "../../App";
import movies from "../../assets/icon-nav-movies.svg";
import series from "../../assets/icon-nav-tv-series.svg";
import MediaCard from "../MediaCard/MediaCard";

function Trending() {
  const dataList = useContext(DataContext);
  const list = dataList[0].data
  const trendingFilter = list.filter((item) => item.isTrending === true);
  const [trendState, setTrendState] = useState(true)

  return (
    <section className="trending-section">
      <h1>Trending</h1>
      <div className="trending-txt-wrap">
        {trendingFilter.map((item) => {
          return <MediaCard media={item} key={item.title} trendState={trendState}  />
        })}
      </div>
    </section>
  );
}

export default Trending;
