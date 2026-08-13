import { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/register/", {
        username: username,
        password: password,
      })
      .then((response) => {
        alert(response.data.message);
        setUsername("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        alert("Registration failed");
      });
  };

  return (
    <div className="register-page">

      <div className="register-box">

        <p className="register-small">
          CYBROM CAMPUSCONNECT
        </p>

        <h1>Create Account</h1>

        <p className="register-text">
          Join Cybrom CampusConnect and explore exciting events.
        </p>

        <form onSubmit={handleRegister}>

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
            Sign Up
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;