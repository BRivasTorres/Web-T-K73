import React from 'react'
import possibilityImage from "../../assets/possibility.jpg"
import "./possibility.css"

const Posibility = () => {
  return (
    <div className='tk73__possibility sectin__padding' id='possibility'>
      <div className="tk73__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="tk73__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>learn things and skills to boost your professional career, and most importantly opt for a better life with solutions that go beyond your imagination</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Posibility
