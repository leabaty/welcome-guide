import React from 'react';

import { FaTrash } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

import poubellesImage from '../../../assets/images/poubelles.jpg';

function Poubelles() {
  return (
    <>
      <div className='page app__content'>
        {' '}
        <div className='content'>
          <h1 className='title title--medium'>Poubelles</h1>

          <div className='content__inside'>
            <div className='paragraph'>
              <img
                className='img'
                src={poubellesImage}
                alt="Localisation des poubelles sur l'Avenue Jean Moulin"
              />
            </div>

            <div className='paragraph'>
              <p className='text'> Tout venant : </p>
              <ul>
                <li>
                  <FaTrash />
                  Poubelle de gauche sous l'évier et poubelle de salle de bains. Les sacs poubelles
                  sont juste en dessous du petit tabouret vert sous la poubelle.
                </li>
                <li>
                  <HiLocationMarker />
                  Benne à ordure située sur l'Avenue Jean Moulin (en marron).
                </li>
              </ul>
            </div>

            <div className='paragraph'>
              <p className='text'> Recyclable </p>
              <ul>
                <li>
                  <FaTrash />
                  Poubelle de droite (noire) sous l'évier{' '}
                </li>
                <li>
                  <HiLocationMarker />
                  Benne recyclable située sur l'Avenue Jean Moulin (en jaune).
                </li>
              </ul>
            </div>

            <div className='paragraph'>
              <p className='text'> Verre </p>
              <ul>
                <li>
                  <FaTrash />
                  Pas de poubelles particulière, à trier lors de la descente au local poubelles
                </li>
                <li>
                  <HiLocationMarker />
                  Benne recyclable située sur l'Avenue Jean Moulin (en vert).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Poubelles;
