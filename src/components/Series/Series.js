import React from "react";
import SeriesSearch from "../SeriesSearch/SeriesSearch";
import { useContext, useState } from "react";
import { DataContext } from "../../App";
import MediaCard from "../MediaCard/MediaCard";

function Series() {
  const dataList = useContext(DataContext);
  const [searchState, setSearchState] = useState(false)
  const seriesList = dataList[0].filteredSeries;

  return (
    <section className="movies-section">
      <SeriesSearch setSearchState={setSearchState} />
      {!searchState ? <h1>TV Series</h1> : <h1>Found {seriesList.length} results</h1>}
      <div className="recommended-grid">
        {seriesList.map((item, index) => {
          return <MediaCard media={item} key={item.title} />
        })}
      </div>
    </section>
  );
}

export default Series;
