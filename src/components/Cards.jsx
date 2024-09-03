import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex gap-5 items-center px-10'>
    <div className="cardcontainer w-1/2  h-[67vh]">
        <div className='card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-4 bottom-4 px-5 py-1 rounded-full border-[1.5px] border-[#CDEA68] text-[#CDEA68]'>&copy;2019-2022</button>
        </div>
    </div>
    <div className="cardcontainer  w-1/2  h-[67vh] flex gap-5">
    <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#212121]'>
    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-4 bottom-4 px-5 py-1 rounded-full border-[1.5px] border-[#CDEA68] text-[#CDEA68]'>Rating 5.0 on Clutch</button>
    </div>
    <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#212121]'>
    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute left-4 bottom-4 px-5 py-1 rounded-full border-[1.5px] border-[#CDEA68] text-[#CDEA68]'>Business Bootcamp Alumni</button>
    </div>

    </div>    
    </div>
  )
}

export default Cards