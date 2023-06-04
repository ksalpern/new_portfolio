import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import './Contact.scss'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'your service id',
        'your template id',
        {
          from_name: form.name,
          to_name: 'Kseniia',
          from_email: form.email,
          to_email: 'ksenia.pidopryhora@gmail.com',
          message: form.message
        },
        'your public key'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: ''
          })
        },
        error => {
          setLoading(false)
          console.error(error)

          alert('Ahh, something went wrong. Please try again.')
        }
      )
  }
  return (
    <div className='contact' id='contact'>
      <h2 className=''>Get in touch</h2>

      <form ref={formRef} onSubmit={handleSubmit} className='contact__form'>
        <label className='contact__form-name'>
          <span className=''>Your Name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className=''
          />
        </label>
        <label className='contact__form-email'>
          <span className=''>Your email</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className=''
          />
        </label>
        <label className='contact__form-message'>
          <span className=''>Your Message</span>
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='What do you want to say?'
            className=''
          />
        </label>

        <button type='submit' className='contact__form-button'>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  )
}

export default Contact
