import React, { useState } from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { AppWrap } from '../../wrapper';


import "./Work.scss";

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('all');

  const[animateCard,setAnimateCard] = useState({y:0,opacity:1})
  
  return (
    <>
    
       <h2 className='head-text'>
        
        My Creative
        <span> Portfolio</span>
         
      </h2>

      <div className='app_work-filter'>


         {
        ['UI/UX', 'Web App', 'React Js', 'All'].map((item, index) => (


          <div
            key={index}
            onClick={() => handelWorkFilter(item)}
          

            className={`app_work-filter-item app_flex p-text ${activeFilter===item ? 'item-active' : ''}`}
          >
    
            {
              item
             }

          </div>
        ))
      }

      </div>

      <motion.div
      
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren:0.5}}
      >
        


      </motion.div>
      
    
    </>
  )
}

export default Work;