function LaveVaisselle() {
  return (
    <>
      <div className='page app__content'>
        <div className='content'>
          <h1 className='title title--medium'>Lave-Vaisselle</h1>

          <div className='content__inside'>
            <div className='paragraph'>
              <p className='text bold'>Guide d’utilisation : </p>
              <ul>
                <li>
                  ◇ Les tablettes lave-vaisselle, le liquide de rincage et le sel sont sous l'évier,
                  sur la gauche.
                </li>
                <li>
                  ◇ Vérifier de temps à autre le niveau de sel (dévisser le gros couvercle au fond
                  de la cuve pour vérifier qu'il y a encore du sel visible)
                </li>
                <li>
                  ◇ Recharger le niveau de liquide lorsque le témoin s'allume sur le panneau de
                  contrôle.
                </li>
              </ul>
            </div>
            <div className=' alert'>
              {' '}
              <p className='text bold'>⚠️ Ce qui ne va pas au lave vaisselle :</p>
              <ul>
                <li> - La tasse-bol peinte avec le chat "Ich vermisse dich"</li>
                <li> - La tasse-bol peinte orange, rouge, jaune</li>
                <li> - Les couteaux de chef</li>
                <li> - Les couteaux en céramique</li>
                <li> - La cafetière</li>
                <li> - Les petites tasses à espresso avec les soleil corail</li>
                <li> - Les planches à couper en bois</li>
              </ul>
              <p className='text'>🙏 Merci</p>
            </div>
            <p className='text alert'>
              ℹ️ Laisser la porte du lave-vaisselle toujours entrouverte pour éviter la formation de
              moisissures.{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LaveVaisselle;
