 
import React, { useState } from 'react';
import Heading from '../../Common/heading/Heading';
import './Hero.css'; 
import LoginModal from './Login'; // Import your modal

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

  const handleGetStarted = () => {
    setIsModalOpen(true); // Open the modal when the button is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSwitchToSignup = () => {
    // Handle switching to the signup modal if needed
    console.log('Switch to signup clicked');
  };

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACAMEDIA' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live blind texts.</p>
            <div className='button'>
              <button className='btnp' onClick={handleGetStarted}>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>

       
      {isModalOpen && (
        <LoginModal 
          onClose={handleCloseModal} 
          onSwitchToSignup={handleSwitchToSignup} 
        />
      )}
    </>
  );
}

export default Hero;
