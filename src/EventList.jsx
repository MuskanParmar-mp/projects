import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import "./EventList.css";

function EventList() {

  const [events, setEvents] = useState([]);

  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/events/")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <section className="events-section">

      <div className="events-heading">

        <p>CYBROM CAMPUSCONNECT</p>

        <h2>Upcoming Events</h2>

        <span>
          Discover workshops, hackathons, seminars and
          other exciting events at Cybrom.
        </span>

      </div>

      <div className="events-container">

        {events.map((event) => (

          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            venue={event.venue}
          />

        ))}

      </div>

    </section>
  );
}

export default EventList;