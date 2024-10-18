import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import './footer.css';
 function Footer () {
    return (
        <>
      <section className='newletter mt-2'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1 style={{color:"#1eb2a6"}}> ACADEMIA</h1>
            <span style={{color:"#1eb2a6"}}>ONLINE EDUCATION & LEARNING</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            {/* <div className='gridicon'>
            <a href="https://facebook.com" className='fab icon ms-1' target="_blank"  rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook   />
              </a>
              <a href="https://twitter.com" className='fab icon ms-1 ' target="_blank"    rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter   />
              </a>
              <a href="https://instagram.com" className='fab icon  ms-1' target="_blank"    rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram  />
              </a>
              <a href="https://youtube.com" className='fab icon ms-1' target="_blank"    rel="noopener noreferrer" aria-label="Youtube">
                <FaYoutube  />
              </a>
              <a href="https://linkedin.com" className='fab icon ms-1' target="_blank"    rel="noopener noreferrer" aria-label="Youtube">
              <FaLinkedin  />
              </a> 
              <a href="https://github.com" className='fab icon ms-1' target="_blank"    rel="noopener noreferrer" aria-label="Youtube">
                <FaGithub  />
              </a> 
              </div> */}
          </div>
          <div className='grid'>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
           
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-flag me-1'></i> 
                203  Lorem, ipsum dolor, sit amet.
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
          </div>

        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved  
        </p>
      </div>
    </> 
    )
}

export default Footer;