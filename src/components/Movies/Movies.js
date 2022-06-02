import React from "react";
import MovieSearch from "../MovieSearch/MovieSearch";
import { useContext, useState } from "react";
import { DataContext } from "../../App";
import MediaCard from "../MediaCard/MediaCard";

function Movies() {
  const dataList = useContext(DataContext);
  const moviesList = dataList[0].filteredMovies;
  const [searchState, setSearchState] = useState(false);
  let bookmarkedList = dataList[0].filteredBookmarked;
  const [bookmark, setBookmark] = useState(bookmarkedList);

  return (
    <section className="movies-section">
      <MovieSearch setSearchState={setSearchState} />
      {!searchState ? (
        <h1>Movies</h1>
      ) : (
        <h1>Found {moviesList.length} results</h1>
      )}
      <div className="recommended-grid">
        {moviesList.map((item, index) => {
          return (
            <MediaCard
              media={item}
              key={item.title}
              bookmark={bookmark}
              setBookmark={setBookmark}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Movies;
