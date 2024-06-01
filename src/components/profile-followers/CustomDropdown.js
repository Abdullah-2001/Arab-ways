import React, { useState } from 'react';
import more from '../../assets/more.svg'
import { BsFillPersonDashFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";
import './Dropdown.css';

const Dropdown = () => {
  const options = [
    { value: 'Unfollow', label: 'Unfollow', icon: <BsFillPersonDashFill /> },
    { value: 'ViewProfile', label: 'View Profile', icon: <AiFillEye /> },
    { value: 'BlockPerson', label: 'Block Person', icon: <BiBlock /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const storedLanguage = localStorage.getItem("language");


  return (
    <div className={`dropdown-container ${isOpen ? 'open' : ''}`} style={{
      marginLeft:storedLanguage === "en" ? "auto" : "0",
      marginRight:storedLanguage === "en" ? "0" : "auto"
    }}>
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <img src={more} alt="" className='ellipsis-icon' />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionSelect(option)}
            >
              {option.icon}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
