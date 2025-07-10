import React from 'react'
import UserImage from '../../assets/user_img.webp'

const Chatlist = () => {
  return (
    <>
      <ul className='chatlist'>
        <li className='chatlist-item'>
          <div className='chatlist-left'>
            <div className="img-wrapper profile-photo">
              <img src={UserImage.src} alt="user dp" className='pp-img' />
            </div>
            <div className="chatlist-info name-status">
              <h3 className='username'>Swathi - THN</h3>
              <p className='typing'>typing...</p>
            </div>
          </div>
          <div className="chatlist-right">
            <p className='time'> yesterday </p>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Chatlist