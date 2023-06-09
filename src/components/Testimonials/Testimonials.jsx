import React from 'react'

import './Testimonials.scss'

const Testimonials = ({ data }) => {
  if (data) {
    var testimonials = data.testimonials.map(testimonials => {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>- {testimonials.user}</cite>
          </blockquote>
        </li>
      )
    })
  }

  return (
    <section className='testimonials' id='testimonials'>
      <div className='testimonials__text'>
        <h2>Client Testimonials</h2>
        <ul>{testimonials}</ul>
      </div>
    </section>
  )
}

export default Testimonials
