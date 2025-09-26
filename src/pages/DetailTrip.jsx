import trips from "../data/db";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const DetailTrip = () => {
  const { id } = useParams();
  const [currentTrip, setCurrentTrip] = useState({});

  useEffect(() => {
    setCurrentTrip(trips.find(trip => trip.id == id));
  }, [id]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Cerca"
                aria-label="Cerca"
              />
              <button className="btn btn-outline-success" type="submit">
                Cerca
              </button>
            </form>
          </div>
        </div>
        <div className="col-12">
          <h1>{currentTrip && currentTrip.name}</h1>
          <h2>Partecipanti</h2>
          {currentTrip.participants && currentTrip.participants.map((participant) => (
            <div key={participant.participantId}>
              <Link to={`/trips/${id}/participant/${participant.participantId}`}>
                {participant.name} {participant.surname}
              </Link>
              <div>
                <p>{participant.phone}</p>
                <p>{participant.email}</p>
                <p>{participant.fiscalCode}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailTrip;
