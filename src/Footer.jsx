import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer(){
    return(
       <footer className="footer">

        <div className="footer-container">

            <div className="footer-about">

                <h2> Cybrom </h2>
                <h3> campusConnect</h3>

                <p> Learn, Participate, Connect and Grow with Cybrom events and activities </p>
            </div>
        

       
        <div className="footer-links">
            <h3> quick Links </h3>

            <NavLink to="/"> Home </NavLink>
            <NavLink to="/events"> Events </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/contact"> Contact us  </NavLink>
        </div>

     
         <div className="footer-links">
            <h3> Explore</h3>

            <NavLink to="/workshops"> Workshops </NavLink>
            <NavLink to="/hackathons"> HAckathons </NavLink>
            <NavLink to="/seminars"> Seminars </NavLink>
         </div>

         
         <div className="footer-contact">
            <h3> Contact Us</h3>

            <p> 98765432</p>
            <p> info@cybrom.com</p>
            <p> Bhopal, Madhya Pradesh </p>
         </div>
       </div>

       <div className="footer-bottom">
        <p> @ 2026 Cybrom Campus Connect. All Rights Reserved </p>
       </div>


    
       </footer>
    )
}

export default Footer;