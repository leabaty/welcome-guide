import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';

function Films() {
  return (
    <>
      {' '}
      <div className='page app__content'>
        <div className='content'>
          <h1 className='title title--medium'>Films</h1>

          <div className='content__inside'>
            <p className='text'>
              Je n'ai pas de TV, si vous souhaitez regarder des films et vous n'avez pas pris de PC
              avec vous, vous pouvez utiliser le PC portable situé dans la bibliothèque du salon.
            </p>

            <div className='paragraph'>
              <p className='text underlined'> Session invité ordi :</p>
              <ul>
                <li>
                  <AiOutlineUser /> Mitsu's Roomate
                </li>
                <li>
                  <AiOutlineLock /> Bienvenue
                </li>
              </ul>
            </div>

            <div className='paragraph'>
              <p className='text underlined'> Connecter son propre PC au rétroprojecteur : </p>
              <ul>
                <li>→ En HDMI directement </li>
                <li>
                  → En USB-C : Il y a un adaptateur sur l'étagère du rétroprojecteur (petit cable
                  blanc).{' '}
                </li>
              </ul>
              <p className='text'>
                {' '}
                Puis, utilisez la télécommande "longue" (sans marque) située sur la table du canapé.
                Appuyez deux fois pour allumer le rétroprojecteur. Appuyez deux fois pour éteindre
                (merci de ne pas éteindre sauvagement le rétroprojecteur à l'aide de la commande
                google ou du bouton multiprise.){' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Films;
