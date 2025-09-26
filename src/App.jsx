import DefaultLayout from "./layouts/DefaultLayout";
import DetailTrip from "./pages/DetailTrip";
import HomePage from "./pages/HomePage";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/trips/:id" element={<DetailTrip />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
