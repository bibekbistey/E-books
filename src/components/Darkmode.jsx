// import React, { useState } from 'react'
// import darkimg from "../assets/dark.png"
// import lightimg from "../assets/light.png"

// const Darkmode = () => {
//     const [mode,setmode]=useState(false)
    
//     const handleToggle=()=>{
//         setmode(!mode)
//         document.body.classList.toggle('darkmode')
//     }
//   return (
//     <>
//         <div>
//             {mode?<img onClick={handleToggle} className={`w-12 cursor-pointer ${
//                 mode==="dark"? "opacity-0": "opacity-100"
//             }`} src={lightimg} alt="" />:<img onClick={handleToggle} className='w-12' src={darkimg} alt="" />}
            
            
//         </div>
//     </>
//   )
// }

// export default Darkmode


import React, { useState } from 'react';
import darkimg from '../assets/dark.png';
import lightimg from '../assets/light.png';

const Darkmode = () => {
  const [mode, setMode] = useState(false);

  const handleToggle = () => {
    setMode(!mode);
    document.body.classList.toggle('dark');
  };

  return (
    <div>
      {!mode ? (
        <img
          onClick={handleToggle}
          className="w-12 cursor-pointer"
          src={lightimg}
          alt="Light Mode"
        />
      ) : (
        <img
          onClick={handleToggle}
          className="w-12 cursor-pointer"
          src={darkimg}
          alt="Dark Mode"
        />
      )}
    </div>
  );
};

export default Darkmode;
