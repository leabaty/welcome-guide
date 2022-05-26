import React from "react";
import { Link } from "react-router-dom";

import "./CatsitterBoard.scss";

import { BiHomeHeart } from "react-icons/bi";
import { GiDogBowl } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";

function CatsitterBoard() {
  return (
    <>
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Tableau de Bord</h1>

          <div className="content__inside">
            <p className="text">
              Vous trouverez ici toutes les infos nécessaires pour prendre soin de moi.
            </p>

            <p className="text">
              Un grand merci ! 🐾
            </p>

            <div className="catsitterboard__cards">
              

              
              <div className="catsitterboard__card">
                <Link to="/mon-alimentation">
                  <GiDogBowl className="catsitterboard__card__icon" />
                  <h2 className="title--nano">Mon alimentation</h2>
                </Link>
              </div>

              <div className="catsitterboard__card">
                <Link to="/mon-veto">
                  <MdOutlineHealthAndSafety className="catsitterboard__card__icon" />
                  <h2 className="title--nano">Mon véto</h2>
                </Link>
              </div>

              <div className="catsitterboard__card">
                <Link to="/ma-maitresse">
                  <BiHomeHeart className="catsitterboard__card__icon" />
                  <h2 className="title--nano">Contacter ma maîtresse</h2>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default CatsitterBoard;
