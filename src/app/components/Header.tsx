'use client'
import React, { useState } from 'react'
import WithoutDp from '../../assets/withoutdp.png';
import Message from '../../assets/message.png';
import ThreeDots from '../../assets/three_dots.png';
import Dropdown from './dropdown';


const Header = () => {
    const [showDrop , setShowDrop] = useState(false);


    const toggleDropdown = () => {
        setShowDrop((prev) => !prev);
    };

  return (
    <>
        <div className="main-lft-header ms-hide">
            <div className="header_left">
                <div className="img_wrapper">   
                    <img src={WithoutDp.src} alt="logo" className='remove-dp cur-pointer' />
                </div>
            </div>
            <div className='header-right top-header-rgt'>
                <div className="msg-img-wrapper right-imgs">
                    <img src={Message.src} alt="message icon" className='rgt-img msg-img cur-pointer' />
                </div>
                <div className="threedots-img right-imgs">
                    <img src={ThreeDots.src} alt="threedots icon" className='rgt-img cur-pointer' onClick={toggleDropdown}/>
                    { showDrop && <Dropdown />}
                </div>
            </div>
        </div>
    </>
  )
}

export default Header