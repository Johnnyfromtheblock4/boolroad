import trips from "../data/db";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowsDownToLine } from "@fortawesome/free-solid-svg-icons";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import NewTripForm from "../components/NewTripForm";

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">
        <FontAwesomeIcon icon={faCarSide} /> Next Up
      </h3>
      <h3 className="text-center mb-3">
        <FontAwesomeIcon icon={faArrowsDownToLine} />
      </h3>
      <div className="row justify-content-center">
        <NewTripForm />
        {trips.map((trip) => (
          <div key={trip.id} className="col-md-6 col-lg-3 mb-4">
            <Link to={`/trips/${trip.id}`} className="text-decoration-none card h-100 text-center slate-card">
              <div className="card-img slate-img">
                <img
                  src={`/images/${trip.image}`}
                  alt={trip.name}
                  className="slate-img-photo"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <span className="fw-bold">
                    {trip.name}
                  </span>
                </h5>
                <p className="card-text">
                  {trip.city} <FontAwesomeIcon icon={faMapLocationDot} />
                </p>
                <p className="card-text">
                  {trip.initialDate} - {trip.endDate}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
