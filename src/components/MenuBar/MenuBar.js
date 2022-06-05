import React from "react";
import "./MenuBar.css";
import avatar from "../../assets/image-avatar.png";
import logo from "../../assets/logo.svg";
import home from "../../assets/icon-nav-home.svg";
import movies from "../../assets/icon-nav-movies.svg";
import series from "../../assets/icon-nav-tv-series.svg";
import bookmark from "../../assets/icon-nav-bookmark.svg";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <header>
      <img src={logo} id="logo" alt="logo" />
      <div className="filter-icons">
        <Link to="/">
          <img src={home} alt="home button" />
        </Link>
        <Link to="/movies">
          <img src={movies} alt="movies button" />
        </Link>
        <Link to="/series">
          <img src={series} alt="series button" />
        </Link>
        <Link to="/bookmarked">
          <img src={bookmark} alt="bookmark button" />
        </Link>
      </div>
      <img src={avatar} id="avatar" alt="avatar" />
    </header>
  );
}

export default MenuBar;
