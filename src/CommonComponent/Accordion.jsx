import React, { useState } from 'react';
import '../css/Accordion.css';
import Footercontent from '../Constants/Footercontent';
const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='footer_title'>More About Meesho :</div>
        <div className='arrow'>{isActive ? <i class="fa fa-angle-down" aria-hidden="true"></i> : <i class="fa fa-angle-up" aria-hidden="true"></i>}</div>
      </div>
      {isActive && <div className="accordion-content">
        
      <div><Footercontent/></div>
      </div>}
    </div>
  );
};

export default Accordion;