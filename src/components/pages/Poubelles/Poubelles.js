import React from "react";

import { FaTrash } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function Poubelles() {
  return (
    <>
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Poubelles</h1>

          <div className="content__inside">
            <div className="paragraph">
              <p className="text"> Tout venant : </p>
              <ul>
                <li>
                  <FaTrash />
                   Poubelle de gauche et poubelle de salle de bains.{" "}
                </li>
                <li>
                  <HiLocationMarker />
                   Vide ordures : porte à gauche de l’ascenseur{" "}
                </li>
              </ul>
            </div>

            <div className="paragraph">
              <p className="text"> Recyclable </p>
              <ul>
                <li>
                  <FaTrash />
                  Poubelle de droite (noire) sous l'évier{" "}
                </li>
                <li>
                  <HiLocationMarker />
                  Descendre au -1, prendre la porte à droite en sortant de
                  l’ascenseur qui mène au parking, passer le sas, c’est la
                  première porte à droite (“Local poubelles”).
                </li>
              </ul>
            </div>

            <div className="paragraph">
              <p className="text"> Verre </p>
              <ul>
                <li>
                  <FaTrash />
                  Pas de poubelles particulière, à trier lors de la descente au
                  local poubelles
                </li>
                <li>
                  <HiLocationMarker />
                  Descendre au -1, prendre la porte à droite en sortant de
                  l’ascenseur qui mène au parking, passer le sas, c’est la
                  première porte à droite (“Local poubelles”).
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
