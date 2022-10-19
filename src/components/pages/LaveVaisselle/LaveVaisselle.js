import React from "react";

import { GiForkKnifeSpoon } from "react-icons/gi";

function Musique() {
  return (
    <>
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Lave-Vaisselle</h1>

          <div className="content__inside">
            <div className="paragraph">
              <GiForkKnifeSpoon />
              <p className="text">
                Laisser la porte du lave-vaisselle toujours entrouverte pour
                éviter la formation de moisissures.{" "}
              </p>
              <p className="text">Guide d’utilisation : </p>
              <ul>
                <li>
                  Remplir la cuve par dessus à l’aide de l’arrosoir jusqu’à
                  entendre un petit son qui indique que la cuve est pleine
                  (ajouter au préalable une cuillère à soupe de liquide de
                  rinçage){" "}
                </li>
                <li>
                  Vérifier que la bouteille de 5L qui reçoit les eaux usées est
                  bien vide et que le tuyau est bien dedans{" "}
                </li>
                <li>
                  Déposer l’équivalent d’une cuillère à soupe de gel vaisselle
                  sur le bras oscillant dans la cuve{" "}
                </li>
                <li>Appuyer sur le bouton lancer le cycle.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Musique;
