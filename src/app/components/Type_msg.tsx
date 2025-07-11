import React from 'react'
import Emoji from '../../assets/emoji.png'
import sendMsg from '../../assets/send_msg.png'
import Mic from '../../assets/mic.png'

const Type_msg = () => {
  return (
    <section className='type-msg-sec'>
        <div className='msg-wrapper'>
            <div className="emoji-img type-msg-imgs">
              <img src={Emoji.src} alt="emoji" loading='lazy' className='cur-pointer' />
            </div>
            <div className='msg-type-input'>
                <input type="text" placeholder='type something...' className='input-fld' />
                <img src={sendMsg.src} alt="send message image" loading='lazy' className='send-msg-icon cur-pointer' />
            </div>
            <div className='mic-image type-msg-imgs'>
                <img src={Mic.src} alt="mic image" loading='lazy' className='cur-pointer' />
            </div>
        </div>
    </section>
  )
}

export default Type_msg