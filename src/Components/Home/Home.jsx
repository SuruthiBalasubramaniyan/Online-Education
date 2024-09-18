import React from 'react';
import Hero from './heros/Hero';
import AboutCard from '../about/AboutCard';
import HAbout from './HAbout';
import Hblog from './Hblog';
import Hprice from './Hprice';
import Testimonal from './testimonal/Testimonal';
function Home() {
  return (
    <>
    <Hero />
    <AboutCard />
    <HAbout />
    <Hblog />
    <Hprice />
    <Testimonal />
    </>
  )
}

export default Home;
