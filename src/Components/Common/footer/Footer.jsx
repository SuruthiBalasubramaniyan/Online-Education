import React from 'react';
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
          Copyright ©2024 All rights reserved by Acamedia online education
        </p>
      </div>
    </> 
    )
}

export default Footer; 