import React from 'react'

import './Banner.scss'

const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner__creativity'>
        <img src='/assets/creativity.svg' alt='creativity' />
        <img src='/assets/creativity2.svg' alt='creativity' />
        <img src='/assets/creativity2.svg' alt='creativity' />
        <img src='/assets/creativity2.svg' alt='creativity' />
      </div>
      <div className='banner__mainImg'>
        <img src='/assets/bannerpic.jpeg' alt='me' />
      </div>
      <div className='banner__text'>
        <h1>Design with code, code with passion</h1>
        <p>
          Let’s see how we can boost your projects to achieve outstanding
          results!
        </p>
      </div>
    </section>
  )
}

export default Banner
