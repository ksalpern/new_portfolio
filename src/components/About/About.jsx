import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import './About.scss'
import SkillSnake from '../SkillSnake/SkillSnake'

const About = ({ data }) => {
  if (data) {
    var name = data.name
    var profilepic = 'assets/' + data.image
    var bio = data.bio
    var street = data.address.street
    var city = data.address.city
    var state = data.address.state
    var zip = data.address.zip
    var phone = data.phone
    var email = data.email
    var resume = data.resumedownload
  }

  return (
    <section className='about'>
      <h2>About</h2>
      <div className='about__info'>
        <div className='about__img'>
          <img src={profilepic} alt='me' />
          <SkillSnake />
        </div>
        <div className='about__text'>
          <p>{bio}</p>
        </div>
      </div>
      <div className='about__links'>
        <a href={resume} target='_blank' title='Download cv'>
          Download cv
        </a>
        <ScrollLink
          to='contact'
          smooth={true}
          duration={1000}
          className='about__button'
        >
          Contact me
        </ScrollLink>
      </div>
    </section>
  )
}

export default About
