import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.scss';

import { BsMusicNoteBeamed, BsPinMap } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import { HiOutlineFilm } from 'react-icons/hi';
import { AiOutlineWifi } from 'react-icons/ai';
import { GiForkKnifeSpoon, GiHouseKeys, GiBroom } from 'react-icons/gi';
import { FaHiking } from 'react-icons/fa';

function Landing() {
  return (
    <>
      <div className='page app__content'>
        <div className='content'>
          <h1 className='title title--medium'>Bienvenue 😻 </h1>

          <div className='content__inside'>
            <p className='text'>
              Bienvenue chez vous ! Petit guide de la maison pour avoir toutes les infos sous la
              main :
            </p>

            <div className='landing__cards'>
              <div className='landing__card'>
                <Link to='/wifi'>
                  <AiOutlineWifi className='landing__card__icon' />
                  <h2 className='title--nano'>Wifi</h2>
                </Link>
              </div>

              <div className='landing__card'>
                <Link to='/films'>
                  <HiOutlineFilm className='landing__card__icon' />
                  <h2 className='title--nano'>Films</h2>
                </Link>
              </div>

              <div className='landing__card'>
                <Link to='/musique'>
                  <BsMusicNoteBeamed className='landing__card__icon' />
                  <h2 className='title--nano'>Musique</h2>
                </Link>
              </div>

              {/* <div className="landing__card">
                <Link to="/teletravail">
                  <MdOutlineWorkOutline className="landing__card__icon" />
                  <h2 className="title--nano">Télétravail</h2>
                </Link>
              </div> */}

              <div className='landing__card'>
                <Link to='/lave-vaisselle'>
                  <GiForkKnifeSpoon className='landing__card__icon' />
                  <h2 className='title--nano'>Lave-Vaisselle</h2>
                </Link>
              </div>

              <div className='landing__card'>
                <Link to='/nettoyage'>
                  <GiBroom className='landing__card__icon' />
                  <h2 className='title--nano'>Nettoyage</h2>
                </Link>
              </div>

              <div className='landing__card'>
                <Link to='/poubelles'>
                  <BiTrash className='landing__card__icon' />
                  <h2 className='title--nano'>Poubelles</h2>
                </Link>
              </div>

              <div className='landing__card'>
                <Link to='/environs'>
                  <BsPinMap className='landing__card__icon' />
                  <h2 className='title--nano'>Environs</h2>
                </Link>
              </div>

              <div className='landing__card'>
                <Link to='/tourisme'>
                  <FaHiking className='landing__card__icon' />
                  <h2 className='title--nano'>A voir</h2>
                </Link>
              </div>

              <div className='landing__card'>
                <Link to='/cles'>
                  <GiHouseKeys className='landing__card__icon' />
                  <h2 className='title--nano'>Clés</h2>
                </Link>
              </div>
            </div>

            <p className='text info'>
              <b>Votre arrivée</b>
              <ul>
                <li>
                  ◇ Parking : Parking gratuit en face de la mer, dans la rue du Paradou et plus
                  généralement le long de l'Avenue Jean Moulin.
                </li>
                <li>
                  ◇ Il n'y a pas de code sur les grilles, elles s'ouvrent uniquement avec le badge.
                </li>
                <li>
                  ◇ L'entrée dans la résidence peut s'effectuer par le grilles Est ou Ouest, c'est
                  le même badge qui ouvre les deux côtés.
                </li>
              </ul>
            </p>

            <p className='text info'>
              <b>Ajoutez cette page à votre écran d'accueil sur votre smartphone :</b>
              <br />
              Sur iPhone :
              <ul>
                <li>◇ Appuyez sur les trois points, puis appuyez sur le i pour ouvrir Détails.</li>
                <li>◇ Appuyez sur "Sur l’écran d’accueil."</li>
                <li>◇ Appuyez sur "Ajouter."</li>
              </ul>
              <br />
              Sur Android :
              <ul>
                <li>◇ Appuyez sur les trois points.</li>
                <li>◇ Appuyez sur « Ajouter à l’écran d’accueil ».</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
