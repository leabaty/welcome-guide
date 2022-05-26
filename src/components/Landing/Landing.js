import React from "react";
import { Link } from "react-router-dom";

import "./Landing.scss";

import { BiHomeHeart } from "react-icons/bi";
import { GiDogBowl } from "react-icons/gi";
import { MdHolidayVillage } from "react-icons/md";

function Landing() {
  return (
    <>
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Bonjour !</h1>

          <div className="content__inside">
            <p className="text">
              Je m'appelle <span className="bold">Mitsu</span>.
            </p>

            <img
              className="landing__img"
              src="https://i.ibb.co/ggkYp7d/mitsu.jpg"
              alt="mitsu"
            />

            <p className="text">
              Je suis un chat très curieux, et j'aime donc me promener et
              rencontrer de nouveaux humains. <br /> Mais si vous me croisez
              aujourd'hui, c'est peut être que je me suis un peu trop éloigné de
              chez moi. <br /> Pour vérifier cela, rien de plus simple :
            </p>

            <div className="landing__card">
              <Link to="/ma-maitresse">
                <BiHomeHeart className="landing__card__icon" />
                <h2 className="title--nano">Ma maîtresse</h2>
              </Link>
            </div>

            <p className="text">
              Vous avez l'immense honneur de ma présence lors d'une période où
              je suis en garde chez vous ? Alors c'est par ici :
            </p>

            <div className="landing__card">
              <Link to="/espace-catsitter">
                <MdHolidayVillage className="landing__card__icon" />
                <h2 className="title--nano">Espace Catsitter</h2>
              </Link>
            </div>

            <h2 className="title title--small">
              Merci de prendre soin de moi !
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
