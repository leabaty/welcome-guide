import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import ScrollToTop from "./utils/ScrollToTop";

// COMPONENTS
import NavbarLanding from "./components/NavbarLanding/NavbarLanding";
import NavbarCatsitter from "./components/NavbarCatsitter/NavbarCatsitter";
import Landing from "./components/Landing/Landing";
import Human from "./components/House/House";
import CatsitterBoard from "./components/CatsitterBoard/CatsitterBoard";
import Food from "./components/CatsitterBoard/Food/Food";
import Veterinary from "./components/CatsitterBoard/Veterinary/Veterinary";
import Education from "./components/CatsitterBoard/Education/Education";
import Warning from "./components/CatsitterBoard/Warning/Warning";
import HumanCB from "./components/CatsitterBoard/Human/Human";


import Footer from "./components/Footer/Footer";
// import NotFound from "./components/NotFound/NotFound";


function App() {

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <div className="app__container">
          <NavbarLanding />
          {/* <NavbarCatsitter /> */}

          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/ma-maison" element={<Human />}></Route>
            <Route path="/espace-catsitter" element={<CatsitterBoard />}></Route>
            <Route path="/mon-alimentation" element={<Food />}></Route>
            <Route path="/mon-veto" element={<Veterinary />}></Route>
            <Route path="/mon-education" element={<Education />}></Route>
            <Route path="/soyez-vigilants" element={<Warning />}></Route>
            <Route path="/ma-maitresse" element={<HumanCB />}></Route>
            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
