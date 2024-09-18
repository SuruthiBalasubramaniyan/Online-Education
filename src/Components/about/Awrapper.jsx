import React from 'react';
import { awrapper } from '../../dummydata';
function Awrapper(){
return (
    <>
     <section className='awrapper mt-2'>
        <div className='container grid'>
            {awrapper.map((val) => {
                return (
                    <div className='box flex'>
                    <div className='img'>
                    <img src={val.cover} alt='cov' />
                    </div>
                    <div className='text '>
                    <h1> {val.data}</h1>
                    <h3 className='ms-1'>{val.title}</h3>
                    
                    </div>
                    
                    </div>
                )
            })}
        </div>


     </section>
    
    </>
)
}


export default Awrapper;