import React, { useState } from 'react'
import logo from "../assets/e-book.png"
import { FaCartArrowDown } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Darkmode from './Darkmode';
import {motion} from "framer-motion"
import Order from './Order';





const Navbar = ({handleorder}) => {

    const [toggle,settoggel]=useState(false);
    const [isOrderOpen, setOrderOpen] = useState(false);
    const handleOrderClick = () => {
        setOrderOpen(true);
      };
      const handleOrderClose = () => {
        setOrderOpen(false);
      };

    const handleToggle=()=>{
        settoggel(!toggle);
    }

    const nav=[
    {
        title:"Home",
        link:"#Home"
    },
    {
        title:"Trending",
        link:"#trending"
    },
    {
        title:"Top Rated",
        link:"#toprated"
    },
       
]


  return (
    <>
    
    
    <div className='h-[65px] sticky top-0 w-full flex shadow-md justify-between z-50 dark:bg-gray-900 absolute'>
        {/* ---------logo------------ */}
        <motion.div
        initial={{opacity:0,}}
        animate={{opacity:1}}
        transition={{duration:1,delay:0.2}}
         className='items-center mx-5 flex gap-28'>
            <img className='h-full' src={logo} alt="logo"/>
            <Darkmode></Darkmode>

        </motion.div>
        
                
        
         {/* ------------------right side part------------- */}
        <motion.div 
        
        className='hidden md:flex items-center space-x-5 mr-7'>
            {nav.map((n,index)=>
                <motion.div 
                initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1,delay:index*0.3}}
                className='font-serif font-extrabold text-lg text-purple-800' key={index}><a href={n.link}>{n.title}</a></motion.div>
            )}
            <motion.button 
             initial={{opacity:0,}}
             animate={{opacity:1,}}
             transition={{duration:1,delay:1.5}}
            onClick={handleOrderClick} className='px-3 py-1 text-white font-serif font-semibold bg-blue-400 rounded-md flex items-center gap-2'>Order
            <FaCartArrowDown className='text-white' />

            </motion.button>
        </motion.div>
        <div className='items-center flex mr-5 md:hidden'>
            {!toggle?<CiMenuBurger size={20} onClick={handleToggle} />:<IoMdClose size={20} onClick={handleToggle} />}
                

        </div>

        {/* -------------------small screen-------------- */}

        <div className={toggle?'md:hidden items-center space-y-10 mr-7 fixed z-20 top-0 transition-all duration-300 shadow-lg rounded-xl left-0 w-1/2 bg-rose-200 h-screen':"fixed left-[-100%]"}
        >
            
            <div className='items-center mx-10 mt-5'>
                <img className='w-16 h-16' src={logo} alt="logo"/>
    
            </div>                
            
            {nav.map((n,index)=>

                
                
                <motion.div 
                initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,delay:index*0.3}}
                className='mt-5 mx-10 border-b border-black text-center' key={index}><a className='cursor-pointer font-mono font-semibold text-xl' onClick={()=>settoggel(false)} href={n.link}>{n.title}</a>
                    
                </motion.div>
            )}
            <button className='px-3 py-1 text-white bg-blue-700 rounded-md flex items-center gap-2 mx-auto'>Order
            <FaCartArrowDown className='text-white' />


            </button>
            
        </div>
       
    </div>
    <Order isOpen={isOrderOpen} onClose={handleOrderClose} />
    </>
  )
}
export default Navbar

