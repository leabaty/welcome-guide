import React from "react";

import { GiKnifeFork } from "react-icons/gi";
import { MdWaterDrop, MdFavorite, MdCancel } from "react-icons/md";

function Food() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Mon alimentation</h1>

          <div className="content__inside">
            <div className="paragraph">
              <GiKnifeFork />
              <p className="text">
                Je mange principalement des <b>croquettes</b>, environ 50g par
                jour, ce qui correspond aux 3/4 du petit pot en verre.
                <br />
                Le mieux, c'est de me les donner en 3-4 fois (dont une avant
                d'aller vous coucher, pour votre tranquilité).
              </p>
            </div>

            <div className="paragraph">
              <MdFavorite />
              <p className="text">
                Tous les matins, j'ai le droit à une cuillère à café de{" "}
                <b>pâté</b>.
              </p>
              <p className="text">
                Mes friandises préférées sont les <b>sticks</b>...
                <br /> Vous pouvez les rendre encore plus délicieux en les
                lançant : J'adore courir après !
              </p>
              <p className="text">
                Et mes péchés mignons incongrus : Les haricots verts, le maïs, les
                olives. Miam !
              </p>
            </div>

            <div className="paragraph">
              <MdWaterDrop />
              <p className="text">
                J'aime également qu'on change mon <b>bol d'eau</b> tous les
                jours/tous les 2 jours.
              </p>
            </div>

            <div className="paragraph">
              <MdCancel />
              <p className="text">
                <b>Toxique</b> pour moi : Les plantes en général, le chocolat,
                tout ce qui est trop sucré ou épicé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
