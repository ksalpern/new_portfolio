import React from 'react'

import './Banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__creativity'>
        <img src='/assets/creativity.svg' alt='creativity' />
        <img src='/assets/creativity2.svg' alt='creativity' />
        <img src='/assets/creativity2.svg' alt='creativity' />
        <img src='/assets/creativity2.svg' alt='creativity' />
        {/* <img src='/assets/creativity2.svg' alt='creativity' /> */}
      </div>
      <div className='banner__mainImg'>
        <img
          src='https://images.pexels.com/photos/17028693/pexels-photo-17028693/free-photo-of-man-love-people-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
          alt='me'
        />
      </div>
      <div className='banner__text'>
        <h1>Design with code, code with passion</h1>
        <p>
          Let’s find out how we can elevate your projects to new standards of
          excellence!
        </p>
      </div>
    </div>
  )
}

export default Banner
