import React from "react";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      <div className="body__title">
        <h1>Featured today</h1>
      </div>
      <div className="body__container">
        <div className="body__detail">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNTNiZjQwMjktMjVlYy00ODI4LWJiOTktNjU0NDhiYWE5NjIwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX500_CR0,0,500,281_.jpg"
            alt=""
          />
          <p>The 10 Most Binged TV Shows of 2020</p>
        </div>

        <div className="body__detail">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzdjNWM3NDgtZWQxNC00YzU4LTgwODItNjRkZWFhOGUzOTgyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX500_CR0,0,500,281_.jpg"
            alt=""
          />
          <p>Would You Recognize These Child Stars Today?</p>
        </div>
        <div className="body__detail">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYjg3MWI0NWYtMzNhYy00NGEyLWE4ZGMtYzdkZjg5NjI5NDlkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX500_CR0,0,500,281_.jpg"
            alt=""
          />
          <p>What TV Shows Are Renewed or Canceled?</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
