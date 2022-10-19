import React from "react";

import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

function Films() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Films</h1>

          <div className="content__inside">
            <div className="paragraph">
              <p className="text">
                Sur l'ordinateur : app.plex.tv (voir identifiants sur la fiche
                sous l'ordinateur)
              </p>
            </div>

            <div className="paragraph">
              <p className="text"> Session invité :</p>
              <ul>
                <li><AiOutlineUser/> Mitsu's Roomate</li>
                <li><AiOutlineLock/> Bienvenue</li>
              </ul>
            </div>

            <div className="paragraph">
              <p className="text"> Connecter son propre PC à l'ordinateur : </p>
              <ul>
                <li>→  En HDMI: Ecran de gauche </li>
                <li>
                →  En VGA : Ecran de droite (cable à retirer sur le
                  rétroprojecteur si besoin).{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Films;
