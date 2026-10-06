import React from 'react'
import { ArrowRight } from 'lucide-react'

const CardText = (props) => {
  return (
<div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between' >
            <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center  '>{props.id+1}</h2>
            <p className='text-shadow-2xs text-white text-sm mb-14 leading-relaxed'>{props.caption}</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.btnBg}} className='bg-blue-500 rounded-full text-white px-8 py-2 font-medium '>{props.tag}</button>
                <button style={{backgroundColor:props.btnBg}} className='bg-blue-500 rounded-full text-white px-3 py-2 font-medium '><ArrowRight /></button>
            </div>
</div>
  )
}

export default CardText