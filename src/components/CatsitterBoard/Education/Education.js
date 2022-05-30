import React from "react";

import { GiSofa } from "react-icons/gi";
import { BsFillAlarmFill } from "react-icons/bs";
import { FaRegAngry } from "react-icons/fa";

function Education() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Mon éducation</h1>

          <div className="content__inside">
            <div className="paragraph">
              <GiSofa />
              <p className="text">
                Je n’ai pas le droit de monter sur les tables ou les plans de
                travail, de griffer les canapés ou de quémander.
              </p>
              <p className="text">
                Si je le fais, tapez dans vos mains et <b>dites fermement “Mitsu, non!”</b> ou
                faites “pschht!”
              </p>
            </div>

            <div className="paragraph">
              <BsFillAlarmFill />
              <p className="text">
                Si je vous réveille avant l'heure, repoussez-moi. (Si vous
                accédez à ma demande, je vais comprendre que ça fonctionne et
                donc réitérer l'expérience... tous les matins ! )
              </p>
            </div>

            <div className="paragraph">
              <FaRegAngry />
              <p className="text">
                Si je vous mords ou je vous griffe (même légèrement), je ne suis pas
                en train de jouer. C’est ma manière de dire “S’il vous plaît,
                laissez-moi!”. Si je vous mords, dites-moi “non!” fermement et
                ignorez-moi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
