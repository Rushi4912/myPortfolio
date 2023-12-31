import React from 'react';
import "./Header.scss";
import {motion} from 'framer-motion'
import { images } from "../../constants";
import {AppWrap} from '../../wrapper'

const scaleVarients = {

  whileInView: {
    

    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      
      duration: 1,
      ease: 'easeInOut'
    },
  },
};

const Header = () => {
  return (
    <div className='app_header app_flex'>
      
      <motion.div
      
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{duration:0.5}}
        className='app_header-info'
      >

        <div className='app_header-badge'>
          

          <div badge-cmp app_flex>

            <span> 👋 </span>
            < div style={{ marginLeft: 20 }}>
              <p className='p-text'> Hello, I am</p>
              <h1 className='head-text'>Rushikesh</h1>


            </div>

          </div>

          <div className='tag-cmp  app_flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'> Freelancer</p>


          </div>

           </div>


      </motion.div>

      <motion.div
      
      
      whileInView={{ opacity: [0, 1] }}
        transition={{duration:0.5,delayChildren: 0.5}}
        className='app_header-img'
      
      >

        <img src={images.profile} alt="profile_bg" />

        <motion.img
        
           
      whileInView={{ scale: [0, 1] }}
        transition={{duration:1,ease: 'easeInOut'}}
          src={images.circle}
          alt='profile-pic'
          className ="overlay_circle"
          
          
        ></motion.img>
       

      </motion.div>

      <motion.div
      
        variant={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className='app_header-circles'
      >

        {[images.flutter, images.redux, images.sass].map((circle, index) =>
         
        (
          
          <div className='circle-cmp app_flex' key={`circle-${index}`}>
            
            <img src={circle} alt="circle" />
          </div>
         )
         )}

      </motion.div>


  </div>

  )
}

export default AppWrap(Header, 'home');