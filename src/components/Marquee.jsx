import React from 'react'
import { motion } from 'framer-motion'
import './Marquee.css'
function Marquee() {
  return (
    <div className='bg-blend-luminosity Marquee w-full overflow-hidden '>
        <div className=' nbm z-10  text-[10vw] font-["The_Led_Display_St"] pt-4 pb-4 text-white whitespace-nowrap'>
            <motion.div className='Mover w-auto pt-6 pb-6 border-t-4 border-b-4 '>
                We Are LocAI.Ly  We Are LocAI.Ly We Are LocAI.Ly
            </motion.div>
        </div>
    </div>

  )
}

export default Marquee