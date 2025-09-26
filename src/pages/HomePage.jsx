import trips from "../data/db";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowsDownToLine } from "@fortawesome/free-solid-svg-icons";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
const HomePage = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4"><FontAwesomeIcon icon={faCarSide} /> Next Up</h3>
      <h3 className="text-center mb-3"> <FontAwesomeIcon icon={faArrowsDownToLine} /></h3>
      <div className="row justify-content-center">
        {trips.map((trip) => (
          <div key={trip.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 text-center slate-card">
              <div className="card-img slate-img">
                <img
                  src={`/images/${trip.image}`}
                  alt={trip.name}
                  className="slate-img-photo"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <Link
                    to={`/trips/${trip.id}`}
                    className="text-decoration-none"
                  >
                    {trip.name}
                  </Link>
                </h5>
                <p className="card-text">
                  {trip.city} <FontAwesomeIcon icon={faMapLocationDot} />
                </p>
                <p className="card-text">
                  {trip.initialDate} - {trip.endDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
