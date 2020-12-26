import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import requests from "./requests";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ username, token }, dispatch] = useStateValue();
  const singIn = (e) => {
    e.preventDefault();
    axios
      .post(requests.authLogin, {
        username: email,
        password: password,
      })
      .then((res) => {
        console.log("passed");
        dispatch({
          type: "SET_TOKEN",
          token: res?.data.token,
        });

        dispatch({
          type: "SET_USER",
          user: res?.data.username,
        });

        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const register = (e) => {
    e.preventDefault();
    // auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
    //     console.log(auth);
    //     if(auth){
    //         history.push('/');
    //     }
    // })
    // .catch(error=> alert(error.message))
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/863px-IMDB_Logo_2016.svg.png"
          className="login_logo"
          alt="imdb-logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__singInButton"
            type="submit"
            onClick={singIn}
          >
            Sing In
          </button>
        </form>
        <p></p>

        <div className="login__divider">
          <h5>New to IMDb?</h5>
        </div>
        <button className="login__registerButton" onClick={register}>
          Create your IMDb account
        </button>
      </div>
    </div>
  );
}

export default Login;
