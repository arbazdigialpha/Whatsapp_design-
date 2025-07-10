'use client'
import React, { useState } from "react";
import Message from '../../assets/white_msg.png';
import ThreeDots from '../../assets/white_dots.png';   
import Search from '../../assets/search.png';   
import Dropdown from "./dropdown";

const Mob_header_rgt = () => {
  const [showDrop , setShowDrop] = useState(false);

        const toggleDropdown = () => {
            setShowDrop((prev) => !prev);
        };
  return (
    <section className="mob-rgt-icons">
        <div className="search-icon right-imgs">
            <img
            src={Search.src}
            alt="search icon"
            className="rgt-img cur-pointer"
            />
      </div>
      <div className="msg-img-wrapper right-imgs">
            <img
            src={Message.src}
            alt="message icon"
            className="rgt-img msg-img cur-pointer"
            />
      </div>
      <div className="threedots-img right-imgs">
            <img
            src={ThreeDots.src}
            alt="threedots icon"
            className="rgt-img cur-pointer"
            onClick={toggleDropdown}
            />
            { showDrop && <Dropdown />}
      </div>    
    </section>
  );        
};

export default Mob_header_rgt;
