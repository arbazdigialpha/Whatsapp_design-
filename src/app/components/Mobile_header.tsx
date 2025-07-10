import React from 'react'
import Mob_header_lft from './Mob_header_lft'
import Mob_header_rgt from './Mob_header_rgt'
import Tabs from './Tabs'

const Mobile_header = () => {
  return (
    <section className='mob-header'>
        <div className="mob-hd-wrp">     
            <Mob_header_lft />
            <Mob_header_rgt />
        </div>
        <Tabs />
    </section>
  )
}

export default Mobile_header