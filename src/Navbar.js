import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
function Navbar() {
  const [{ user, token }, dispatch] = useStateValue();

  return (
    <div className="navbar__container">
      <div className="navbar">
        <Link to="/">
          <img
            className="navbar__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/863px-IMDB_Logo_2016.svg.png"
            alt="imdb-logo"
          />
        </Link>
        <div className="navbar__menu">
          <MenuIcon />
          <h4>Menu</h4>
        </div>
        <div className="navbar__search">
          <input placeholder="Seach IMDb" />
          <SearchIcon className="navbar__button" />
        </div>
        <div className="navbar__IMDbPro">
          <h4>IMDbPro</h4>
        </div>
        <div className="navbar__watchlist">
          <BookmarkBorderIcon />
          <h4>Watchlist</h4>
        </div>

        <div className="navbar__signIn">
          {token ? (
            <div className="navbar__userInfo">
              <Avatar />
              <h4>Watchlist</h4>
            </div>
          ) : (
            <Link to="/login">
              <h4>Sign In</h4>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
