import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "./axios";
import Body from "./Body";
import Login from "./Login";
import Navbar from "./Navbar";
import requests from "./requests";
import Row from "./Row";
import { useStateValue } from "./StateProvider";
import Trailer from "./Trailer";
function App() {
  const [{ user, token }, dispatch] = useStateValue();
  const [movieState, setMovie] = useState([]);
  useEffect(() => {
    console.log("inside useEffect");
    async function fetchData() {
      const request = await axios.get(requests.getAllMovies);
      setMovie(request.data);
      console.log(movieState);
    }
    fetchData();
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/video">
            <Navbar />
            <Trailer/>
          </Route>
          <Route path="/">
            <Navbar />
            {/* navBar */}
            <Body />

            <Row
              title="Top Picks"
              desc="Sign in to rate and Watchlist for personalized Top picks recommendations"
              movieState={movieState}
            />
            <Row
              title="Fan favorites"
              desc="This week's top TV and movies"
              movieState={movieState.filter(
                (featured) => featured.IsFeatured === true
              )}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
