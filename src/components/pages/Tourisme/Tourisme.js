import './Tourisme.scss';

function Tourisme() {
  const activities = [
    // {
    //   lieu: 'Carry',
    //   type: 'Aquatique',
    //   denomination: 'Découverte guidée du parc marin naturel en snorkeling',
    //   description: "UNIQUEMENT DURANT L'ETE. Inscription obligatoire, activité gratuite.",
    //   quand: "Jeudis matin, samedis matin pendant l'été",
    //   lien: 'https://www.otcarrylerouet.fr/visites-ateliers-parc-marin.html',
    //   distance: '15 min en vélo',
    // },
    {
      lieu: 'Carry',
      type: 'Aquatique',
      denomination: '⭐️ Parc marin naturel en snorkeling',
      description:
        'La zone marine protégée devant Carry-le-Rouet a été créée en décembre 1982. Il s’agit d’une aire de 85 ha qui borde le littoral entre le port de Carry et l’anse du Rouet, et qui s’étend jusqu’à 1 km au large, au voisinage de la limite profonde des herbiers de posidonie, à 30 m de profondeur. Les fonds rocheux sont présents en bordure littorale et se prolongent au large sous forme de dalles et de blocs émergent de l’herbier, les plus importants se situant entre 10 et 15 mètres de profondeur. Je recommande la plage du Cap Rousset ou la Calanque des Bouchons comme point de départ.',
      lien: 'https://parcmarincotebleue.fr/le-parc/#territoire_',
      distance: '20 min en vélo',
    },
    {
      lieu: 'Sausset',
      type: 'Aquatique',
      denomination: 'Paddle le long de la côte bleue',
      description:
        "Attention : regarder la météo marine AVANT d'y aller, le vent peut se lever subitement. Je vous recommande de partir vers la droite face à la mer, il y a moins de bateaux à gérer (port / plages pas forcément intéressantes côté Sausset-ville). Mettre le leash et partir avec le gilet de flottaison pour plus de sûreté. Vous pouvez mettre vos affaires dans le sac imperméable gris, bien attaché au paddle.",
      quand: '',
      lien: '',
      distance: '0 min',
    },
    {
      lieu: 'Carry',
      type: 'Plage',
      denomination: 'Calanque des eaux salées',
      description:
        "Juste avant d'arriver au village de vacances, il y a un chemin à gauche un peu caché qui part vers la voie ferrée. Il faut le suivre, vous tomberez ensuite sur les escaliers qui descendent à la calanque :). Prendre PMT car beaucoup de choses à voir autour de l'île de la Grande Mona.",
      quand: '',
      lien: 'https://goo.gl/maps/18KQmaoXVDv1eXj36',
      distance: '25 min en vélo / 20 min en bus (L55 ou C8)',
    },
    {
      lieu: 'Sausset',
      type: 'Aquatique',
      denomination: '⭐️ Snorkeling aux Jardins de Sausset',
      description:
        'Impraticable en cas de vent/vagues, sinon très joli ! Y aller avec palmes pour faire un peu de skin diving (fonds environ 5-8m)',
      quand: '',
      lien: 'https://goo.gl/maps/essnFqXhBPVuW8iY7',
      distance: '5 min à pied',
    },
    {
      lieu: 'Sausset',
      type: 'Aquatique',
      denomination: 'Snorkeling le long de la Jetée',
      description:
        "Jusqu'à environ 5m de fond. Partir vers la jetée, à gauche, puis continuer jusqu'à l'herbe de Posidonie. Il y a plein de formations rocheuses et de bancs de sable qui attirent plein de poissons. C'est très joli. En vous penchant sous les roches parfois, vous pourrez avoir la chance de voir un poulpe !",
      quand: '',
      lien: 'https://goo.gl/maps/WQtWCUVRTcjkgMQG9',
      distance: '0 min',
    },
    {
      lieu: 'La Couronne',
      type: 'Aquatique',
      denomination: '⭐️ Snorkeling au Baou Tailla',
      description:
        "Ancienne carrière, il y a de gros blocs de roche posés au fond de l'eau, créeant plein d'endroits pour les poissons et les organismes aquatiques. Failles, tunnels, façades : Avec un peu d'apnée, vous pourrez vous émerveiller de ce joli monde sous-marin. Profondeur : 5 à 18m. Très beau spot coucher de soleil également.",
      quand: '',
      lien: 'https://maps.app.goo.gl/PYVjwzK3e9YCg2hn7',
      distance: '0 min',
    },
    {
      lieu: 'Sausset',
      type: 'Plage',
      denomination: 'Plage type "lagon"',
      description:
        "Du sable fin, de l'eau turquoise dans un cadre moins urbain, et l'impression d'une grande piscine car peu de fond pendant un bout de temps. Par contre, impraticable en weekend (trop de touristes), préférer le matin de manière générale.",
      quand: '',
      lien: 'https://goo.gl/maps/ueB96HZymDFeLXE56',
      distance: '10 min en vélo',
    },
    {
      lieu: 'Niolon -> La Redonne',
      type: 'Rando',
      denomination: '⭐️ Le sentier des douaniers',
      description:
        "A faire absolument ! Prendre 1,5L d'eau au minimum. Compter environ 3-4h de marche + pauses calanques à faire ! Je vous recommande de prendre le train de 9h30 de Sausset (direction marseille, arrêt Niolon) pour ne pas partir trop tard, et revenir le soir de la Redonne avec le train de 17h30 ou 19h30 (direction Miramas, arrêt Sausset).",
      quand: '',
      lien: 'https://www.visorando.com/randonnee-de-niolon-a-la-rodonne-par-le-sentier-de/',
      distance: '10 min en train',
    },
    {
      lieu: 'Sausset',
      type: 'Rando',
      denomination: 'Sentier botanique',
      description:
        "Prendre de l'anti moustique/Partir couverte. On marche à travers un peu de roseaux, et on voit les dégâts qu'a pu cause l'incendie de 2020...",
      quand: '',
      lien: 'https://www.myprovence.fr/les-guides/itineraires/randonnee-pedestre/sausset-les-pins/sentier-botanique-la-roseliere',
      distance: '10 min en vélo / 30 min à pied',
    },
    {
      lieu: 'Sausset',
      type: 'Rando-Plage',
      denomination: "Balade du littoral jusqu'à la Chapelle de Ste Croix",
      description:
        'Compter 2h aller retour, avec un pause à faire sur la plage de ste croix. Eviter les weekends et partir le matin tôt pour éviter la foule sur la plage. Vous pouvez aussi aller en vélo jusqu\'à la plage des Tambours (ou "carrière" d\'après les saussetois) et ensuite faire les 15/20min à pied restants le long de la côte rocheuse à pied.',
      quand: '',
      lien: 'https://goo.gl/maps/WxR1m3rwUaavtKRq7',
      distance: '0 min',
    },
    {
      lieu: 'Niolon',
      type: 'Plage',
      denomination: 'Mini balade et Calanque de Figuerolles',
      description:
        "Prendre le train de la côte bleue jusqu'à Niolon, puis se rendre à pied jusqu'à la Calanque de Figuerolles (environ 20-25min). C'est une petite calanque tranquille, avec moins de monde car il faut marcher un peu.",
      quand: '',
      lien: 'https://maps.app.goo.gl/pRY7iuMQPLxYQSDn6',
      distance: '10 min en train',
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Aquatique':
        return '🏊‍♀️';
      case 'Plage':
        return '🏖️';
      case 'Rando':
        return '🥾';
      case 'Rando-Plage':
        return '🥾🏖️';
      default:
        return '📍';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Aquatique':
        return '#3498db';
      case 'Plage':
        return '#f39c12';
      case 'Rando':
        return '#27ae60';
      case 'Rando-Plage':
        return '#8e44ad';
      default:
        return '#95a5a6';
    }
  };

  const groupedActivities = activities.reduce((acc, activity) => {
    if (!acc[activity.type]) {
      acc[activity.type] = [];
    }
    acc[activity.type].push(activity);
    return acc;
  }, {});
  return (
    <div className='page app__content tourisme'>
      <div className='content'>
        <div className='tourisme__header'>
          <h1 className='title title--medium'>Activités Touristiques</h1>
          <p className='text tourisme__header-subtitle'>
            Découvrez mes endroits préférés dans la région de Sausset-les-Pins 🌸
          </p>
        </div>

        <div className='content__inside tourisme__content'>
          {Object.entries(groupedActivities).map(([type, typeActivities]) => (
            <div key={type} className='tourisme__category'>
              <h2
                className='category-title'
                style={{
                  color: getTypeColor(type),
                  borderBottomColor: getTypeColor(type),
                }}
              >
                <span className='category-icon'>{getTypeIcon(type)}</span>
                {type}
              </h2>

              <div className='tourisme__activities-grid'>
                {typeActivities.map((activity, index) => (
                  <div
                    key={index}
                    className='tourisme__activity-card'
                    style={{
                      borderColor: `${getTypeColor(activity.type)}40`,
                      '--type-color': getTypeColor(activity.type),
                    }}
                  >
                    <div className='tourisme__activity-header'>
                      <div className='header-main'>
                        <h3 className='activity-title'>{activity.denomination}</h3>
                        <span
                          className='location-badge'
                          style={{
                            backgroundColor: getTypeColor(activity.type),
                          }}
                        >
                          {activity.lieu}
                        </span>
                      </div>

                      {activity.distance && (
                        <div className='distance-info'>
                          <span>📍</span>
                          <span className='distance-text'>{activity.distance}</span>
                        </div>
                      )}
                    </div>

                    {activity.description && (
                      <div className='tourisme__activity-description'>
                        <p>{activity.description}</p>
                      </div>
                    )}

                    {activity.quand && (
                      <div className='tourisme__activity-timing'>
                        <div className='timing-badge'>
                          <span>🕒</span>
                          <span>{activity.quand}</span>
                        </div>
                      </div>
                    )}

                    {activity.lien && (
                      <div className='tourisme__activity-link'>
                        <a
                          href={activity.lien}
                          target='_blank'
                          rel='noopener noreferrer'
                          style={{
                            borderColor: getTypeColor(activity.type),
                            color: getTypeColor(activity.type),
                            '--type-color': getTypeColor(activity.type),
                          }}
                        >
                          <span>🔗</span>
                          Plus d'infos
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className='tourisme__tips-section'>
            <h2 className='tips-title'>
              <span>💡</span>
              Conseils pratiques
            </h2>
            <div className='tips-grid'>
              <div className='tip-card'>
                <h4 style={{ color: '#3498db' }}>🏊‍♀️ Activités aquatiques</h4>
                <p>
                  Vérifiez toujours la météo marine avant de partir. Équipement de sécurité
                  recommandé.
                </p>
              </div>
              <div className='tip-card'>
                <h4 style={{ color: '#27ae60' }}>🥾 Randonnées</h4>
                <p>Emportez suffisamment d'eau et partez tôt le matin pour éviter la foule.</p>
              </div>
              <div className='tip-card'>
                <h4 style={{ color: '#f39c12' }}>🏖️ Plages</h4>
                <p>Évitez les weekends pour profiter pleinement. Matins recommandés.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tourisme;
