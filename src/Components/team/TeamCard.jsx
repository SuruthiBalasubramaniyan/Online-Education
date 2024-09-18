import React from "react";
import { team } from '../../dummydata';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok  } from 'react-icons/fa';
function TeamCard() {
    return (
        <>
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>

            <a href="https://facebook.com" target="_blank" 
              rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook   />
              </a>
              <a href="https://twitter.com" target="_blank"  
                rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter   />
              </a>
              <a href="https://instagram.com" target="_blank"  
                rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram  />
              </a>
              <a href="https://tiktok.com" target="_blank"  
               rel="noopener noreferrer" aria-label="Youtube">
                <FaTiktok  />
              </a>  
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
    )
}
export default TeamCard;