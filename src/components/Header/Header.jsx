import React, { useEffect, useState } from 'react'

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
    <div className={`header ${isVisible ? '' : 'scrolled'}`}>
      <button className='header__menu' onClick={toggleBurgerMenu}>
        <div className={`header__burger ${isBurgerOpen ? 'cross' : ''}`}>
          <span></span>
        </div>
        <p>Menu</p>
      </button>
    </div>
  )
}

export default Header
