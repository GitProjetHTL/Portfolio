import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {PiStudentBold} from 'react-icons/pi'
import {FiUsers} from 'react-icons/fi'
import {BiFolder} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
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

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>no one</small>
            </article>

            <article className="about__card">
              <BiFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
            
          </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius doloribus, facere sequi commodi esse consequatur nisi fugit obcaecati numquam quod fugiat. Sed, voluptatem facilis illum provident a harum veniam natus.
            </p>
            <a href="#contact" className=' btn btn-primary'>Let's talk</a>
        </div>
      </div>

    </section>
  )
}

export default About