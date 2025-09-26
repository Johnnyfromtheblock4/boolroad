import trips from "../data/db";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1>Lista Viaggi</h1>
        <div className="row">
          <div className="col-12">
            {trips.map((trip) => (
              <div key={trip.id} className="trip-card">
                <Link to={`/trips/${trip.id}`}>{trip.name}</Link>
                <p>{trip.city}</p>
                <p>
                  {trip.initialDate} → {trip.endDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
