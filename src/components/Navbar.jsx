import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar(){
  return(
    <>
    
    {/* Top Orange Bar */}

      <div className="topbar">
        <p className="phone">  ☎ 9755996968  </p>
        <p className="toptext"> Upskill Now With Cybrom Technology</p>
        <p className="social">  &nbsp; in</p>
      </div>


    {/* Main Navbar */}
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo"  width={"250px"}  />
      </div>

      <ul className="menu">
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/events">Events</NavLink> </li>
        <li>  <NavLink to="/workshops">Workshops</NavLink> </li>
        <li> <NavLink to="/hackathons">Hackathons</NavLink> </li>
        <li>  <NavLink to="/seminars">Seminars</NavLink>  </li>
        <li>   <NavLink to="/about">About</NavLink>  </li>
         
      
      </ul>

      {/*Button */}
      <div className="btn">
        <NavLink to="/contact" className="contact-btn">  Contact Us</NavLink>
        <NavLink to="/login" className="login-btn">  Login </NavLink>
        <NavLink to="/signup" className="signup-btn"> Signup </NavLink>
      </div>

    </nav>
    </>
  )
}

export default Navbar;