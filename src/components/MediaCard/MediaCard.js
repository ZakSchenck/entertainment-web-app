import React, { useEffect, useState } from "react";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../../assets/icon-bookmark-full.svg";
import movies from "../../assets/icon-nav-movies.svg";
import series from "../../assets/icon-nav-tv-series.svg";
import play from "../../assets/icon-play.svg";
import { DataContext } from "../../App";
import { useContext } from "react";

function MediaCard({ media, trendState }) {
  const { year, category, rating, title, thumbnail } = media;
  const dataList = useContext(DataContext);
  const state = dataList[0];
  const setData = dataList[1];
  const [isHovering, setIsHovering] = useState(false);
  const [hoverIndex, setHoverIndex] = useState("");

  const toggleBookmark = () => {
    const updatedState = state.data.map((item) => {
      if (item.title === media.title) {
        item.isBookmarked = !item.isBookmarked;
      }
      return item;
    });
    setData({
      ...state,
      data: updatedState,
    });
  };

  return (
    <div className="media-container">
      <img
        id="bookmark"
        src={media.isBookmarked ? bookmarkFull : bookmarkEmpty}
        onClick={toggleBookmark}
        onMouseEnter={() => {
          setIsHovering(!isHovering);
          console.log(isHovering);
        }}
        alt="bookmark"
      />

      <img
        className="media-img"
        src={`./${thumbnail.regular.small.slice(9)}`}
        alt="media image"
      />
      <div className={`${trendState ? "movie-info-wrapper" : "movie-info"}`}>
        <p>{year} •&nbsp;</p>
        <img src={category === "Movie" ? movies : series} alt="movie image" />
        <p>&nbsp;{category} •&nbsp;</p>
        <p>{rating}</p>
      </div>
      <p id={`${trendState ? "movie-title" : "title"}`}>{title}</p>
    </div>
  );
}

export default MediaCard;
