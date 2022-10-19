import React from "react";

import { VscDesktopDownload } from "react-icons/vsc";

function Télétravail() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Télétravail</h1>

          <div className="content__inside">
            <div className="paragraph">
              <VscDesktopDownload />
              <p className="text">
                Utiliser les positions 1 à 3 pour régler la hauteur. Attention,{" "}
              </p>
              <ul>
                <li>
                  Ne pas descendre plus bas que la position 1, elle est réglée
                  au millimètre près (vérifier que rien n'obstrue le petit
                  meuble avant de redescendre le bureau)
                </li>
                <li>
                  Ne pas monter au delà de la position 3 (les câbles ne
                  suivraient pas).{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Télétravail;
