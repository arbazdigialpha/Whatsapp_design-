'use client';
import React, { useState } from 'react'
import Left_layout from './components/Left_layout'
import Right_layout from './components/Right_layout'
import Mobile_header from './components/Mobile_header'
import dynamic from 'next/dynamic';

const LazyOverlay = dynamic(() => import('./components/BgOverlay') , {
  loading : () => <p> loading... </p>
})
const LazyModal = dynamic(() => import('./components/UploadModals') , {
  loading : () => <p> loading... </p>
})

const Page = () => {

  const [showModal , setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModel = () =>{
    setShowModal(false)
  }

  return (
    <main className='main-layout'>
        <div className="layouts">
          <Mobile_header />
          <section className='left-part'>
            <Left_layout />
          </section>
          <section className='right-part'>
            <Right_layout onIconClick = {openModal}/>
          </section>
        </div>
          <LazyOverlay onClick = {closeModel} isVisible = {showModal} />         
          <LazyModal onClose = {closeModel} isVisible = {showModal} />
    </main>
  )
}

export default Page