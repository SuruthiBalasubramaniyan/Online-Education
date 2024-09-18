import React from 'react';
import Back from '../Common/back/Back';
import CourseCard from './CourseCard';
import OnlineCourses from './Onlinecourses';

function CourseHome(){
    return(
        <>
        <Back title='Explore Courses' />
        <CourseCard />
        <OnlineCourses />
        </>
    )

}

export default CourseHome;