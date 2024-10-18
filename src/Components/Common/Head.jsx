import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Head = () => {
 

  return (
    <div>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo mt-3'>
            <h1 style={{color: '#1eb2a6'}}>ACAMEDIA</h1>
            <span  style={{color: '#1eb2a6'}}>ONLINE EDUCATION</span>
          </div>

          <div className='social mt-3'>
            <a href="https://facebook.com" target="_blank" className='fab icon' rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" className='fab icon' rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" className='fab icon' rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" className='fab icon' rel="noopener noreferrer" aria-label="Youtube">
              <FaYoutube />
            </a>
          
          </div>
        </div>

        <div className='flexSB'></div>
      </section>
    </div>
  );
};

export default Head;
