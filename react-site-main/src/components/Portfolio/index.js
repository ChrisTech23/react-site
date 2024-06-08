import React from 'react'
import './index.scss'
import { Link, Outlet } from 'react-router-dom' // Import Outlet
import Loader from 'react-loaders'

const Portfolio = () => {
  return (
    <>
      <div className="container portfolio-page">
        <ul className="projects-grid">
          {[
            {
              title: 'Project Static',
              imgSrc: '/images/reactportfolio.png',
              alt: 'Health App',
              demoLink: '/portfolio/projectstatic',
            },
            {
              title: 'Task List',
              imgSrc: '/images/reactportfolio.png',
              alt: 'Health App',
              demoLink: '/portfolio/tasklist',
            },
            {
              title: 'Video Streaming Service',
              imgSrc: '/images/reactportfolio.png',
              alt: 'Health App',
              demoLink: '/portfolio/videostreamingservice',
            },
            {
              title: 'In Progression',
              imgSrc: '/images/WorkingOnIt.jpeg',
              alt: 'Health App',
              //demoLink: '/portfolio/projectstatic',
            },
          ].map((project, idx) => (
            <li key={idx} className="project-container">
              <div className="project-image">
                <img src={project.imgSrc} alt={project.alt} />
                <div className="overlay">
                  <h2>{project.title}</h2>
                  <Link to={project.demoLink}>
                    <button>View More</button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
