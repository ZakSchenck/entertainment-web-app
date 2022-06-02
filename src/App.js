import "./App.css";
import { createContext, useEffect, useState } from "react";
import data from "./data";
import MenuBar from "./components/MenuBar/MenuBar";
import Recommended from "./components/Recommended/Recommended";
import Movies from "./components/Movies/Movies";
import { Routes, Route } from "react-router-dom";
import Series from "./components/Series/Series";
import Bookmarked from "./components/Bookmarked/Bookmarked";

export const DataContext = createContext(null);

function App() {
  const [bookmarkState, setBookmarkState] = useState(
    data.filter((item) => item.isBookmarked === true)
  );
  const [dataState, setDataState] = useState({
    data: data,
    filteredData: data,
    movies: data.filter((item) => item.category === "Movie"),
    filteredMovies: data.filter((item) => item.category === "Movie"),
    series: data.filter((item) => item.category === "TV Series"),
    filteredSeries: data.filter((item) => item.category === "TV Series"),
    updateBookmark: [bookmarkState, setBookmarkState],
    bookmarked: bookmarkState,
    filteredBookmarked: bookmarkState,
  });

  useEffect(() => {
    setBookmarkState(data.filter((item) => item.isBookmarked === true));
  }, [dataState]);

  return (
    <main className="main-container">
      <DataContext.Provider value={[dataState, setDataState]}>
        <div className="menu-wrapper">
          <MenuBar />
          <div className="hub-wrapper">
            <Routes>
              <Route path="/" element={<Recommended />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route
                path="/bookmarked"
                element={<Bookmarked bookmarkState={bookmarkState} />}
              />
            </Routes>
          </div>
        </div>
      </DataContext.Provider>
    </main>
  );
}

export default App;
