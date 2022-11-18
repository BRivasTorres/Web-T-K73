import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import image from "../../assets/image.jpeg"

const Header = () => {
  return (
    <div className='tk73__header section__padding' id='home'>
      <div className="tk73__header-content">
        <h1 className='gradient__text'>Discover The World of programming with the help of T-K73</h1>
        <p>
          Our mission is to creatively teach programming and not just create robots that sit down to program. Our mission is to teach how to think about the reason for programming through a didactic way, where the knowledge acquired can be extrapolated to other personal areas.
        </p>
        <div className="tk73__header-content__input">
          <input type="email" placeholder='Your Email Adress'/>
          <button type='button'>Get Started</button>
        </div>

        <div className='tk73__header-content__people'>
          <img src={people} alt="comments"/>
          <p>We have thousands of students</p>
        </div>

      </div>
      <div className="tk73__header-image">
        <img src={image} alt="img" />
      </div>
    </div>
  )
}

export default Header
