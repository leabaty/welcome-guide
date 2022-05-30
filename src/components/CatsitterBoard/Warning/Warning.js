import React from "react";

import { MdWindow, MdCatchingPokemon } from "react-icons/md";
import { BsDoorOpenFill } from "react-icons/bs";

function Warning() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Soyez vigilants !</h1>

          <div className="content__inside">

            <div className="paragraph">
              <BsDoorOpenFill />
              <p className="text">
                Attention, je sais ouvrir les portes ! <b>Merci de fermer la porte
                d’entrée à clé.</b> 
              </p>
              <p className="text">
                Ne me laissez pas seul sur un balcon ou près d’une fenêtre
                ouverte : Je suis parfois un peu (trop) aventurier…
              </p>

            </div>

            <div className="paragraph">
              <MdCatchingPokemon />
              <p className="text">
                Si je m’échappe, essayez de me faire revenir <b>en agitant un stick
                dans son enveloppe,</b> ou encore à écraser du pâté dans mon petit
                bol.
                <br /> Je saurais reconnaître ces bruits à des kilomètres...
              </p>
            </div>

            <div className="paragraph">
              <MdWindow />
              <p className="text">
                Et pour finir, faites attention à ce que les <b>fenêtres soient bien
                fermées</b> avant de partir de la maison. Merci beaucoup !
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Warning;
