import React from 'react'
import "./Home.css"
import "./btn.css"
import { interview } from '../../Assets'
import { Link } from 'react-scroll';
import { motion } from "framer-motion"


const Home = () => {
  return (
    <main className='home'>
      <div className='home-text'>
        <motion.h2 className='heading' transition={{ duration: 0.7 }} initial={{opacity:0, y:-80}} animate={{opacity:1, y:0}}>Unlock Your Potential</motion.h2>
        <motion.p className='leading-text' transition={{ duration: 0.7 }} initial={{opacity:0, y:-80}} animate={{opacity:1, y:0}}>Ready to stand out in the competitive job market? Elevate your career with our expert <span>CV writing, LinkedIn profile optimization and professional  website portfolios.</span> </motion.p>
        
        <Link to='services' smooth={true} duration={1000}>
        <motion.button className="button-64" role="button" transition={{ duration: 0.7 }} initial={{opacity:0, y:-80}} animate={{opacity:1, y:0}}><span className="text">Learn More</span></motion.button>
        </Link>
      </div>

      <motion.div className='home-image' transition={{duration:0.7}} initial={{opacity:0}} animate={{opacity:1}}>
        <img src={interview} alt="Profolio Crafters Interview"/>
      </motion.div>
    </main>
  )
}

export default Home