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

  // searchbar

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* Search */}
            <div className="col-12">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Cerca partecipante"
                  aria-label="Cerca partecipante"
                />
                <button className="btn btn-outline-success" type="submit">
                  Cerca
                </button>
              </form>
            </div>
          </div>
          {/* Participant */}
          <div className="col-12 mt-3">
            <h1>{currentTrip && currentTrip.name}</h1>
            <h3>Partecipanti</h3>
            <ParticipantCard currentTrip={currentTrip} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTrip;
