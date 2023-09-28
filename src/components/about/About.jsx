import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {PiStudentBold} from 'react-icons/pi'
// import {FiUsers} from 'react-icons/fi'
import {BiFolder} from 'react-icons/bi'
import HeaderSocials from './HeaderSocials'

const About = () => {
  return (
    <section id='about'>
      <HeaderSocials></HeaderSocials>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <PiStudentBold className='about__icon'/>
              <h5>Experience</h5>
              <small> Junior Developpeur</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>no one</small>
            </article> */}

            <article className="about__card">
              <BiFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>5 + completed</small>
            </article>
            
          </div>
            <p>
            Ayant développé une passion pour le développement depuis ces derniers
            mois, je cherche une première expérience professionnelle pour mettre en
            pratique les compétences que j'ai acquises lors de
            ces derniers mois et apprendre le métier de développeur web.
            </p>
            <a href="#contact" className=' btn btn-primary'>Let's talk</a>
        </div>
      </div>

    </section>
  )
}

export default About