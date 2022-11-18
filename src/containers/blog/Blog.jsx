import React from 'react'
import { Article } from "../../components"
import "./blog.css"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports"

const Blog = () => {
  return (
    <div className='tk73__blog section__padding' id='blog'>
      <div className="tk73__blog-heading">
        <h1 className="gradient__text">The world is changing. Hurry up and change yourself too</h1>
      </div>
      <div className="tk73__blog-container">
        <div className='tk73__blog-container_groupA'>
          <Article imgUrl={blog01} date="Sep 14, 2020" title="The new methodology of philosophy and programming? What is?"/>
        </div>
        <div className='tk73__blog-container_groupB'>
          <Article imgUrl={blog02} date="Sep 14, 2020" title="The new methodology of philosophy and programming? What is?"/>
          <Article imgUrl={blog03} date="Sep 14, 2020" title="The new methodology of philosophy and programming? What is?"/>
          <Article imgUrl={blog04} date="Sep 14, 2020" title="The new methodology of philosophy and programming? What is?"/>
          <Article imgUrl={blog05} date="Sep 14, 2020" title="The new methodology of philosophy and programming? What is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
