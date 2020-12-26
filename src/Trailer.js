import React from "react";
import ReactPlayer from "react-player";
import "./Trailer.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Trailer({ movieState }) {
  const [{ movies }, dispatch] = useStateValue();
  console.log("trailer: ", movies);

  const getTags = () => {
    let tags = movies?.movie?.tag.join(', ');
    return tags;
  };
  return (
    <div className="trailer">
      <div className="trailer__left">
        <Link to="/">
          <button className="trailer__backButton">
            <ArrowBackIosIcon />
            Back
          </button>
        </Link>
        <ReactPlayer
          className="video__player"
          url={movies?.movie?.trailer}
          playing={true}
          controls={true}
        ></ReactPlayer>
      </div>
      <div className="trailer__right">
        <div className="trailer__info">
          <img src={movies?.movie?.poster} alt="" />
          <div className="trailer__movieInfo">
            <h5>
              {movies?.movie?.title} ({movies?.movie?.yearCreated})
            </h5>
            {console.log("tag: ", movies?.movie?.tag)}
            <p>{getTags()}</p>
            <button className="trailer__watchButton">Watch options</button>
          </div>
        </div>
        <div className="trailer__desc">
          <hr />
          <h2>{movies?.movie?.title}</h2>
          <p>{movies?.movie?.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Trailer;
