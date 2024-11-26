import React, { useState } from 'react'
import book1 from "../assets/book1.png"
import book2 from "../assets/book2.png"
import book3 from "../assets/book3.jpg"
import Darkmode from './Darkmode'
import {motion} from "framer-motion"


const Hero = () => {

    const imageitem=[
    {
        id:1,
        img:book1,
        title:'The Book of Signs',
        author:'Dr. David Jeremiah',
        description:'A comprehensive exploration of prophetic themes from a biblical perspective, this book illuminates the 31 major signs of the end times, offering hope and clarity about the future.'
    },
    {
        id:2,
        img:book2,
        title:'The World of the End',
        author:'Dr. David Jeremiah',
        description:'In this compelling book, the author provides practical insights into living with faith and purpose in challenging times, drawing wisdom from biblical prophecies and their relevance to contemporary life.'
    },
    {
        id:3,
        img:book3,
        title:'The World Below',
        author:'Brian Stableford',
        description:'A mesmerizing tale that transports readers to an alternate reality, where the boundaries between science fiction and fantasy blur. This novel explores themes of discovery, identity, and the enigmatic depths of the human experience.'
    }
    ]
    const [image,setimage]=useState(imageitem[0].img);
    const [title,settitle]=useState(imageitem[0].title);
    const [author,setauthor]=useState(imageitem[0].author);
    const [description,setdescription]=useState(imageitem[0].description);

    return(
        <div id='Home'>
        <div className='bg-cover w-full bg-center h-full md:h-[100vh]' style={{backgroundImage:"url('./bg2.jpg')"}}>
        <div className='max-w-[1200px] h-[full] mx-auto flex-row-reverse md:flex md:items-center md:justify-between'>
        
        {/* -------------------Image---------------------------- */}
        <motion.div
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
         className='h-[60vh] md:h-[70vh] lg:h-[80vh] md:w-1/2 flex justify-center p-5 relative'>
            <img className='h-full mt-20' src={image}></img>
           
            <div className='absolute flex gap-3 md:-bottom-[105px] -bottom-[100px] right-0 left-0 justify-center'>
            
                {imageitem.map((img,index)=>
                    <motion.div
                    initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1,delay:index*0.4}}
                    
                    key={index} className=''>
                        
                        <img className='w-[60px] h-[80px]' src={img.img} onClick={()=>{
                            setimage(img.img);
                            settitle(img.title);
                            setauthor(img.author);
                            setdescription(img.description);
                        }}>
                        
                        
                        </img>
                    </motion.div>
                )}
            </div>
        </motion.div>


        {/* -----------text------------------- */}
        <motion.div 
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
        className='w-full md:w-1/2 h-1/2 font-serif text-center pt-10 space-y-5 mt-16 '>
                
            <h1 className='font-bold text-5xl lg:text-[70px] mx-auto w-[400px] lg:w-[500px] text-red-500'>{title}
                <motion.p 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1,delay:1}}
                className='text-right text-sm mr-10 mt-5 md:mr-4 text-black'>by {author}</motion.p>
            </h1>
            {/* <p>{title}</p> */}
            <motion.p
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            transition={{duration:1,delay:0.5}}
            
            className='w-[400px] md:w-[300px] lg:w-[400px] mx-auto text-black-900 font-extralight'>{description}</motion.p>

        </motion.div>
    </div>
    </div>
    </div>
        
    )
   
    
}

export default Hero





