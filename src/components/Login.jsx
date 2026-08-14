import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/login/", {
        username: username,
        password: password,
      })
     
      .then((response) => {
        alert(response.data.message);

        localStorage.setItem("username", response.data.username);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <p className="login-small">
          CYBROM CAMPUSCONNECT
        </p>

        <h1>Welcome Back</h1>

        <p className="login-text">
          Login to explore and register for events.
        </p>

        <form onSubmit={handleLogin}>

          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;