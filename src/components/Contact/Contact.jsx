import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { BsSendFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
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
        'service_ID',
        'template_ID',
        {
          from_name: form.name,
          to_name: 'Kseniia',
          from_email: form.email,
          to_email: 'ksenia.pidopryhora@gmail.com',
          message: form.message
        },
        'PUBLIC_KEY'
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
    <section className='contact' id='contact'>
      <h2 className='contact__header'>
        Get in touch <MdEmail />
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className='contact__form'>
        <label className='contact__form-name'>
          <span>Your Name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='How should I refer to you?'
            required
          />
        </label>
        <label className='contact__form-email'>
          <span>Your email</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='emailexample@gmail.com'
            required
          />
        </label>
        <label className='contact__form-message'>
          <span>Your Message</span>
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder="I find your website attractive and appealing let's make a new one together!"
            required
         />
        </label>

        <button type='submit' className='contact__form-button'>
          {loading ? 'Sending...' : 'Send'} <BsSendFill />
        </button>
      </form>
    </section>
  )
}

export default Contact
