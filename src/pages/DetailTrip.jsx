import trips from "../data/db";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ParticipantCard from "../components/ParticipantCard";

const DetailTrip = () => {
  const { id } = useParams();
  const [currentTrip, setCurrentTrip] = useState({});

  useEffect(() => {
    setCurrentTrip(trips.find((trip) => trip.id == id));
  }, [id]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* Search */}
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
        {/* Participant */}
        <div className="col-12">
          <h1>{currentTrip && currentTrip.name}</h1>
          <h2>Partecipanti</h2>
          <ParticipantCard currentTrip={currentTrip} id={id} />
        </div>
      </div>
    </div>
  );
};

export default DetailTrip;
