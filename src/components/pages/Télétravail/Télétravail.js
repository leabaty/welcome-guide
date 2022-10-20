import React from "react";

function Télétravail() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Télétravail</h1>

          <div className="content__inside">
            <div className="paragraph">
              <p className="text">
                <ul>
                  <li>
                    {" "}
                    ◇ Utiliser les positions 1 à 3 pour régler la hauteur du bureau.
                    <br/>
                    <br/>
                    Attention:{" "}
                  </li>
                  <li>
                    ◇ <b>Ne pas descendre plus bas que la position 1</b>, elle
                    est réglée au millimètre près (vérifier que rien n'obstrue
                    le petit meuble avant de redescendre le bureau)
                  </li>
                  <li>
                    ◇ <b>Ne pas monter au delà de la position 3</b> (les câbles
                    ne suivraient pas).{" "}
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Télétravail;
