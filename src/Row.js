import React from "react";
import "./Row.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import StarIcon from "@material-ui/icons/Star";
import { Divider } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Row({ title, desc, movieState }) {
  const [{ movies }, dispatch] = useStateValue();

  const addToMovie = (movie) => {
    console.log("movie from context: ", movie);
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_MOVIE",
      item: {
        movie: movie,
      },
    });
  };

  return (
    <div className="row">
      <div className="row__title">
        <Divider orientation="vertical" style={{ marginRight: "10px" }} />
        <h2>{title}</h2>
        <ArrowForwardIosIcon />
      </div>
      <p>{desc}</p>

      <div className="row__posters">
        {movieState.map((movie) => (
          <div className="row__content">
            <img
              key={movie.id}
              src={movie.poster}
              alt={movie.title}
              className="row__poster"
            />
            <div className="row__detail">
              <div className="row__rate">
                <StarIcon style={{ color: "#f5c518" }} />
                <p>{movie.rate}</p>
              </div>
              <h4>{movie.title}</h4>
              <button className="watchlist__button">
                <AddIcon />
                Watchlist
              </button>
              <div className="trailer_info">
                <Link to="video">
                  <button
                    className="trailer__button"
                    onClick={() => addToMovie(movie)}
                  >
                    <PlayArrowIcon />
                    Trailer
                  </button>
                </Link>
                <InfoOutlinedIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
