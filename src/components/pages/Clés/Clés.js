import React from 'react';

import { GoLinkExternal } from 'react-icons/go';

function Clés() {
  return (
    <>
      {' '}
      <div className='page app__content'>
        <div className='content'>
          <h1 className='title title--medium'>Clés</h1>

          <div className='content__inside'>
            <p className='text'>
              Pour me redonner les clés, plusieurs possibilités :
              <ul>
                <li>◇ En mains propres</li>
                <li>
                  ◇ Via une boite aux lettres indépendante du logement. Contactez moi pour les
                  détails ✨
                </li>
              </ul>
            </p>

            <p className='text alert'>
              <p className='bold'>
                Ne jamais laisser les clés dans la boîte aux lettres de ce logement
              </p>{' '}
              sans mon avis explicite. L'assurance ne prend alors rien en charge en cas de
              cambriolage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clés;
