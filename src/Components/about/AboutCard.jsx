import React, { useState, useEffect } from 'react';
import Heading from '../Common/heading/Heading';
import './About.css';
import Awrapper from './Awrapper';

function AboutCard() {
  const [homeAbout, setHomeAbout] = useState([]);  
  const [loading, setLoading] = useState(true);    

  useEffect(() => {
    
    const fetchHomeAboutData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/home-about');  
        const data = await response.json(); 
        setHomeAbout(data);                  
        setLoading(false);                  
      } catch (error) {
        console.error('Error fetching home-about data:', error);
        setLoading(false);  
      }
    };

    fetchHomeAboutData();
  }, []);  
  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left-row'>
            <img src='./images/about.webp' alt='abt' />
          </div>
          <div className='right-row'>
            <Heading subtitle='LEARN EVERYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => (
                <div className='ms-2 item flexSB' key={val._id}>
                  <div className='img'>
                    <img src={val.cover} alt={val.title} />
                  </div>
                  <h2 className='ms-1'>{val.title}</h2>
                  <p className='ms-2'>{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
}

export default AboutCard;
