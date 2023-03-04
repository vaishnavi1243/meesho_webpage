import React from 'react';
import '../css/Dropdown.css';
import Download_Card from '../Component/Download_card';


const Dropdown = () => {
  return (
    <div className="dropdown_card_header">
      <div className="dropdown-label"><Download_Card/></div> 
    </div>
  );
};

export default Dropdown;
