import React from 'react'
import image from "../assets/store1.png"
import logo from "../assets/e-book.png"
import quality from "../assets/quality.png"
import delivery from "../assets/delivery.png"
import payment from "../assets/payment.webp"
import offer from "../assets/offer.png"
import {motion} from "framer-motion"

const Store = () => {
    const services=[{
        title:"Quality Books",
        image:quality,
    },
    {
        title:"Fast Delivery",
        image:delivery,
    },
    {
        title:"Easy payment",
        image:payment,
    },
    {
        title:"Offers",
        image:offer,
    }
]
  return (
    <div className='max-w-[1200px] h-full md:h-screen md:mb-0 mx-auto grid grid-cols-1 md:grid-cols-2 text-black md:items-center md:justify-between dark:bg-gray-950'>
        {/* ------------------img------- */}
        <motion.div 
         initial={{opacity:0,x:-100}}
         whileInView={{opacity:1,x:0}}
         transition={{duration:1,delay:0.3}}
        className='h-1/2 w-[70%] md:w-[70%] mx-auto'>
            <img className='h-auto w-full' src={image}></img>
        </motion.div>
        {/* {------------textpart------------------------------} */}
        <motion.div 
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1,delay:0.3}}
        className='h-1/2 w-full grid grid-cols-1 '>
            <h1 className='text-4xl font-bold text-black mx-auto md:text-left md:mx-0 dark:text-white'>
                Library at your fingerprints
            </h1>
            <p className='text-xl font-thin text-slate-400 mx-auto md:text-left md:mx-0'>
                What we offer: 
            </p>
            <div className='space-y-6 mx-auto mb-5 md:text-left md:mx-0'>
                {services.map((serv,index)=>

                <motion.div
                initial={{opacity:0,x:100}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1,delay:index*0.5}}
                 key={index} className='flex gap-5 items-center mt-5'>
                    <div className='w-10 h-15 rounded-full border-1'>
                        <img className='w-full h-full' src={serv.image}></img>

                    </div>
                    <h1 className='font-semibold font-mono text-black dark:text-white'>{serv.title}</h1></motion.div>
                )}

            </div>
            
            
        </motion.div>
    </div>
  )
}

export default Store