import { filter } from "lodash";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../App";
import searchimg from "../../assets/icon-search.svg";

function BookmarkedSearch({setBkmkState}) {
  const dataList = useContext(DataContext);
  const [input, setInput] = useState("");
  const list = dataList[0].bookmarked;
  const setList = dataList[1];

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input !== "") {
        setBkmkState(true)
    } else {
        setBkmkState(false)
    }
    const filterArr = list.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setList({
        ...dataList[0],
        filteredBookmarked: filterArr
    });
    console.log(filterArr)
  }, [input]);

  return (
    <section className="search-section">
      <img src={searchimg} alt="search button" />
      <input
        type="text"
        placeholder="Search for bookmarked Movies and TV Series"
        onChange={inputHandler}
      />
    </section>
  );
}

export default BookmarkedSearch;