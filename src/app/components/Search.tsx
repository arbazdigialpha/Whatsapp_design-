import React from 'react'
import SearchImg from '../../assets/search.png'

const Search = () => {
  return (
    <>
        <div className="search-wrapper ms-hide">
            <img src={SearchImg.src} alt="user dp" className='chat-search' />
            <input type="text" placeholder='Search or start new chat' className='input-box' />
        </div>
    </>
  )
}

export default Search