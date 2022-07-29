import { useState } from 'react'

const Contact = () => {
  const [phone, setPhone] = useState({
    phone: '',
    error: '',
  })
  // const handleChange({ target: { value } }) {

  // }

  return (
    <section className='contact-form'>
      <div className='contact-form__page-title'>
        <h3>Get In Touch</h3>
      </div>
      <div className='contact-form__container'>
        <form action='https://formsubmit.co/davidpooltron.com' method='POST'>
          <input type='hidden' name='_subject' value='new email WOO!' />
          <div className='contact-form__user-details'>
            <div className='contact-form__input-box'>
              <span>First Name</span>
              <input
                type='text'
                name='first-name'
                placeholder='Enter your name'
                required
              />
            </div>
            <div className='contact-form__input-box'>
              <span>Last Name</span>
              <input
                type='text'
                name='last-name'
                placeholder='Enter your last name'
                required
              />
            </div>
            {/* <div className='contact-form__input-group'> */}
            <div className='contact-form__input-box'>
              <span>Email</span>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='contact-form__input-box'>
              <span>Phone Number</span>
              <input
                type='text'
                name='phone'
                placeholder='Enter your number'
                required
              />
            </div>
            {/* </div> */}
            <div className='contact-form__input-message'>
              <span>How did you find me?</span>
              <input type='text' name='how-did-you-find-me' />
            </div>
            <div className='contact-form__input-textarea'>
              <span>How can I help?</span>
              <textarea name='message' rows={3} cols={100} />
            </div>
          </div>

          <div className='contact-form__submit-btn'>
            <input type='submit' />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
