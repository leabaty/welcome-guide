import React from "react";

import { BsTelephoneOutbound } from "react-icons/bs";

import "./Veterinary.scss";

function Veterinary() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Mon vétérinaire</h1>

          <div className="content__inside">
            <p className="text">
              En cas de problème vous pouvez m'amener directement chez mon
              vétérinaire, au{" "}
              <span className="bold">232 rue des Pyrénées, 75020 Paris</span> :
            </p>

            <div className="btn--call">
              <a href="tel:0033450513333" className="btn btn--medium">
                <BsTelephoneOutbound className="btn__icon" /> 01 46 36 84 21
              </a>
            </div>

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2624.5261226767425!2d2.3969005!3d48.8672461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d919ae8bc7d%3A0x3556bb07d01d0351!2sClinique%20V%C3%A9t%C3%A9rinaire%20Gambetta!5e0!3m2!1sfr!2sfr!4v1653938566825!5m2!1sfr!2sfr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinique vétérinaire du Thiou"
                width="100%"
              ></iframe>
            </div>

            <p className="text">
              Pour votre sécurité et la mienne, je suis vacciné contre la rage,
              je suis à jour de mon traitement antipuce, et je suis doté d'une
              puce électronique et d'un passeport européen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Veterinary;
