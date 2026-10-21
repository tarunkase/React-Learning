import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React, { useState } from 'react'

const LikeButton = () => {
    const [like, setLikes]=useState(0);
  return (
    <div className=' flex justify-between items-center'>
        <div >
            <button 
                onClick={()=>{setLikes(like=>like+1)}} 
                className=' w-fit h-fit cursor-pointer'>
                    <ThumbsUp className='size-6 hover:scale-110 transition-transform'/> 
            </button>
        </div>
        <div className='m-2 font-bold text-xl'>{like }</div> 
        <div > 
            <button 
                onClick={()=>{setLikes(like=>Math.max(0, like-1))}} 
                className='w-fit h-fit cursor-pointer '>
                    <ThumbsDown className='size-6 hover:scale-110 transition-transform'/> 
            </button>
        </div>
        {/* prevent the count going below to 0 */}
    </div>
  )
}

export default LikeButton