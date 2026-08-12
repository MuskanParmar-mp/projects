import { NavLink } from "react-router-dom";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">

      <div className="cta-content">

        <p>CYBROM CAMPUSCONNECT</p>

        <h2>
          Ready to Learn, Build & Grow?
        </h2>

        <span>
          Explore upcoming events and take the next
          step in your learning journey with Cybrom.
        </span>

        <NavLink to="/events" className="cta-btn">
          Explore Events
        </NavLink>

      </div>

    </section>
  );
}

export default CTA;