import "./WhyCybrom.css";

function WhyCybrom() {
  return (
    <section className="why-section">

      <div className="why-heading">
        <p>WHY CYBROM?</p>

        <h2>Learn. Build. Grow.</h2>

        <span>
          Cybrom provides opportunities to learn practical skills,
          participate in events and build your career.
        </span>
      </div>


      <div className="why-container">

        <div className="why-card">
          <div className="why-icon">🎓</div>
          <h3>Learn</h3>
          <p>
            Gain practical knowledge through workshops,
            seminars and expert sessions.
          </p>
        </div>


        <div className="why-card">
          <div className="why-icon">💻</div>
          <h3>Build</h3>
          <p>
            Work on real-world projects and improve
            your technical skills.
          </p>
        </div>


        <div className="why-card">
          <div className="why-icon">🏆</div>
          <h3>Compete</h3>
          <p>
            Participate in hackathons, coding contests
            and exciting challenges.
          </p>
        </div>


        <div className="why-card">
          <div className="why-icon">🤝</div>
          <h3>Connect</h3>
          <p>
            Connect with mentors, trainers and
            fellow learners.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyCybrom;