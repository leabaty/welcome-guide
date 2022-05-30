import React, { useState } from "react";

import { BsTelephoneOutbound } from "react-icons/bs";

function HumanCB() {
  const [mobileNumber, showMobileNumber] = useState(false);

  const handleClick = () => {
    showMobileNumber(true);
  };

  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Ma maîtresse</h1>

          <div className="content__inside">
            
            <p className="text">
              Vous pouvez appeler ma maîtresse directement à l'aide de ce bouton :
            </p>

            {mobileNumber ? (
              <div className="btn--call">
                <a
                  href="tel:00336676051735"
                  className="btn btn--medium btn--call"
                >
                  <BsTelephoneOutbound className="btn__icon" /> 06 76 05 17 35
                </a>
              </div>
            ) : (
              <div>
                <button className="btn btn--medium" onClick={handleClick}>
                  Cliquez pour révéler
                </button>
              </div>
            )}

            <p className="text">Un grand merci ! 🐾</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HumanCB;
