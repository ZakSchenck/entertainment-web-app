import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../App";
import searchimg from "../../assets/icon-search.svg";

function MovieSearch({setSearchState}) {
  const dataList = useContext(DataContext);
  const [input, setInput] = useState("");
  const list = dataList[0].movies;
  const setList = dataList[1];

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
      if (input !== "") {
          setSearchState(true)
      } else {
          setSearchState(false)
      }
    const filterArr = list.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setList({
        ...dataList[0],
        filteredMovies: filterArr
    });
  }, [input]);

  return (
    <section className="search-section">
      <img src={searchimg} alt="search button" />
      <input
        type="text"
        placeholder="Search for movies"
        onChange={inputHandler}
      />
    </section>
  );
}

export default MovieSearch;
