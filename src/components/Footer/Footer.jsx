import React from 'react'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://github.com/ksalpern' target='_blank'>
        <AiFillGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/kseniia-pidopryhora-44a579236/'
        target='_blank'
      >
        <AiFillLinkedin />
      </a>
      <a href='https://instagram.com/ksalpern?igshid=ZDdkNTZiNTM=' target='_blank'>
        <AiFillInstagram />
      </a>
      <a href='https://www.youtube.com/channel/UCRa049ePVPgYCCPacXS7crQ' target='_blank'>
        <AiFillYoutube />
      </a>
    </div>
  )
}

export default Footer
