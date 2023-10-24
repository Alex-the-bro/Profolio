import React from 'react';
import "./jobs.css";
import Cards from './Cards';
import { cvwriting, linkedIn, sites, whatsApp } from '../../Assets';
import {motion} from "framer-motion"

const Jobs = () => {
  const formatWhatsAppNumber = (phoneNumber) => {
    // Remove spaces and add the country code
    return phoneNumber.replace(/\s+/g, '') || '2788420053';
  };

  const services = [
    {
      serviceName: "CV Writing",
      imageSrc: cvwriting,
      description: 'A well-crafted CV is essential as it showcases your skills, experiences, and accomplishments clearly, making a strong first impression on potential employers and setting the stage for successful interviews and career advancement.',
      buttonText: 'Enquire on WhatsApp',
    },
    {
      serviceName: "LinkedIn Profile Optimisation",
      imageSrc: linkedIn,
      description: 'A strategically-optimized LinkedIn profile positions you as a credible and proactive professional, increasing visibility during recruiter searches, networking opportunities, and the chances of attracting jobs relevant to your profile.',
      buttonText: 'Enquire on WhatsApp',
    },
    {
      serviceName: "Portfolio Website",
      imageSrc: sites,
      description: 'A portfolio website is a powerful tool for showing your work or brand in a visually appealing manner. It demonstrates commitment to professionalism, making a lasting impression and leading to opportunities in your field.',
      buttonText: 'Enquire on WhatsApp',
    },
    // Add more services as needed
  ];

  return (
    <motion.div className='services' transition={{ duration: 1 }} initial={{opacity:0, y:-80}} whileNotInView={{ opacity: 0, y:-80 }} whileInView={{opacity:1, y:0}} viewport={{ once: true }}>
      <div className='service-header'>
        <h2 className='service-text'> Services</h2>
        <p>"CVs that shine, LinkedIn that connects, Portfolios that impress - The Professional Branding Suite"</p>
      </div>
      <div className='service-container'>
        {services.map((service, index) => (
          <Cards
            key={index}
            serviceName={service.serviceName}
            imageSrc={service.imageSrc}
            description={service.description}
            buttonText={service.buttonText}
            whatsappNumber={formatWhatsAppNumber('27788420053')} // Format the WhatsApp number
            formatWhatsAppNumber={formatWhatsAppNumber}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Jobs;
