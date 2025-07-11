import React from 'react'
import Header from './Header'
import Right_header from './Right_header'
import Message_section from './Message_section'
import Type_msg from './Type_msg'

  type RightLayoutProps = {
    onIconClick:() => void
  }

const Right_layout = ({ onIconClick } : RightLayoutProps) => {
  return (
    <>
        <Right_header onClick = {onIconClick}  />
        <Message_section />
        <Type_msg />
    </>
  )
}

export default Right_layout