import React, { useState } from 'react';
import axios from 'axios';
import Back from '../Common/back/Back';
import './contact.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaDribbble, FaGithub } from 'react-icons/fa';

function Contact()
{
  const gmap = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent page refresh
  
      try {
          const response = await axios.post('http://localhost:4000/api/contact', formData); // Ensure this matches your backend endpoint
          setResponseMessage(response.data.message);
          // Optionally clear the form after submission
          setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
          });
      } catch (error) {
          console.error('Error submitting form:', error);
          setResponseMessage('Failed to send message. Please try again.');
      }
  };
  

    return (
        <>
            <Back title='Contact us' />
            <section className='contacts padding'>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                    
                    <iframe src={gmap}></iframe>
                    </div>
                    <div className='right row'>
                        <h1>Contact us</h1>
                        <p>We're open for any suggestion or just to have a chat</p>
                        <form onSubmit={handleSubmit}>
                            <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' required />
                            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' required />
                            <input type='text' name='subject' value={formData.subject} onChange={handleChange} placeholder='Subject' required />
                            <textarea name='message' cols='30' rows='10' value={formData.message} onChange={handleChange} placeholder='Create a message here...' required></textarea>
                            <button className='primary-btn online-btn' type='submit '>SEND MESSAGE</button>
                        </form>
                        {responseMessage && <p className='response-message'>{responseMessage}</p>}
                        <h3>Follow us here</h3>
              <div className='ml-auto'>
               <a href="https://facebook.com" className='fab icon ms-1' target="_blank"  rel="noopener noreferrer" aria-label="Facebook">
                 <FaFacebook   />
               </a>
               <a href="https://twitter.com" className='fab icon ms-1 ' target="_blank"    rel="noopener noreferrer" aria-label="Twitter">
                 <FaTwitter   />
               </a>
               <a href="https://instagram.com" className='fab icon ms-1' target="_blank"    rel="noopener noreferrer" aria-label="Instagram">
                 <FaInstagram  />
               </a>
               <a href="https://youtube.com" className='fab icon ms-1' target="_blank"    rel="noopener noreferrer" aria-label="Youtube">
                 <FaYoutube  />
               </a>
               <a href="https://dribber.com" className='fab icon ms-1' target="_blank"    rel="noopener noreferrer" aria-label="Youtube">
                 <FaDribbble  />
               </a> 
               <a href="https://github.com" className='fab icon ms-1' target="_blank"    rel="noopener noreferrer" aria-label="Youtube">
                 <FaGithub  />
               </a> 
               </div> 
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
