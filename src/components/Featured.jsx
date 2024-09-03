import { motion, useAnimation } from 'framer-motion'
import {Power4} from "gsap/all"
import React, { useState } from 'react'

function Featured() { 
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
cards[index].start({y: "0"})
  }

  const handleHoverEnd = (index) => {
    cards[index].start({y: "100%"})
      }
  return (
    <div className='w-full py-20 bg-zinc-100 text-black'>
    <div className='w-full px-20 border-b-[1px] border-zinc-400 pb-10'>
        <h1 className='text-5xl font-["Neue_Montreal"]'>Featured projects</h1>
       
    </div>
    <div className='px-20'>
    <div className="cards flex gap-10 mt-10">   
        <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[75vh]">
        <h1 className='absolute left-full flex  -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden z-[9] text-6xl font-[900] font-["gilroy"] text-[#CDEA68]'>
            {"FYDE".split('').map((item, index)=><motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}} className='inline-block'>{item}</motion.span>)}
        </h1>
           <div className='card w-full h-full rounded-xl overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
           </div> 
        </motion.div>
        <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className="cardcontainer relative  w-1/2 h-[75vh]">
        <h1 className='absolute right-full translate-x-1/2 top-1/2 flex overflow-hidden -translate-y-1/2 z-[9] text-6xl font-[900] font-["gilroy"] text-[#CDEA68]'>
            {"VISE".split('').map((item, index)=><motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}} className='inline-block'>{item}</motion.span>)}
        </h1>

           <div className='card w-full h-full rounded-xl overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
           </div> 
        </motion.div>
        </div>
        </div>
    </div>
  )
}

export default Featured