import { useEffect, useState } from "react";
import axios from "axios";
import "./MyEvents.css";

function MyEvents() {

  const [registrations, setRegistrations] = useState([]);

  const username = localStorage.getItem("username");

  useEffect(() => {

    if (!username) {
      return;
    }

    axios
      .get(
        `http://127.0.0.1:8000/my-registrations/?username=${username}`
      )
      .then((response) => {
        setRegistrations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [username]);

  if (!username) {
    return (
      <section className="my-events-page">
        <h2>Please login first</h2>
      </section>
    );
  }

  return (
    <section className="my-events-page">

      <div className="my-events-heading">

        <p>CYBROM CAMPUSCONNECT</p>

        <h1>My Events</h1>

        <span>
          Events you have registered for.
        </span>

      </div>

      <div className="my-events-container">

        {registrations.length === 0 ? (

          <p className="no-events">
            You have not registered for any event yet.
          </p>

        ) : (

          registrations.map((event) => (

            <div
              className="my-event-card"
              key={event.id}
            >

              <h2>{event.title}</h2>

              <p>{event.description}</p>

              <div className="my-event-info">

                <p>
                  <strong>Date:</strong> {event.date}
                </p>

                <p>
                  <strong>Time:</strong> {event.time}
                </p>

                <p>
                  <strong>Venue:</strong> {event.venue}
                </p>

              </div>

              <span className="registered-status">
                ✓ Registered
              </span>

            </div>

          ))

        )}

      </div>

    </section>
  );
}

export default MyEvents;