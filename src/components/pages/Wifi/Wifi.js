import React from "react";

import { AiOutlineWifi, AiOutlineLock } from "react-icons/ai";

function Wifi() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Wifi</h1>

          <div className="content__inside">
            <div className="paragraph">
              <AiOutlineWifi />
              <p className="text">Box_Mitsu_2GHZ</p>
              <p className="text">Box_Mitsu_5GHZ</p>
            </div>

            <div className="paragraph">
              <AiOutlineLock />
              <p className="text">W3sh4r3w3c4r3!</p>
            </div>

            <div className="paragraph">
              <p className="text--small">En cas de problème, la box se trouve derrière la tour de l'ordinateur.</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Wifi;
