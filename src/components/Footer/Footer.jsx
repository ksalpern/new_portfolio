import React from 'react'
import { animateScroll } from 'react-scroll'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { BiUpArrow } from 'react-icons/bi'
import './Footer.scss'

const Footer = ({ data }) => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 2000, //   Adjust the duration as needed for the smooth scroll effect
      smooth: 'easeInOutQuart' // Adjust the easing function for the smooth scroll effect
    })
  }

  if (data) {
    var networks = data.social.map(network => {
      return (
        <a href={network.url} key={network.name} target='_blank'>
          {network.name === 'youtube' ? (
            <AiFillYoutube />
          ) : network.name === 'linkedin' ? (
            <AiFillLinkedin />
          ) : network.name === 'instagram' ? (
            <AiFillInstagram />
          ) : (
            <AiFillGithub />
          )}
        </a>
      )
    })
  }

  return (
    <footer className='footer'>
      <button
        className='footer__scroll'
        title='Back to Top'
        onClick={scrollToTop}
      >
        <BiUpArrow />
      </button>
      <div className='footer__links'>{networks}</div>
      <div className='footer__me'>
        <span> Made by</span>
        <a
          title='Kseniia P.'
          href='https://www.linkedin.com/in/kseniia-pidopryhora-44a579236/'
          target='_blank'
        >
          Kseniia P.
        </a>
      </div>
    </footer>
  )
}

export default Footer
