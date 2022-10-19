import React from "react";
import { Link } from "react-router-dom";

import "./Landing.scss";

import { BsMusicNoteBeamed, BsPinMap } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { HiOutlineFilm } from "react-icons/hi";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GiForkKnifeSpoon, GiHotSurface } from "react-icons/gi";

function Landing() {
  return (
    <>
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Bienvenue 😻 </h1>

          <div className="content__inside">
            <p className="text">
              A savoir : Le loquet de la porte fenêtre est cassé, il faut donc
              utiliser le tasseau de bois pour ouvrir/bloquer la fenêtre (à
              chaque fois que tu quittes l'appartement).
            </p>

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

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
