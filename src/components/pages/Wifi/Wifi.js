import React from 'react';

import { AiOutlineWifi, AiOutlineLock } from 'react-icons/ai';

function Wifi() {
  return (
    <>
      {' '}
      <div className='page app__content'>
        <div className='content'>
          <h1 className='title title--medium'>Wifi</h1>

          <div className='content__inside'>
            <div className='paragraph'>
              <AiOutlineWifi />
              <p className='text'>Bbox_Mitsu</p>
            </div>

            <div className='paragraph'>
              <AiOutlineLock />
              <p className='text'>Sh4r!ng!sc4r!ng...</p>
            </div>

            <div className='paragraph'>
              <p className='text--small'>
                En cas de problème, la box se trouve dans le buffet blanc, porte de droite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wifi;
