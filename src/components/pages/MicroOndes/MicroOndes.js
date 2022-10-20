import React from "react";

import MicroOndes1 from "../../../assets/images/MicroOndes1.png"
import MicroOndes2 from "../../../assets/images/MicroOndes2.png"
import MicroOndes3 from "../../../assets/images/MicroOndes3.png"
import MicroOndes4 from "../../../assets/images/MicroOndes4.png"

function MicroOndes() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Micro-Ondes</h1>

          <div className="content__inside">
            <div className="paragraph">
              <p className="text alert">
                Attention, le micro ondes est doté d'une fonction four, d'une
                fonction micro-ondes et d'une fonction gril.<br/> <br/> ◇ Pas de plastique en
                mode four
                <br/>◇ Pas de métal en mode micro-ondes!
              </p>

              <p className="text">
Mode d'emploi :
              </p>
              <img className="img" src={MicroOndes2} alt="Mode emploi micro ondes"/>
              <img className="img" src={MicroOndes1} alt="Mode emploi micro ondes"/>
              <img className="img" src={MicroOndes3} alt="Mode emploi micro ondes"/>
              <img className="img" src={MicroOndes4} alt="Mode emploi micro ondes"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MicroOndes;
