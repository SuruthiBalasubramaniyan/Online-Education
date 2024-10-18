import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './courses.css';
import Heading from '../Common/heading/Heading';

function OnlineCourses() {
    const [onlineCourses, setOnlineCourses] = useState([]); // State for storing fetched data
    const [loading, setLoading] = useState(true); // Loading state

    // Fetch the data from your online API using axios
    useEffect(() => {
        const fetchOnlineCourses = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/online'); // Axios GET request
                setOnlineCourses(response.data); // Set the fetched data
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                console.error('Error fetching online courses:', error);
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchOnlineCourses(); // Call the function to fetch data
    }, []);

    // Render loading state or the actual content
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <section className='online'>
            <div className='container'>
                <Heading subtitle='COURSES' title='Browse Our Online Courses' id='course' />
                <div className='content grid3'>
                    {onlineCourses.map((val) => (
                        <div className='box' key={val._id}> {/* Use unique key */}
                            <div className='img'>
                                <img src={val.cover} alt='cover' />
                                <img src={val.hoverCover} alt='hoverc' className='show' />
                            </div>
                            <h1>{val.courseName}</h1>
                            <span>{val.course}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default OnlineCourses;
