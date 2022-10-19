import React from "react";

import { GiHotSurface } from "react-icons/gi";

function MicroOndes() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Micro-Ondes</h1>

          <div className="content__inside">
            <div className="paragraph">
              <GiHotSurface />
              <p className="text">
                Attention, le micro ondes est doté d'une fonction four, d'une
                fonction micro-ondes et d'une fonction gril. Pas de plastique en
                mode four, pas de métal en mode micro-ondes !
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MicroOndes;
