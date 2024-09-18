import React from 'react';
import Heading from '../Common/heading/Heading';
import PriceCard from '../pricing/PriceCard';

function Hprice() {
    return (
        <>
      <section className='hprice padding'>
        <Heading subtitle='OUR PRICING' title='Pricing & Packages' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </> 
    )
}
export default Hprice;