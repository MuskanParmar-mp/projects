import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EventDetails.css";

function EventDetails() {

    const { id } = useParams();

    const [event, setEvent] = useState(null);


    useEffect(() => {

        axios
            .get(`http://127.0.0.1:8000/events/${id}/`)
            .then((response) => {
                setEvent(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [id]);


    const handleRegister = () => {

        const username = localStorage.getItem("username");

        if (!username) {
            alert("Please login first");
            return;
        }

        axios
            .post(
                `http://127.0.0.1:8000/events/${id}/register/`,
                {
                    username: username
                }
            )
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    };


    if (!event) {
        return <h2>Loading...</h2>;
    }


    return (
        <section className="event-details-page">

            <div className="event-details-card">

                <p className="event-label">
                    CYBROM CAMPUSCONNECT
                </p>

                <h1>{event.title}</h1>

                <p className="event-description">
                    {event.description}
                </p>

                <div className="event-info">

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

                <button
                    className="register-event-btn"
                    onClick={handleRegister}
                >
                    Register for Event
                </button>

            </div>

        </section>
    );
}

export default EventDetails;