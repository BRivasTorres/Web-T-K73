import React from 'react'
import "./footer.css"
import tk73Logo from "../../assets/T-K73.svg"

const Footer = () => {
  return (
    <div className='tk73__footer section__pading'>
      <div className='tk73__footer-heading'>
        <h1 className='gradient__text'>Do you want to take a leap in your professional career</h1>
      </div>

      <div className='tk73__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='tk73__footer-links'>
        <div className="tk73__footer-links_logo">
          <img src={tk73Logo} alt="logo" />
          <p>Zona 1 Guatemala, All Rights Reserved</p>
        </div>
        <div className='tk73__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='tk73__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='tk73__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Zona 1 Guatemala</p>
          <p>028-136278</p>
          <p>info@tkpayme.net</p>
        </div>
      </div>

      <div className="tk73__footer-copyright">
        <p>© 2020 T-K73. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
