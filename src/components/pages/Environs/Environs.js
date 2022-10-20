import React from "react";

import "./Environs.scss";

function Environs() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Les environs</h1>

          <div className="content__inside">
            <div className="paragraph">
              <p className="text bold">Charlie’s Market</p>
              <p className="text">
                Un petit supermarché qui propose une sélection de produits
                premium à des prix défiant toute concurrence puisqu’il s’agit
                que de DLC courtes !
              </p>

              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.418770374229!2d2.4031111163599115!3d48.86929287928875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d9bcfdf5b15%3A0x36917f6ecb78626!2sCharlie&#39;s%20Market!5e0!3m2!1sfr!2sfr!4v1666260057336!5m2!1sfr!2sfr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Charlie's Market"
                  width="100%"
                ></iframe>
              </div>
            </div>

            <div className="paragraph">
              <p className="text bold">Boulangeries</p>

              <p className="text underlined"> Le Délice de Bagnolet </p>
              <ul>
                <li>◇ Boulanger adorable</li>
                <li>◇ Une bonne sélection de pains et viennoiseries</li>
                <li>◇ Les prix sont abordables et les horaires larges</li>
                <li>⚠ Fermé le vendredi</li>
              </ul>

              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.880156322362!2d2.4069504775411508!3d48.86914110071448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa1f6befeb3126208!2sLe%20D%C3%A9lice%20de%20Bagnolet.!5e0!3m2!1sfr!2sfr!4v1666260250502!5m2!1sfr!2sfr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Le Délice de Bagnolet"
                  width="100%"
                ></iframe>
              </div>

              <p className="text underlined"> La Gambette à Pain</p>
              <ul>
                <li>◇ Large sélection de pains bio et originaux</li>
                <li>◇ Quart de "mon pain préféré" à goûter absolument !</li>
                <li>◇ Viennoiseries excellentes</li>
                <li>⚠ Fermé le weekend</li>
              </ul>

              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.3937305590507!2d2.400820916359903!3d48.869770279288495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d9a194c495f%3A0x2498a67de0b52039!2sLa%20Gambette%20%C3%A0%20Pain!5e0!3m2!1sfr!2sfr!4v1666260372351!5m2!1sfr!2sfr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="La Gambette à Pain"
                  width="100%"
                ></iframe>
              </div>
            </div>

            <div className="paragraph">
              <p className="text bold">Le thaï à emporter</p>
              <p className="text">
                Le Palais de Pelleport : De l'extérieur, ça ne paie pas de mine,
                et pourtant ce thaï en vaut le coup ! Prix très abordables, et
                nourriture excellente. A visiter en cas de flemme...
              </p>

              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.476927078574!2d2.3977383775746857!3d48.86818407133347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d90f2955209%3A0xd255f129219206dc!2sPalais%20De%20Pelleport!5e0!3m2!1sen!2sfr!4v1666260694067!5m2!1sen!2sfr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Palais De Pelleport"
                  width="100%"
                ></iframe>
              </div>
            </div>

            <div className="paragraph">
              <p className="text bold">Le rendez-vous local</p>
              <p className="text">
                Le Padam : un petit bar/traiteur un poil gourmet à taille
                humaine, qui propose également une sélection de bières locales,
                de vins naturels et de boissons un peu recherchées.
              </p>

              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.1203013825236!2d2.4024928697256898!3d48.86810249820834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d9b2d300001%3A0xf91db64cd7072ba6!2sLe%20Padam!5e0!3m2!1sen!2sfr!4v1666260892321!5m2!1sen!2sfr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Palais De Pelleport"
                  width="100%"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Environs;
