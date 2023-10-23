import React, { useState } from 'react';
import "./ContactForm.css"

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:admin@profolio.co.za?subject=Message from ${name}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (

    <div className='contact-form'>
      <h2>Contact Us</h2>
      <p>Reach Out and Elevate Your Career!</p>
      <div className="contact-form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className='form-btn' type="submit">Submit</button>
      </form>
    </div>
    </div>
    
  );
};

export default ContactForm;
