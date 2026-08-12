function EventCard({ title, description, date, time, venue }) {
  return (
    <div className="event-card">

      <div className="event-icon">
        💻
      </div>

      <div className="event-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="event-details">
          <span>📅 {date}</span>
          <span>⏰ {time}</span>
          <span>📍 {venue}</span>
        </div>

        <button className="event-btn">
          View Details
        </button>

      </div>

    </div>
  );
}

export default EventCard;