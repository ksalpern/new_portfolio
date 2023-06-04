import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiRedux, SiGit, SiGithub } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';
import './SkillSnake.scss'

const Snake = () => {
  const iconsRef = useRef([])

  const skills = [
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'GraphQL', icon: <GrGraphQl /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  ];

  useEffect(() => {
    const icons = iconsRef.current

    icons.forEach((icon, index) => {
      gsap.to(icon, {
        y: 35,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        delay: index * 0.15
      })
    })
  }, [])

  return (
    <div className='snake'>
      {skills.map((skill, index) => (
        <h4 key={index} ref={el => (iconsRef.current[index] = el)}>
          {skill.icon}
        </h4>
      ))}
    </div>
  )
}

export default Snake
