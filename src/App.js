import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import ScrollToTop from './utils/ScrollToTop';

// COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Landing from './components/pages/Landing/Landing';
import Footer from './components/Footer/Footer';

import Wifi from './components/pages/Wifi/Wifi';
import Musique from './components/pages/Musique/Musique';
import Films from './components/pages/Films/Films';

import LaveVaisselle from './components/pages/LaveVaisselle/LaveVaisselle';
import Nettoyage from './components/pages/Nettoyage/Nettoyage';
import Poubelles from './components/pages/Poubelles/Poubelles';
import Environs from './components/pages/Environs/Environs';
import Clés from './components/pages/Clés/Clés';
import Tourisme from './components/pages/Tourisme/Tourisme';

// import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className='app'>
      <Router>
        <ScrollToTop />
        <div className='app__container'>
          <Navbar />

          <Routes>
            <Route path='/' element={<Landing />}></Route>

            <Route path='/wifi' element={<Wifi />}></Route>
            <Route path='/films' element={<Films />}></Route>
            <Route path='/musique' element={<Musique />}></Route>
            {/* <Route path='/teletravail' element={<Télétravail />}></Route> */}
            <Route path='/lave-vaisselle' element={<LaveVaisselle />}></Route>
            <Route path='/nettoyage' element={<Nettoyage />}></Route>
            <Route path='/poubelles' element={<Poubelles />}></Route>
            <Route path='/environs' element={<Environs />}></Route>
            <Route path='/cles' element={<Clés />}></Route>
            <Route path='/tourisme' element={<Tourisme />}></Route>

            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
