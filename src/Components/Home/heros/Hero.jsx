import React from 'react';
import Heading from '../../Common/heading/Heading';
import './Hero.css'; 
const Hero = () => {
  
  return (
    <>
    <section className='hero'>
<div className='container'>
    <div className='row'>
        <Heading subtitle = 'WELCOME TO ACAMEDIA' tiltle = 'Best Online Education Expertise' />
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live blind texts.</p>
        <div className='button'>
            <button className='btnp '>
              GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>  
            </button>
            <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right  '></i>
            </button>
        </div>
    </div>
</div>

    </section>
    <div className='margin'></div>
    </>
    
  )
}

export default Hero
 