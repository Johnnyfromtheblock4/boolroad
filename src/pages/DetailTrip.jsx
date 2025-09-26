import trips from "../data/db";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailTrip = () => {
  // importo params
  const { id } = useParams();

  // definisco variabile stato
  const [currentTrip, setCurrentTrip] = useState({});

  // funzione che recupera i partecupanti in base all'id
  const fetchCurrentTrip = () => {
    setCurrentTrip(trips[id]);
  };

  // useEffect
  useEffect(fetchCurrentTrip, []);
  // console.log(currentTrip);

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* Searchbar */}
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
      </div>
      {/* Lista Partecipanti */}
      <div className="col-12">
        <h1>{currentTrip.name}</h1>
        <h2>Partecipanti</h2>
        {currentTrip.participants.map((participant) => {
          return (
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {trips[0].participants[0].name}
                    {trips[0].participants[0].surname}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>{trips[0].participants[0].phone}</p>
                    <p>{trips[0].participants[0].email}</p>
                    <p>{trips[0].participants[0].fiscalCode}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailTrip;
