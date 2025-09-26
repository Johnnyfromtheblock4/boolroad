import trips from "../data/db";
console.log(trips);

const HomePage = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1>Lista Viaggi</h1>
        <div className="row">
          <div className="col-12">
            <ul>
              <li>{trips[0].name}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
