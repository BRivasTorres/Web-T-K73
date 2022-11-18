import React from 'react'
import Feature from "../../components/feature/Feature"
import "./what.css"

const What = () => {
  return (
    <div className="tk73__whattk73 section__margin" id='what'>
      <div className='tk73__wahttk73-features'>
        <Feature title="What is T-K73" text="We are an organization that focuses on educating programming students through philosophy, and teaching philosophy through programming; Yes, this may sound difficult, but our mission is to make that person think why he is programming and for what, in order to make this wonderful world of technology fun and interesting."/>
        <div className='tk73__whattk73-heading'>
          <h1 className='gradient__text'>Learn in a diferent way</h1>
          <p>Explore the library</p>
        </div>
        <div className="tk73__whattk73-container">
          <Feature title="Mision" text="Our mission is to guide students and teach things that can be used in other areas of life."/>
          <Feature title="Vision" text="That each student enjoy and learn in our academy"/>
          <Feature title="Goal" text="To be the largest school in teaching programming"/>
        </div>
      </div>
    </div>
  )
}

export default What
