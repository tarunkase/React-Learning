import React from 'react'
import LeftText from './LeftContainer/LeftText'
import RightContainer from './RightContainer/RightContainer'

const Page1Context = (props) => {
  return (
    <div className=' py-10 px-18 flex justify-between items-center gap-10 min-h-fit'>
        <LeftText/>
        <RightContainer  users={props.users} />
    </div>
  )
}

export default Page1Context