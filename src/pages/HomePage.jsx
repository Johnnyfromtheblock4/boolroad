import trips from "../data/db";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista Viaggi</h1>
      <div className="row justify-content-center">
        {trips.map((trip) => (
          <div key={trip.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/trips/${trip.id}`} className="text-decoration-none">
                    {trip.name}
                  </Link>
                </h5>
                <p className="card-text"> {trip.city}</p>
                <p className="card-text"> {trip.initialDate} - {trip.endDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
