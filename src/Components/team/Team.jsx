import React from 'react';
import Back from '../Common/back/Back';
import TeamCard from './TeamCard';
import Awrapper from '../about/Awrapper';
import './team.css';

function Team (){
    return(
        <>
        <Back title='Team' />
        <section className='team padding'>
          <div className='container grid'>
            <TeamCard />
          </div>
        </section>
        <Awrapper />
      </> 
    )
}


export default Team;