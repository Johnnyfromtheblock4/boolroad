import trips from "../data/db";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ParticipantCard from "../components/ParticipantCard";

const DetailTrip = () => {
  const { id } = useParams();
  const [currentTrip, setCurrentTrip] = useState(null);
  const [filteredParticipants, setFilteredParticipants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // trova il trip
    const trip = trips.find((trip) => trip.id == id);
    setCurrentTrip(trip);

    // inizializza i partecipanti
    if (trip) {
      setFilteredParticipants(trip.participants);
    }
  }, [id]);

  useEffect(() => {
    if (currentTrip) {
      const tempParticipants = currentTrip.participants.filter((p) =>
        `${p.name} ${p.surname}`.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredParticipants(tempParticipants);
    }
  }, [search, currentTrip]);

  if (!currentTrip) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Search */}
        <div className="col-12">
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Cerca"
              aria-label="Cerca"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <button class="btn btn-primary" type="submit">
              Search
            </button> */}
          </form>
        </div>
      </div>

      {/* Participant */}
      <div className="col-12">
        <h1>{currentTrip.name}</h1>
        <h2>Partecipanti</h2>
        <ParticipantCard participants={filteredParticipants} />
      </div>
    </div>
  );
};

export default DetailTrip;
