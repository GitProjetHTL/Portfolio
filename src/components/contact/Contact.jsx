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
          <AiOutlineMail></AiOutlineMail>
          <h4>Email</h4>
          <h5>dummygator@gmail.com</h5>
          <a href="hatanluc0@gmail.com"> Send a Message</a>
          </article>

          <article className="contact__option">
          <BsMessenger></BsMessenger>
          <h4>Messenger</h4>
          <h5>hatanluc</h5>
          <a href="https://www.facebook.com/"> Send a Message</a>
          </article>

          <article className="contact__option">
          <AiOutlineMail></AiOutlineMail>
          <h4>Whatsapp</h4>
          <h5>+00 000 000</h5>
          <a href="https://www.whatsapp.com/?lang=fr_FR"> Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='' rows="7"></textarea>
        </form>
      </div>
    </section>
  )
}

export default Contact