import React from "react";

import "./Environs.scss";
import { BsPinMap } from "react-icons/bs";

function Environs() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Les environs</h1>
          <BsPinMap/>

          <div className="content__inside">
            <p className="text">Charlie’s Market :</p>
            <p className="text">
              Un petit supermarché qui propose une sélection de produits premium
              à des prix défiant toute concurrence puisqu’il s’agit que de DLC
              courtes !
            </p>

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
          </div>
        </div>
      </div>
    </>
  );
}

export default Environs;
