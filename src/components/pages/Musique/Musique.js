import React from "react";

import { FaShower } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { BiBluetooth } from "react-icons/bi";

import bluetooth from "../../../assets/images/musique-sonru.png"

function Musique() {
  return (
    <>
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Musique</h1>

          <div className="content__inside">
            <div className="paragraph">
              <FaShower />
              <p className="text"> Dans la salle de bains : </p>
              <ul>
                <li>◇ “Alexa, play Radio France Inter” </li>
                <li>◇ “Alexa, play Spotify”</li>
                <li>◇ “Alexa, play Queen”</li>
                <li>◇ Mais aussi : “Alexa, what’s the time ?”</li>
              </ul>
            </div>

            <div className="paragraph">
              <GiSofa />
              <p className="text"> Dans le salon : </p>
              <ul>
                <li>◇ “Ok Google, joue radio France Inter”</li>
                <li>◇ “Ok Google, joue Spotify” </li>
                <li>◇ “Ok Google, joue Queen”</li>
                <li>
                ◇ Mais aussi : “Ok Google, mets une alarme demain matin à 8h30”
                </li>
                <li>
                ◇ Mais aussi : “Ok Google, quel est le temps aujourd’hui ?”
                </li>
              </ul>
            </div>

            <div className="paragraph">
              <BiBluetooth />
              <p className="text">
                Allumer les enceintes en appuyant sur le bouton "ON”, puis se
                connecter en Bluetooth au récepteur BT1002. Pour ajouter un
                nouvel appareil, appuyer le le bouton sur le côté droit pendant 3 secondes.
              </p>

              <img className="img" src={bluetooth} alt="SONRU Emetteur et Recepteur Bluetooth 5.0"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Musique;