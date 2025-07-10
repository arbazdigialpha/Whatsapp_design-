import React from 'react'
import Call_tab from './Call_tab'
import Chats from './Chats'
import Contacts from './Contacts'

const Tabs = () => {
  return (
    <section className='tabs-section'>
        <Call_tab />
        <Chats />
        <Contacts />
    </section>
  )
}

export default Tabs