import hero from "../assets/cyb.jpg";
import "../Home.css";
import EventList from "../EventList";
import WhyCybrom from "../WhyCybrom";
import CTA from "./CTA";
import Footer from "./Footer";

function Home(){
  return(
    <>
    <div className="homepage">
      <div className="hero">

        <div className="hero-img">
          <img src={hero} alt="hero"  height={"700px"}  />
        </div>

        <div className="hero-content">
          <p className="subheading"> WELCOME  TO  CYBROM  CAMPUSCONNECT </p>
          <h1> Empower Your Skills
            <br />
            With Cybrom Events </h1>
          <p className="subtitle"> Learn • Participate • Connect • Grow</p>

            <p className="hero-description">
            Discover workshops, hackathons, seminars and
            career-focused events designed to help you learn,
            build and grow.
          </p>

          <div className="buttons">
            <button className="btn1"> Explore Events</button>
            <button className="btn2"> Join Cybrom</button>
          </div>

        </div>
      </div>
    </div>

    <EventList />
    <WhyCybrom />
    <CTA />
    

    </>
  )
}
export default Home;