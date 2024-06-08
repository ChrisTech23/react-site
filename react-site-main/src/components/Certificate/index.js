import React, { useState, useEffect } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Certificate = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const Details = ({ cert, certdetail, link }) => {
    return (
      <li>
        <h3>{cert}&nbsp;</h3>

        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {certdetail}
          </a>
        </p>
      </li>
    )
  }

  return (
    <>
      <div className="container certificate-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Certificates'.split('')}
            idx={15}
          />
        </h1>

        <div className="details-container relative flex flex-wrap">
          <Details
            cert="CompTIA A+"
            certdetail="View my certficate badge"
            link="/CompTIA A+ ce certificate.pdf"
          />
          <Details
            cert="Solutions Architect Associate"
            certdetail="View my certficate badge"
            link="https://www.credly.com/badges/ad191b1b-0b14-4406-a9ea-04ff09f6d49a/public_url"
          />
          <Details
            cert="SysOps Admin. Associate"
            certdetail="View my certficate badge"
            link="https://www.credly.com/badges/cca46040-6cc4-40ef-926e-bd92d941c9ff/public_url"
          />
          <Details
            cert="Developer Associate"
            certdetail="View my certficate badge"
            link="https://www.credly.com/badges/ead963aa-f2f2-4c9b-b8c4-aaf9d9303369/public_url"
          />
          
          
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Certificate
