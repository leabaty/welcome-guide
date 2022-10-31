import React from "react";
import { Link } from "react-router-dom";

import "./Landing.scss";

import { BsMusicNoteBeamed, BsPinMap } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { HiOutlineFilm } from "react-icons/hi";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GiForkKnifeSpoon, GiHotSurface, GiHouseKeys, GiBroom } from "react-icons/gi";

function Landing() {
  return (
    <>
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Bienvenue 😻 </h1>

          <div className="content__inside">
            <p className="text">
              Bienvenue chez toi ! Petit guide de la maison pour avoir toutes
              les infos sous la main :
            </p>

            <div className="landing__cards">
              <div className="landing__card">
                <Link to="/wifi">
                  <AiOutlineWifi className="landing__card__icon" />
                  <h2 className="title--nano">Wifi</h2>
                </Link>
              </div>

              <div className="landing__card">
                <Link to="/films">
                  <HiOutlineFilm className="landing__card__icon" />
                  <h2 className="title--nano">Films</h2>
                </Link>
              </div>

              <div className="landing__card">
                <Link to="/musique">
                  <BsMusicNoteBeamed className="landing__card__icon" />
                  <h2 className="title--nano">Musique</h2>
                </Link>
              </div>

              <div className="landing__card">
                <Link to="/teletravail">
                  <MdOutlineWorkOutline className="landing__card__icon" />
                  <h2 className="title--nano">Télétravail</h2>
                </Link>
              </div>

              <div className="landing__card">
                <Link to="/lave-vaisselle">
                  <GiForkKnifeSpoon className="landing__card__icon" />
                  <h2 className="title--nano">Lave-Vaisselle</h2>
                </Link>
              </div>

              <div className="landing__card">
                <Link to="/micro-ondes">
                  <GiHotSurface className="landing__card__icon" />
                  <h2 className="title--nano">Micro-Ondes</h2>
                </Link>
              </div>

              <div className="landing__card">
                <Link to="/nettoyage">
                  <GiBroom className="landing__card__icon" />
                  <h2 className="title--nano">Nettoyage</h2>
                </Link>
              </div>

              <div className="landing__card">
                <Link to="/poubelles">
                  <BiTrash className="landing__card__icon" />
                  <h2 className="title--nano">Poubelles</h2>
                </Link>
              </div>

              <div className="landing__card">
                <Link to="/environs">
                  <BsPinMap className="landing__card__icon" />
                  <h2 className="title--nano">Environs</h2>
                </Link>
              </div>

              <div className="landing__card">
                <Link to="/cles">
                  <GiHouseKeys className="landing__card__icon" />
                  <h2 className="title--nano">Clés</h2>
                </Link>
              </div>
              </div>
              
              <p className="text info">
                <b>Ton arrivée</b>
                <ul>
                  <li>◇ Code grille 7642A</li>
                  <li>◇ Code porte principale 7642A</li>
                  <li>◇ Puis interphone à droite : utiliser le bip</li>
                  <li>
                    ◇ Puis dans l'ascenseur, utiliser le bip et appuyer sur 2{" "}
                  </li>
                  <li>
                    ◇ Puis porte « BATY » à droite en sortant de l’ascenseur
                  </li>
                </ul>
              </p>

              <p className="text alert">
                A savoir : Le loquet de la porte fenêtre est cassé, il faut donc
                <b> utiliser le tasseau de bois</b> pour ouvrir/bloquer la
                fenêtre à chaque fois que tu quittes l'appartement. Attention à
                pas te faire enfermer dehors quand tu es sur le balcon (il ne
                faut pas qu'il tombe si tu refermes la porte extérieure)!
                <br />
                Egalement, il faut bien laisser le sac à l'interphone. Il évite
                que la porte de la salle de bains ne vienne en butée de la porte
                principale durant ton absence ! (oui car Monsieur Mitsu bouge
                les portes)
              </p>

              <p className="text info">
                <b>
                  Ajoute cette page à ton écran d'accueil sur ton smartphone :
                </b>
                <br />
                Sur iPhone :
                <ul>
                  <li>
                    ◇ Appuye sur les trois points, puis appuye sur le i pour
                    ouvrir Détails.
                  </li>
                  <li>◇ Appuye sur "Sur l’écran d’accueil."</li>
                  <li>◇ Appuye sur "Ajouter."</li>
                </ul>
                <br />
                Sur Android :
                <ul>
                  <li>◇ Appuye sur les trois points.</li>
                  <li>◇ Appuye sur « Ajouter à l’écran d’accueil ».</li>
                </ul>
              </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
