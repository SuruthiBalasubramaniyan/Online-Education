import React from 'react'
import './courses.css';
import {  coursesCard } from '../../dummydata';

function CourseCard() {
  return (
     <>
     <section className='coursesCard'>
        <div className='container grid2'>
            {coursesCard.map((val) =>(
                <div className='items'>
                    <div className='left'>
                        <div className='img'>
                           <img src = {val.cover} alt='cover' />
                        </div>
                        <div className='text'>
                            <h1 className='csname'> {val.coursesName}</h1>  
                            <div className='rate'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <label htmlFor=''>(5.0)</label>
                            </div>
                            <div className='details'>
                                { val.courTeacher.map((details) => (
                                    <>
                                    <div className='box'>
                                        <div className='dimg'>
                                            <img src={details.dcover} alt='dcover' />
                                        </div>
                                        <div className='para'>
                                            <h4>{details.name}</h4>
                                        </div>
                                    </div>
                                    <span>{details.totalTime}</span>
                                    </>
                                ))}
                            </div>
                        </div>
                   </div>
                   <div className='price'>
                    <h3>
                        {val.priceAll} / {val.pricePer}
                    </h3>
                   </div>
                   <button className='btn online-btn'>ENROLL NOW!</button>
                </div>
            ))}
        </div>
     </section>
     </>
  )
}
export default CourseCard
  
