import React from 'react';
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import{images} from '../../constants'

import "./About.scss";
// import {urlFor,client} from '../../client'

const abouts = [

  {
    title: 'Web Developent', description: 'i am good web developer', imgUrl: images.about01
  },
  {
    title: 'Web Developent', description: 'i am good web developer', imgUrl: images.about02
  },
  {
    title: 'Web Developent', description: 'i am good web developer', imgUrl: images.about03
  },
  {
    title: 'Web Developent', description: 'i am good web developer', imgUrl: images.about04
  }
];


const About = () => {


  // const [abouts, setAbouts] = useState([]);


  // useEffect(() => {
    
  //   const query = '*[_type=="about"]'



  //    client.fetch(query).then((data)=>setAbouts(data))


  // },[])
  return (
    <>
    
      <h2 className='head-text'>
        
        I know that
        <span> Good design</span>
        <br/>
        means
        <span> Good Businesss</span>
      </h2>
      
      <div className='app_profiles'>

        {abouts.map((about, index) => (
             
          

          <motion.div
          
           whileInView={{ opacity: 1 }}

            whileHover = {{ scale: 1.1 }}
            transition = {{duration :0.5 , type :'tween'}}

            className = 'app_profile-item'
            key={about.title + index}
          >
            
            <img src={about.imgUrl} alt="about.title" />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{ about.description}</p>
           

        </motion.div>

          
           ))}
      </div>
    </>
  )
}

export default About