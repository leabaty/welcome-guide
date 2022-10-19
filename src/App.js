import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import ScrollToTop from "./utils/ScrollToTop";

// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/pages/Landing/Landing";
import Footer from "./components/Footer/Footer";

import Wifi from "./components/pages/Wifi/Wifi";
import Musique from "./components/pages/Musique/Musique";
import Films from "./components/pages/Films/Films";
import Télétravail from "./components/pages/Télétravail/Télétravail";

import LaveVaisselle from "./components/pages/LaveVaisselle/LaveVaisselle";
import MicroOndes from "./components/pages/MicroOndes/MicroOndes";
import Poubelles from "./components/pages/Poubelles/Poubelles";
import Environs from "./components/pages/Environs/Environs";

// import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <div className="app__container">
          <Navbar />

          <Routes>
            <Route path="/" element={<Landing />}></Route>

            <Route path="/wifi" element={<Wifi />}></Route>
            <Route path="/films" element={<Films />}></Route>
            <Route path="/musique" element={<Musique />}></Route>
            <Route path="/teletravail" element={<Télétravail />}></Route>

            <Route path="/lave-vaisselle" element={<LaveVaisselle />}></Route>
            <Route path="/micro-ondes" element={<MicroOndes />}></Route>
            <Route path="/poubelles" element={<Poubelles />}></Route>
            <Route path="/environs" element={<Environs />}></Route>
            
            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
