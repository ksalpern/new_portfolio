import React, { useEffect, useState } from 'react'
// import { useInView } from 'react-intersection-observer';
import { BsLink } from 'react-icons/bs'

import './Projects.scss'

const Projects = ({ data }) => {
  // const { ref, inView, entry } = useInView(options);
  const [hoveredItem, setHoveredItem] = useState(null)

  const handleMouseEnter = title => {
    setHoveredItem(title)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  const projects = data && data?.projects
  const halfIndex = Math.ceil(projects?.length / 2)
  const firstHalf = projects?.slice(0, halfIndex)
  const secondHalf = projects?.slice(halfIndex)

  return (
    <section id='projects' className='projects'>
      <h2>Check Out Some of My Works.</h2>

      <div className='projects__firstHalf'>
        <div className='projects__items'>
          {firstHalf?.map(({ title, url, image }) => (
            <div
              key={title}
              className={`projects__item ${
                hoveredItem === title ? 'hovered' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={url} title={title} className='projects__link'>
                <div className='projects__img'>
                  <img alt={title} src={`assets/portfolio/${image}`} />
                </div>
                <div className='overlay'>
                  <h4>{title}</h4>
                  <BsLink />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className='projects__secondHalf'>
        <div className='projects__items'>
          {secondHalf?.map(({ title, url, image }) => (
            <div
              key={title}
              className={`projects__item ${
                hoveredItem === title ? 'hovered' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={url} title={title} className='projects__link'>
                <div className='projects__img'>
                  <img alt={title} src={`assets/portfolio/${image}`} />
                </div>
                <div className='overlay'>
                  <h4>{title}</h4>
                  <BsLink />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
