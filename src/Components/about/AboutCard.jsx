import React from 'react';
import Heading from '../Common/heading/Heading';
import './About.css';
import { homeAbout } from '../../dummydata';
import Awrapper from './Awrapper';
function AboutCard(){
    return (
        <>
        <section className='aboutHome'>
            <div className='container flexSB'>
               <div className='left-row'>
                <img src='./images/about.webp' alt='abt'/>
                </div> 
                <div className='right-row'>
                   <Heading  subtitle='LEARN EVERYTHING' title= 'Benefits About Online Learning Expertise' />
                   <div className='items'>
                    {homeAbout.map((val) => {
                        return (
                            <div className='ms-2 item flexSB'>
                                <div className='img'> 
                                <img src={val.cover} alt=''/>
                                </div>
                                <h2 className='ms-1'>{val.title}</h2>
                                <p className='ms-2'>{val.desc}</p>
                                </div>
                         )
                    })}
                    </div> 
                </div>
            </div> 
        </section>
         <Awrapper />
        </>
    )
}
export default AboutCard;