import trips from "../data/db";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1>Lista Viaggi</h1>
        <div className="row">
          <div className="col-12">
            <ul>
              <Link to="/trips">
                <li>{trips[0].name}</li>
                <li>{trips[0].city}</li>
                <li>{trips[0].initialDate}</li>
                <li>{trips[0].endDate}</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
