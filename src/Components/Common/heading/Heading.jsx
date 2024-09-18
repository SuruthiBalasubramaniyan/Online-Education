import React from 'react'

const Heading = ( { subtitle, title }) => {
  return (
    <>
   <div className='container' id='heading'>
    <h3 className='ms-2'> {subtitle} </h3>
    <h1 className='ms-2'> {title} </h1>
   </div>
   </>
    
  )
}

export default Heading;