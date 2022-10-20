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
              <p className="text alert">
                Laisser la porte du lave-vaisselle toujours entrouverte pour
                éviter la formation de moisissures.{" "}
              </p>
              <p className="text">Guide d’utilisation : </p>
              <ul>
                <li>
                  ◇ Remplir la cuve par dessus à l’aide de l’arrosoir jusqu’à
                  entendre un petit son qui indique que la cuve est pleine
                  (ajouter au préalable une cuillère à soupe de liquide de
                  rinçage, qui se trouve sous le lave-vaisselle){" "}
                </li>
                <li>
                  ◇ Vérifier que la bouteille de 5L qui reçoit les eaux usées
                  est bien vide et que le tuyau est bien dedans{" "}
                </li>
                <li>
                  ◇ Déposer l’équivalent d’une cuillère à soupe de gel vaisselle
                  sur le bras oscillant dans la cuve{" "}
                </li>
                <li>◇ Appuyer sur le bouton lancer le cycle.</li>
                <li>
                  Pour plus d'infos :{" "}
                  <a
                    className="underlined"
                    href="https://daan.tech/wp-content/uploads/2021/02/Notice_Mode_Emploi_Bob_le_mini_lave_vaisselle_Daan_Tech_version_mobile_tablette_FR_V2_10_02_2021.pdf"
                  >
                    Voir le manuel complet
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Musique;
