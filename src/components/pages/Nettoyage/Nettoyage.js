import React from 'react';

function Nettoyage() {
  return (
    <>
      {' '}
      <div className='page app__content'>
        <div className='content'>
          <h1 className='title title--medium'>Nettoyage</h1>

          <div className='content__inside'>
            <p className='text left'>
              <span className='underlined'>L'aspi </span>se trouve dans le placard à vêtements,
              première porte en bas.
            </p>

            <p className='text left'>
              Concernant les
              <span className='underlined'> draps, </span> merci de les retirer et de les mettre
              dans la corbeille de linge sale à l'issue du séjour 🙏. Encore mieux si vous avez le
              temps, lancer un cycle m'aiderait beaucoup !
            </p>

            <p className='text bold'>Au besoin: </p>

            <p className='text left'>
              Besoin d'une
              <span className='underlined'> nouvelle éponge </span>? Il y en a au-dessus du placard
              haut de la kitchenette, dans le petit casier en métal.
            </p>

            <p className='text left'>
              Les
              <span className='underlined'> torchons </span> sont également au-dessus du placard
              haut de la kitchenette, dans le panier noir à droite.
            </p>

            <p className='text left'>
              L'
              <span className='underlined'> éponge de salle de bains</span> se trouve généralement
              dans la douche.
            </p>

            <p className='text left'>
              La
              <span className='underlined'> lessive </span> se trouve dans le placard à vêtements,
              dans une boite en carton vert sur la dernière étagère.
            </p>

            <p className='text'>
              <ul>
                <li className='underlined'>Pour la serpillère,</li>
                <li>
                  ◇ La serpillère se trouve derrière la machine à laver. Attention à ne pas bouger
                  le tuyau d'évacuation de cette dernière en le manipulant 🙏.{' '}
                </li>
                <li>
                  ◇ La lavette se trouve généralement à sécher dehors/sur les parois de douche si
                  elle n'est pas directement sur la tête de serpillère.
                </li>
              </ul>
            </p>

            <p className='text bold'>Merci beaucoup !</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nettoyage;
