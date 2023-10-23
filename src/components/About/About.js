import React from 'react'
import "./About.css"

import {motion} from "framer-motion"

const About = () => {
  return (

    
  <div className='about-container'>

    <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{duration:0.7}}
  viewport={{ once: true }}>

<div className='head-text-container'>

      <h3 className='about-header'>
            About us
      </h3>

      <p>"Crafting Professional Impressions"</p>

      </div>
        

        <div className='container'>
            <div className='about-text'>
                <p className='about-description'>
                Welcome to our vibrant and innovative world! At Profolio Crafters&trade;, we're passionate about empowering individuals to achieve their professional aspirations and make an impact in the modern workforce.

                Our journey began with a simple yet ambitious idea: to redefine the way people present themselves to the world. We believe that every career story deserves to be told in a compelling and authentic way.

                As a team of dedicated professionals, we strive to craft exceptional CVs, optimize LinkedIn profiles, design impressive website portfolios, and create persuasive cover letters. Our mission is to equip you with the tools and strategies that will set you apart in today's competitive job market.

                Our values of integrity, creativity, and collaboration guide us in every interaction. We are committed to understanding your unique goals and tailoring our services to suit your individual needs.

                Join us in this exciting expedition toward professional success. Let's create a future where your potential knows no bounds.
                </p>
            </div>

            
        </div>
    

    </motion.div>
    </div>
      
    
  
  )
}

export default About