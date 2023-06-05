import React, { useEffect, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SkillSnake from '../SkillSnake/SkillSnake'
import './About.scss'

gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const elements = section.querySelectorAll('.animate-element');

    gsap.from(elements, {
      opacity: 0,
      x: (index) => (index % 2 === 0 ? -40 : 40),
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        scrub: true,
        toggleActions: 'restart none none reverse',
        repeat: -1,
      },
    });
  }, []);

  if (data) {
    var name = data.name
    var profilepic = 'assets/' + data.image
    var bio = data.bio
    var resume = data.resumedownload
  }

  return (
    <section className='about' ref={sectionRef}>
      <h2 className='animate-element'>About</h2>
      <div className='about__info'>
        <div className='about__img animate-element'>
          <img src={profilepic} alt='me' />
          <SkillSnake />
        </div>
        <div className='about__text animate-element'>
          <p>
            Hey, I'm {name}! {bio}
          </p>
        </div>
      </div>
      <div className='about__links animate-element'>
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
