  # Entertainment Web Application
  
  Frontend Movie and TV application built from raw JSON data. You can bookmark your favorite movies and add them to the bookmark tab, as well as search. You can filter between TV series and movies as well.
  
  Live Site: https://zakschenck.github.io/entertainment-web-app/
  
  ## Tools Used
  • React <br>
  • Sass/SCSS <br>
  • React Router <br>
  ## Main Hooks Used
  • useState <br>
  • useEffect <br>
  • useContext <br>
  
  ## Project Hurtles
  In this project, having shared state between the media arrays was extremely important. I could have used Redux, but that would have been overkill. Having an object with all my shared data in a useState hook was the best and cleanest option. A lot of my states were stored in App.js to have connection between all the components. This is how I did it:
  ### App.js
  ```
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
       ...Routes
      </DataContext.Provider>
  ```
  
 ### Example of retrieving data from App.js into Search.js
 ```
 function Search() {
  const dataList = useContext(DataContext);
  const [input, setInput] = useState("");
  const list = dataList[0].data;
  const setList = dataList[1];
  ```
