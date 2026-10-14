import { ThumbsDown, ThumbsUp } from 'lucide-react'
// import { RiThumbUpFill } from '@remixicon/react'
// import { RiHeartFill, RiHomeLine } from '@remixicon/react';
import React from 'react'

const Foot = (props) => {
  return (
    <div>
        
        <div style={{backgroundColor:[props.bg]}} className='bg-gray-50 rounded-sm p-2  mt-1 flex justify-between'>
          {props.caption}
          <div className='flex justify-between gap-4'>
            <ThumbsDown size={20} strokeWidth={1} />{/* className='hover:bg-gray-200' */}
            <ThumbsUp size={20} strokeWidth={1} />{/* className='hover:bg-gray-200' */}
            {/* <RiThumbUpFill /> */}
          </div>
        </div>
    </div>
  )
}

export default Foot