import React from 'react'
import logo from "../assets/e-book.png"
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <div className='bg-gray-700 py-5 '>
        <div className='px-6 md:grid grid-cols-3 md:space-x-5 md:mx-6'>
            <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5,delay:0.2}} className=''>
                <div className='flex items-center space-x-2'>
                <img className='w-[50px]' src={logo}></img>
                <h1 className='text-xl font-mono font-bold text-white'>E-Books</h1>
                </div>
                <p className='text-white font-thin md:w-[200px] lg:w-[300px] xl:w-[400px]'>Our website offers a seamless and user-friendly platform to help you find your desired books with ease.</p>
            </motion.div>
            <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5,delay:0.5}} className='space-y-3 mt-5'>
                <h2 className='font-bold text-xl text-white font-serif'>Company</h2>
                <ul className='font-thin text-gray-400 font-mono'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Provacy Policy</li>
                </ul>
            </motion.div>
            <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{duration:0.5,delay:0.6}} className='py-3 space-y-3'>
                <h2 className='font-bold text-xl text-white font-serif'>Subscribe to our newsletter</h2>
                <p className='font-thin font-mono text-gray-400'>The latest news,article and resources sent to your inbox weekly</p>
                <div className='flex space-x-3'>
                <form className='w-[240px]'>
                <input
              type="text"
              className="p-2 border-2 border-gray-300 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
                </form>
                <button className='p-2 font-bold bg-blue-600 rounded-md'>Submit</button>
                </div>
            </motion.div>

        </div>
        

    </div>
  )
}

export default Footer