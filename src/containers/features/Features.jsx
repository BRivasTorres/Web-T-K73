import React from 'react'
import { Feature } from "../../components"
import "./features.css"

const featuresData = [
  {
    title: "Learn with the best",
    text: "Learn with didactic and empathetic teachers, who will dedicate their time to assist you and answer all your questions"
  },
  {
    title: "Learn at your pace",
    text: "In T-K73 you don't adapt to the teachers, the teachers adapt to you, you establish your hours and the days you want to work."
  },
  {
    title: "With material aimed at your goal",
    text: "You do not have to worry about which route to follow, or which language is better, we give you access depending on which sector you want to work in"
  },
  {
    title: "Guaranteed return",
    text: "If our services do not meet your needs, we will refund 100% of your money."
  },
]

const Fatures = () => {
  return (
    <div className='tk73__features section__padding' id='features'>
      <div className="tk73__features-heading">
        <h1 className='gradient__text'>The future of the industry is growing, what are you waiting for to join</h1>
        <p>Request Early to Get Estarted</p>
      </div>

      <div className="tk73__features-container">
        {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Fatures
