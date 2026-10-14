import React from 'react'
import Foot from './Footer/Foot'
import Image from './center/Image'
import Head from './Heading/Head'

const Card = (props) => {
  return (
    <div className='shrink-0 p-px '>
      {/*  flex overflow-hidden relative */}
        <div className='justify-between '>
           {/* w-fit h-fit rounded-xl   */}
              <Head head={props.head} bg={props.bg} />
              <Image images={props.images} />
              <Foot caption={props.caption} bg={props.bg} />
        </div>
        
      </div>
    
    
  )
}

export default Card