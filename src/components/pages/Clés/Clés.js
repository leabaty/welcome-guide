import React from "react";

import { GoLinkExternal } from "react-icons/go";

function Clés() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Clés</h1>

          <div className="content__inside">
            <p className="text">
              Pour me redonner les clés, plusieurs possibilités :
              <ul>
                <li>◇ En mains propres (si tu es sur Paris)</li>
                <li>◇ Dans un <a target="_blank" className="underlined" href="https://www.monkey-locky.com/" rel="noreferrer">casier Monkey Locky </a><GoLinkExternal/></li>
                <li>◇ Via mon voisin</li>
                <li>◇ Via ton boulot</li>
              </ul>
            </p>

            <p className="text alert">
<p className="bold" >Ne jamais laisser les clés dans la boîte aux lettres</p> sans mon avis explicite. 
A Paris c'est la première cause de cambriolage... et l'assurance ne prend alors rien en charge.
              </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default Clés;
