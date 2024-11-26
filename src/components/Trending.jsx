import React from 'react'
import trending from "../assets/trending.png"
import book1 from "../assets/book1.png"
import book2 from "../assets/book2.png"
import book3 from "../assets/book3.jpg"
import { FaStar } from "react-icons/fa";
import {motion} from "framer-motion"

const Trending = () => {

    const books=[
        {
            id:1,
            img:book1,
            title:'The Book of Signs',
            author:'Dr. David Jeremiah',
            rating:[<FaStar />,<FaStar />,<FaStar />,<FaStar />



            ]
        },
        {
            id:2,
            img:book2,
            title:'The World of the End',
            author:'Dr. David Jeremiah',
            rating:[<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />


            ]


        },
        {
            id:3,
            img:book3,
            title:'The World Below',
            author:'Brian Stableford',
            rating:[<FaStar />,
<FaStar />,
<FaStar />,
<FaStar />,
            ]
        }]
  return (
    <div id='trending' className='max-w-[1200px] h-full mx-auto border-b-2 border-zinc-300 dark:border-white dark:bg-gray-950 '>
        {/* -----------------text--------- */}
        <motion.div 
        initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0}}
        transition={{duration:1,delay:0.3}}
        className='text-center space-y-1 dark:text-white'>
            <h1 className='text-2xl pt-8 font-bold font-mono flex justify-center items-center'>Trending Books
                <img className='w-8 h-8' src={trending}></img>
            </h1>
            <h2 className='font-extralight'>These books are trending at the moment</h2>


        </motion.div>
        {/* -------------books------------ */}


        <div className='pb-10 md:grid md:grid-cols-2 lg:grid-cols-3 h-full cursor-pointer'>
            {books.map((book,index)=>
                <motion.div 
                initial={{opacity:0,x:100}}
                whileInView={{opacity:1,x:0}}
                whileHover={{scale:1.1}}
                transition={{duration:1,delay:index*0.3}}
                className='w-[250px] md:w-[250px] h-[330px] border-2 shadow-lg rounded-lg mx-auto mt-10 md:mt-10 pb-10 dark:border-rose-300 dark:shadow-red-400 shadow-cyan-300'>
                    <img className='w-[150px] md:w-[160px] pt-3 mx-auto rounded-lg' src={book.img}></img>
                    <h1 className='text-center mb-2 font-thin text-black dark:text-white'>{book.title}</h1>
                    <h1 className='flex justify-center text-yellow-400 mb-2'>{book.rating}</h1>
                    <button className='mx-auto flex px-2 py-1 bg-blue-300 rounded-lg font-semibold font-mono text-zinc-500 dark:text-white'>Book Now</button>
                </motion.div>
            )}

        </div>
    </div>
  )
}

export default Trending