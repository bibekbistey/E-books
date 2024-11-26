import React, { useState } from 'react';
import trending from "../assets/rated.png";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book8.avif";
import book5 from "../assets/book7.jpg";
import book6 from "../assets/book6.jpg";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import {motion} from "framer-motion"

const Toprated = () => {
    const [movement, setMovement] = useState(0);

    const books = [
        {
            id: 1,
            img: book1,
            title: 'The Book of Signs',
            author: 'Dr. David Jeremiah',
            rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
        },
        {
            id: 2,
            img: book2,
            title: 'The World of the End',
            author: 'Dr. David Jeremiah',
            rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
        },
        {
            id: 3,
            img: book3,
            title: 'The World Below',
            author: 'Brian Stableford',
            rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
        },
        {
            id: 4,
            img: book4,
            title: 'The Subtle Art of not Giving a Fu*k',
            author: 'Mark Mansion',
            rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
        },
        {
            id: 5,
            img: book5,
            title: 'Rest Your Mindset',
            author: 'Sangeeta Maheshwari',
            rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
        },
        {
            id: 6,
            img: book6,
            title: 'Love Life',
            author: 'Matthew Hussey',
            rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
        },
    ];

    // Handle left and right clicks
    const handleLeftClick = () => {
        if (movement > 0) setMovement(movement - 1);
    };

    const handleRightClick = () => {
        if (movement < books.length - 3) setMovement(movement + 1);
    };

    // Slice the books to display only 2-3 at a time
    const displayedBooks = books.slice(movement, movement + 3);

    return (
        <div id='toprated' className='w-full h-full bg-[#9E1B32] mx-auto'>
            {/* Text Section */}
            <motion.div 
             initial={{opacity:0,y:-10}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:1,delay:0.3}}
            className='text-center space-y-1'>
                <div className='text-white'>
                    <h1 className='text-2xl font-bold font-mono flex justify-center items-center pt-10'>
                        Toprated Books
                        <img className='w-8 h-8' src={trending} alt="Trending" />
                    </h1>
                    <h2 className='font-extralight'>These books are Loved by Everyone</h2>
                </div>
            </motion.div>

            {/* Books Section */}
            <div className='overflow-hidden'>
                <div className='pb-10 flex h-full items-center justify-center gap-20'>
                    {/* Left Arrow */}
                    <motion.div
                    initial={{opacity:0,x:-10}}
                    whileInView={{opacity:1,x:50}}
                    transition={{duration:1,delay:0.3}}>

                    
                    <IoMdArrowDropleftCircle
                    
                        size={40}
                        className={`cursor-pointer ml-5 lg:ml-8 ${movement === 0 ? 'opacity-50' : ''}`}
                        onClick={handleLeftClick}
                    />
                    </motion.div>

                    {/* Display Books */}
                    {displayedBooks.map((book,index) => (
                        <motion.div 
                        initial={{opacity:0,y:100}}
                        whileInView={{opacity:1,y:0}}
                        transition={{duration:1,delay:index*0.3}}
                        key={book.id} className='mt-10'>
                            <img
                                className='w-[120px] md:w-[160px] h-[220px] rounded-xl'
                                src={book.img}
                                alt={book.title}
                            />
                            <h1 className='text-black w-[150px] mt-2'>{book.title}</h1>
                            <h2 className='text-gray-300 text-sm mb-1 mt-2'>{book.author}</h2>
                            <h1 className='flex text-yellow-400 mb-2'>{book.rating}</h1>
                        </motion.div>
                    ))}

                    {/* Right Arrow */}
                    <IoMdArrowDroprightCircle
                        size={40}
                        className={`cursor-pointer mr-5 lg:mr-8 ${
                            movement === books.length - 3 ? 'opacity-50' : ''
                        }`}
                        onClick={handleRightClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default Toprated;
