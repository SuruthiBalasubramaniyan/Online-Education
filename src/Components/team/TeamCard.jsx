import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

function TeamCard() {
  const [team, setTeam] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/team");  
        const data = await response.json();
        console.log("Fetched data:", data);  
        setTeam(data);  
        setLoading(false);  
      } catch (error) {
        console.error("Error fetching team data:", error);
        setLoading(false);  
      }
    };

    fetchTeamData();
  }, []);  

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      {team.length === 0 ? (
        <div>No team members found.</div> // Show message when no data
      ) : (
        team.map((val) => (
          <div className='items shadow' key={val._id}>
            <div className='img'>
              <img src={val.cover} alt={val.name} />
              <div className='overlay'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
                  <FaTiktok />
                </a>
              </div>
            </div>
            <div className='details'>
              <h2>{val.name}</h2>
              <p>{val.work}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default TeamCard;

