import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { CgWorkAlt } from 'react-icons/cg'
import { BsPerson } from 'react-icons/bs'
import { BsTelephone } from 'react-icons/bs'
import './Header.scss'

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // toggle burger function
  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen)
  }

  // hides header on down scroll and shows on up scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      setIsVisible(prevScrollPos > currentScrollPos)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  // Update the body class based on the burger state
  // it prevents scroll when burger menu is opened
  useEffect(() => {
    const body = document.body

    if (isBurgerOpen) {
      body.classList.add('lock')
    } else {
      body.classList.remove('lock')
    }

    return () => {
      // Clean up the body class when the component unmounts
      body.classList.remove('lock')
    }
  }, [isBurgerOpen])

  return (
    <header className={`header ${isVisible ? '' : 'scrolled'}`}>
      <button className='header__menu' onClick={toggleBurgerMenu}>
        <div className={`header__burger ${isBurgerOpen ? 'cross' : 'burger'}`}>
          <span></span>
        </div>
        <p>Menu</p>
      </button>
      <nav className={`header__nav ${isBurgerOpen ? 'open' : ''}`}>
        <Link to='projects'>
          <BsPerson />
          <span>about</span>
        </Link>
        <a href='#projects' onClick={toggleBurgerMenu}>
          <CgWorkAlt />
          <span>projects</span>
        </a>
        <Link to='/contacts'>
          <BsTelephone />
          <span>get in touch</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header
