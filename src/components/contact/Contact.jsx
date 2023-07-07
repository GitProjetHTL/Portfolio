import React from 'react'
import './contact.css'
import {AiOutlineMail} from'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'></AiOutlineMail>
          <h4>Email</h4>
          <h5>hatanluc0@outlook.fr</h5>
          <a href="mailto:hatanluc0@outlook.fr"> Send a Message</a>
          </article>

          <article className="contact__option">
          <BsMessenger className='contact__option-icon'></BsMessenger>
          <h4>Messenger</h4>
          <h5>HA Tan Luc</h5>
          <a href="https://m.me/tanluc.ha"> Send a Message</a>
          </article>

          <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'></AiOutlineMail>
          <h4>Whatsapp</h4>
          <h5>06 03 77 81 52</h5>
          <a href="https://api.whatsapp.com/send?phone=0603778152"> Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your message' rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact