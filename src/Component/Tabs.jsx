import { useState } from 'react';
import Menu from '../Constants/Menu.jsx';
import '../css/Tabs.css'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

  const handleTabHover = (tab, isEntering) => {
    setActiveTab(isEntering ? tab : null);
    setIsDropdownVisible(isEntering);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {Menu.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            // onClick={() => handleTabClick(tab.id)}
            onMouseEnter={() => handleTabHover(tab.id, true)}
            onMouseLeave={() => handleTabHover(tab.id, false)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {isDropdownVisible && activeTab !== null && (
        <div className="dropdown-content">
         <div className="tab_list">
          <ul>
            {Menu.find((tab) => tab.id === activeTab).content.map((item) => (
              <ul key={item} >{item}</ul>
            ))}
          </ul>
          
        </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
