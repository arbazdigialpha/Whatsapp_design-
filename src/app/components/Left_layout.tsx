import React from 'react'
import Header from './Header'
import Search from './Search'
import Chatlist from './Chatlist'

const Left_layout = () => {
  return (
    <>
        <Header />
        <Search />
        <section className='chatlist-wrapper'>
          {[...Array(25)].map((_, index) => (
            <Chatlist key={index} />
          ))}
        </section>
    </>
  )
}

export default Left_layout