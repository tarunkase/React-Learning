import { ThumbsDown, ThumbsUp } from 'lucide-react'
import React from 'react'

const Card = () => {
  return (
      <div className='flex h-fit w-full justify-between items-center wrap-anywhere'>
        <div className='bg-amber-200 w-fit h-fit  rounded-xl p-2 justify-between  m-2'>
          <div className='bg-amber-500 rounded-lg p-2 mb-1'> 
              Name of the Image
          </div>
          <div className='h-100'>
              <img src='https://i.pinimg.com/736x/7d/de/a7/7ddea7a80afa3006601d98548ff445f4.jpg' className=' h-full w-full rounded-lg pbject-cover'></img>
          </div>
          <div className='bg-amber-500 rounded-lg p-2  mt-1 '>
              Footer     
          </div>
        </div>



        <div className='bg-amber-200 w-fit h-fit  rounded-xl p-2 justify-between m-2'>
          <div className='bg-amber-500 rounded-lg p-2 mb-1'> 
              Name of the Image
          </div>
          <div className='h-100'>
              <img src='https://i.pinimg.com/1200x/4d/c0/e4/4dc0e4d8f14a41e3bb4718a0d5b9f094.jpg' className=' h-full w-full rounded-lg pbject-cover'></img>
          </div>
          <div className='bg-amber-500 rounded-lg p-2  mt-1 '>
              Footer 
            
          </div>
        </div>



        <div className='bg-amber-200 w-fit h-fit  rounded-xl p-2 justify-between m-2'>
          <div className='bg-amber-500 rounded-lg p-2 mb-1'> 
              Name of the Image
          </div>
          <div className='h-100'>
              <img src='https://i.pinimg.com/736x/87/1d/24/871d241e31d0b4f7efc139487aee94ed.jpg' className=' h-full w-full rounded-lg pbject-cover'></img>
          </div>
          <div className='bg-amber-500 rounded-lg p-2  mt-1 '>
              Footer 
            
          </div>
        </div>



        <div className='bg-amber-200 w-fit h-fit  rounded-xl p-2 justify-between m-2'>
          <div className='bg-amber-500 rounded-lg p-2 mb-1'> 
              Name of the Image
          </div>
          <div className='h-100'>
              <img src='https://i.pinimg.com/736x/78/b5/9b/78b59bf0c1e0dc5496fb643d9d58a59b.jpg ' className=' h-full w-full rounded-lg pbject-cover'></img>
          </div>
          <div className='bg-amber-500 rounded-lg p-2  mt-1 '>
              Footer 
            
          </div>
        </div>



        <div className='bg-amber-200 w-fit h-fit  rounded-xl p-2 justify-between m-2'>
          <div className='bg-amber-500 rounded-lg p-2 mb-1'> 
              Name of the Image
          </div>
          <div className='h-100'>
              <img src='https://i.pinimg.com/1200x/08/a8/30/08a83030978a7dfdc6af786c5f836f7f.jpg' className=' h-full w-full rounded-lg pbject-cover'></img>
          </div>
          <div className='bg-amber-500 rounded-lg p-2  mt-1 flex justify-around'>
              Footer 
            <ThumbsDown size={20} strokeWidth={1} className='hover:bg-amber-600'/>
            <ThumbsUp size={20} strokeWidth={1} className='hover:bg-amber-600'/>
          </div>
        </div>



      </div>
    
  )
}

export default Card