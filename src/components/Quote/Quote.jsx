import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import './Quote.scss'

const Quote = () => {
  const textRef = useRef(null)

  useEffect(() => {
    const textElement = textRef.current

    gsap.fromTo(
      textElement,
      { x: '110%' }, // Initial position off the right edge of the container
      { x: '-100%', duration: 8, ease: 'none', repeat: -1 } // Move to the left edge of the container over 5 seconds and repeat infinitely
    )

    return () => {
      gsap.killTweensOf(textElement) // Kill the animation when the component is unmounted
    }
  }, [])

  return (
    <div className='quote'>
      <div className='quote__background'>
        <h3 ref={textRef} className='swim-text'>
          Frontend is where the magic happens
        </h3>
      </div>
    </div>
  )
}

export default Quote
