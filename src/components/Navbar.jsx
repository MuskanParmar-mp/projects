import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const [username, setUsername] = useState(
    localStorage.getItem("username")
  );

  const handleLogout = () => {
    localStorage.removeItem("username");

    setUsername(null);

    navigate("/");
  };

  return (
    <>

      {/* Top Orange Bar */}

      <div className="topbar">
        <p className="phone">☎ 9755996968</p>
        <p className="toptext">
          Upskill Now With Cybrom Technology
        </p>
        <p className="social">&nbsp; in</p>
      </div>


      {/* Main Navbar */}

      <nav className="navbar">

        <div className="logo">
          <img
            src={logo}
            alt="logo"
            width={"250px"}
          />
        </div>


        <ul className="menu">

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/events">Events</NavLink>
          </li>

          <li>
            <NavLink to="/workshops">Workshops</NavLink>
          </li>

          <li>
            <NavLink to="/hackathons">Hackathons</NavLink>
          </li>

          <li>
            <NavLink to="/seminars">Seminars</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

        </ul>


        {/* Buttons */}

        <div className="btn">

          


          {username ? (

            <>
              <span className="username">
                👤 {username}
              </span>

              <button
                onClick={handleLogout}
                className="logout-btn"
              >
                Logout
              </button>
            </>

          ) : (

            <>
              <NavLink
                to="/login"
                className="login-btn"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="register-btn"
              >
                Register
              </NavLink>
            </>

          )}

        </div>

      </nav>

    </>
  );
}

export default Navbar;