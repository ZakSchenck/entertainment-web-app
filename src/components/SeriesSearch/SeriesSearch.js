import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../App";
import searchimg from "../../assets/icon-search.svg";
import data from "../../data";

function SeriesSearch({setSearchState}) {
  const dataList = useContext(DataContext);
  const [input, setInput] = useState("");
  const list = dataList[0].series;
  const setList = dataList[1];

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input !== "") {
      setSearchState(true);
    } else {
      setSearchState(false);
    }
    const filterArr = list.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setList({
      ...dataList[0],
      filteredSeries: filterArr,
    });
  }, [input]);

  return (
    <section className="search-section">
      <img src={searchimg} alt="search button" />
      <input
        type="text"
        placeholder="Search for TV series"
        onChange={inputHandler}
      />
    </section>
  );
}

export default SeriesSearch;
