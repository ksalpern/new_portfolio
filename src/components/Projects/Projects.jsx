import React, { useEffect, useState } from 'react'
// import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick'

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

  var settingsLeft = {
    infinite: true,
    autoplay: true,
    rtl: true,
    autoplaySpeed: 3500,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  var settingsRight = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <section id='projects' className='projects'>
      <h2>Check Out My Works.</h2>

      <div className='rightSlider'>
        <Slider {...settingsLeft}>
          {firstHalf?.map(({ title, url, image }) => (
            <a
              href={url}
              title={title}
              className={`slider__item ${
                hoveredItem === title ? 'hovered' : ''
              }`}
              key={title}
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='overlay'>
                <h4>{title}</h4>
                <BsLink />
              </div>
              <div className='slider__img'>
                <img
                  alt={title}
                  src={`assets/portfolio/${image}`}
                  loading='lazy'
                />
              </div>
            </a>
          ))}
        </Slider>
      </div>

      <div className='leftSlider'>
        <Slider {...settingsRight}>
          {secondHalf?.map(({ title, url, image }) => (
            <a
              href={url}
              title={title}
              className={`slider__item ${
                hoveredItem === title ? 'hovered' : ''
              }`}
              key={title}
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='overlay'>
                <h4>{title}</h4>
                <BsLink />
              </div>
              <div className='slider__img'>
                <img
                  alt={title}
                  src={`assets/portfolio/${image}`}
                  loading='lazy'
                />
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects
