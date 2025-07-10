import React from 'react'
import Left_layout from './components/Left_layout'
import Right_layout from './components/Right_layout'
import Mobile_header from './components/Mobile_header'

const page = () => {
  return (
    <main className='main-layout'>
        <div className="layouts">
          <Mobile_header />
          <section className='left-part'>
            <Left_layout />
          </section>
          <section className='right-part'>
            <Right_layout/>
          </section>
        </div>
    </main>
  )
}

export default page