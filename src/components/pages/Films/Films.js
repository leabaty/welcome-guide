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
            <p className="text">
              La prise qui commande l'ordinateur s'allume à la voix : "Ok Google, allume le PC."
              Il faut ensuite appuyer sur le bouton de la tour.
            </p>

            <div className="paragraph">
              <p className="text">
                Puis :{" "}
                <a
                  className="bold"
                  href="https://app.plex.tv/auth/#!?clientID=7dusxf63uye4cx0t942gp597&context%5Bdevice%5D%5Bproduct%5D=Plex%20Web&context%5Bdevice%5D%5Bversion%5D=4.92.0&context%5Bdevice%5D%5Bplatform%5D=Chrome&context%5Bdevice%5D%5BplatformVersion%5D=106.0&context%5Bdevice%5D%5Bdevice%5D=OSX&context%5Bdevice%5D%5Bmodel%5D=hosted&context%5Bdevice%5D%5BscreenResolution%5D=1440x688%2C2560x1440&context%5Bdevice%5D%5Blayout%5D=desktop&context%5Bdevice%5D%5Bprotocol%5D=https&forwardUrl=https%3A%2F%2Fapp.plex.tv%2Fdesktop%2F%23%21%2Flogin%3FpinID%3D1292028995&code=6i61f8kvjnla9d8gxcyk8u23p&language=en-GB&guestToken=gX-1c1sU-CxX-AoNVyqs"
                >
                  app.plex.tv
                </a>{" "}
                (voir identifiants sur la fiche sous les écrans), puis "Movies
                & Shows", puis "BeFlix v3".
              </p>
            </div>

            <div className="paragraph">
              <p className="text underlined"> Session invité ordi :</p>
              <ul>
                <li>
                  <AiOutlineUser /> Mitsu's Roomate
                </li>
                <li>
                  <AiOutlineLock /> Bienvenue
                </li>
              </ul>
            </div>

            <div className="paragraph">
              <p className="text underlined">
                {" "}
                Connecter son propre PC à l'ordinateur :{" "}
              </p>
              <ul>
                <li>→ En HDMI: Ecran de gauche </li>
                <li>
                  → En VGA : Ecran de droite (cable à retirer sur le
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
