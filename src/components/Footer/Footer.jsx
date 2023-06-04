import React, { useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { IoMdArrowRoundUp } from 'react-icons/io'
import './Footer.scss'

const Footer = ({ data }) => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500, //   Adjust the duration as needed for the smooth scroll effect
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
    <div className='footer'>
      {/* <a className='footer__scroll' title='Back to Top' href='#home'>
        <BiUpArrow />
      </a> */}
      <button
        className='footer__scroll'
        title='Back to Top'
        onClick={scrollToTop}
      >
        <IoMdArrowRoundUp />
      </button>
      <div className='footer__links'>{networks}</div>
      <div className='footer__me'>
        <span> Made by</span>
        <a title='Kseniia P.' href='https://github.com/ksalpern/'>
          Kseniia P.
        </a>
      </div>

      {/* <a href='https://github.com/ksalpern' target='_blank'>
        <AiFillGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/kseniia-pidopryhora-44a579236/'
        target='_blank'
      >
        <AiFillLinkedin />
      </a>
      <a
        href='https://instagram.com/ksalpern?igshid=ZDdkNTZiNTM='
        target='_blank'
      >
        <AiFillInstagram />
      </a>
      <a
        href='https://www.youtube.com/channel/UCRa049ePVPgYCCPacXS7crQ'
        target='_blank'
      >
        <AiFillYoutube />
      </a> */}
    </div>
  )
}

export default Footer
