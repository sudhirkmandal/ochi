import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    
  return (
    <div data-scroll data-scroll-speed="-.1" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-32 px-20'>
        {["We Create", "eye-opening", "Presentation"].map((item, index)=>{
            return   <div className="masker">
            <div className='w-fit flex overflow-hidden'>
            {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "9.5vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1, delay:1.3}}   className='w-[9.5vw] mr-[1vw] overflow-hidden rounded-md h-[6.4vw] relative top-[1.5vw]'>
                <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
            </motion.div>)}
                <h1 className='uppercase text-[9.1vw] leading-[8.2vw] tracking-tighter font-["Founders_Grotesk_X-Cond Bold"] font-bold'>{item}</h1>
            </div> 
            </div>
        })}
                     
        </div>
        <div className='border-t-[1px] border-zinc-600 mt-16 flex justify-between items-center py-4 px-20'>
            {["For public and private comoanies", "From the first pitch to IPO"].map((item, index)=>{
                return <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            })}
            <div className='start flex items-center gap-5'>
                <div className='px-4 py-2 border-[1px] rounded-full font-light text-md uppercase'>start the project</div>
                <div className='w-10 h-10 border-[1px] flex items-center justify-center rounded-full'>
                <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage