import React, { useState } from 'react'
import UserImage from '../../assets/user_img.webp'
import Attachment from '../../assets/attachment.jpg';
import ThreeDots from '../../assets/three_dots.png';

const Right_header = () => {

  return (
    <>
        <div className="main-rgt-header">
            <div className="lft-header">
                <div className="img_wrapper profile-photo">   
                    <img src={UserImage.src} alt="userimage" className='pp-img' />
                </div>
                <div className='name-status'>
                    <h3 className='username'>Swathi - THN</h3>
                    <p className='rgt-typing'> typing... </p>
                </div>
            </div>
            <div className="rgt-header top-header-rgt">
                 <div className="msg-img-wrapper right-imgs">
                    <img src={Attachment.src} alt="message icon" className='rgt-img msg-img cur-pointer' />
                </div>
                <div className="threedots-img right-imgs">
                    <img src={ThreeDots.src} alt="threedots icon" className='rgt-img cur-pointer' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Right_header