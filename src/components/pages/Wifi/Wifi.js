import React from "react";

import { AiOutlineWifi } from "react-icons/ai";
import { MdPassword } from "react-icons/md";

function Wifi() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Code Wifi</h1>

          <div className="content__inside">
            <div className="paragraph">
              <AiOutlineWifi />
              <p className="text">Box Mitsu 2 ou 5 Ghz.</p>
            </div>

            <div className="paragraph">
              <MdPassword />
              <p className="text">W3sh4r3w3c4r3!</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Wifi;
