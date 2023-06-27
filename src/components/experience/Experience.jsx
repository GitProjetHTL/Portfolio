import React from 'react'
import './experience.css'
import {TbCircleCheckFilled} from 'react-icons/tb'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developpement</h3>
          <div className="experience__content">
            <article className="experience__details">
            <TbCircleCheckFilled className='experience__details-icons'></TbCircleCheckFilled>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className="experience__details">
            <TbCircleCheckFilled className='experience__details-icons'></TbCircleCheckFilled>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className="experience__details">
            <TbCircleCheckFilled className='experience__details-icons'></TbCircleCheckFilled>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className="experience__details">
            <TbCircleCheckFilled className='experience__details-icons'></TbCircleCheckFilled>
            <div>
              <h4>React</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className="experience__details">
            <TbCircleCheckFilled className='experience__details-icons'></TbCircleCheckFilled>
            <div>
              <h4>React Native</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className="experience__details">
            <TbCircleCheckFilled className='experience__details-icons'></TbCircleCheckFilled>
            <div>
              <h4>Redux</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT */}
        <div className="experience__backend">
        <h3>Backend Developpement</h3>
          <div className="experience__content">
            <article className="experience__details">
            <TbCircleCheckFilled className='experience__details-icons'></TbCircleCheckFilled>
            <div>
              <h4>Express</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className="experience__details">
            <TbCircleCheckFilled className='experience__details-icons'></TbCircleCheckFilled>
            <div>
              <h4>Node Js</h4>
              <small className='text-light'>Basic</small>
            </div>
            </article>
            {/* <article className="experience__details">
            <TbCircleCheckFilled></TbCircleCheckFilled>
            <h4>JavaScript</h4>
            <small className='text-light'>Basic</small>
            </article>
            <article className="experience__details">
            <TbCircleCheckFilled></TbCircleCheckFilled>
            <h4>React</h4>
            <small className='text-light'>Basic</small>
            </article>
            <article className="experience__details">
            <TbCircleCheckFilled></TbCircleCheckFilled>
            <h4>React Native</h4>
            <small className='text-light'>Basic</small>
            </article>
            <article className="experience__details">
            <TbCircleCheckFilled></TbCircleCheckFilled>
            <h4>Redux</h4>
            <small className='text-light'>Basic</small>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience