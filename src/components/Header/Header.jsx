import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { CgWorkAlt } from 'react-icons/cg'
import { BsPerson } from 'react-icons/bs'
import { BsTelephone } from 'react-icons/bs'
import './Header.scss'

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // toggle burger function
  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen)
  }

  // hides header on down scroll and shows on up scroll
  useEffect(() => {
    let prevScrollPos = window.pageYOffset

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const isScrolledUp = prevScrollPos < currentScrollPos
      setIsScrolled(isScrolledUp)
      prevScrollPos = currentScrollPos

      const header = document.querySelector('header')

      if (isBurgerOpen) {
        header?.classList.remove('scrolled')
        return
      }
      if (isScrolledUp) {
        header?.classList.add('scrolled')
      } else {
        header?.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isBurgerOpen])

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
    <header className={`header`}>
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
