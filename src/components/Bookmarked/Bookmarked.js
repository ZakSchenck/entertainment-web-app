import React, { useEffect } from "react";
import MediaCard from "../MediaCard/MediaCard";
import { useContext, useState } from "react";
import { DataContext } from "../../App";
import BookmarkedSearch from "../BookmarkedSearch/BookmarkedSearch";

function Bookmarked({ bookmarkState }) {
  const dataList = useContext(DataContext);
  const data = dataList[0].filteredBookmarked;
  const [bkmkState, setBkmkState] = useState(false)
  const movieBookmark = bookmarkState.filter(
    (item) => item.category === "Movie"
  );
  const seriesBookmark = bookmarkState.filter(
    (item) => item.category === "TV Series"
  );

  return (
    <>
        <BookmarkedSearch setBkmkState={setBkmkState} />
      {!bkmkState ? <h1>Bookmarked Movies</h1> : <h1>Found {data.length} results</h1>}
      <div className="recommended-grid">
        {!bkmkState && movieBookmark.map((item, index) => {
          return <MediaCard media={item} key={item.title} />;
        })}
      </div>
      {!bkmkState && <h1>Bookmarked TV Series</h1>}
      <div className="recommended-grid">
        {!bkmkState && seriesBookmark.map((item, index) => {
          return <MediaCard media={item} key={item.title} />;
        })}
        {bkmkState && data.map((item) => {
          return <MediaCard media={item} key={item.title}  />;
        })}
      </div>
    </>
  );
}

export default Bookmarked;
