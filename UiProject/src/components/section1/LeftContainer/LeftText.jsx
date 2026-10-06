import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'


const LeftText = () => {
  return (
    <div className='h-full w-1/4  rounded-lg'> 
       {/* bg-gray-100 */}
      <HeroText />

      <Arrow />
      
      </div>
  )
}

export default LeftText