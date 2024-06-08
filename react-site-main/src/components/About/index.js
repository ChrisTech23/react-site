import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import {
  faAws,
  faCss3,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer) // Cleanup the timer
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Meticulous, versatile, with experience in customer service, technical support, conflict 
            resolution, troubleshooting. A firm believer in process improvement and documentation. 
            Works well in a team with strong communication skills or independently, providing skills 
            in technical writing and compliance. 
          </p>
          <p>
            I believe in the power of continuous learning and adaptation, constantly refining my 
            skills to stay ahead in an ever-evolving technological landscape.
          </p>
          <p>
            I'm passionate about leveraging my technical expertise, problem-solving skills, and commitment 
            to process enhancement to drive success, whether it's within a collaborative team environment or 
            through independent initiatives.
          </p>
          <ul>
            <li>Troubleshooting</li>
            <li>Active Directory</li>
            <li>Customer Service</li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#646464" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#1E3054" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
