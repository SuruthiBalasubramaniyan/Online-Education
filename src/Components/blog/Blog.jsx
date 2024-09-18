import React from "react";
import Back from '../Common/back/Back';
import BlogCard from './BlogCard';
import './blog.css';
function Blog () {
    return (

        <>
        <Back title='Blog Posts' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
        
        </>
    )
}

export default Blog;