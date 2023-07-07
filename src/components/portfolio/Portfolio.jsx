import React from 'react'
import './portfolio.css'
import {useState} from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const data= [
  {
    id:1,
    image:IMG1,
    title:'Locapic',
    github:'https://github.com/GitProjetHTL/Locapic',
    githubback:'',
    demo:'',
    technologie:'React Native , Redux, Express , Node JS ',
    description:'Le projet Locapic est une application de géolocalisation réalisée lors de ma formation. Nous avons du utiliser divers technologie de react Native.'
  },
  {
    id:2,
    image:IMG2,
    title:'How are you ?',
    github:'https://github.com/GitProjetHTL/how-are-you-frontend',
    githubback:'https://github.com/GitProjetHTL/how-are-you-backend',
    demo:'',
    technologie:' React Native , Redux, Express , Node JS ',
    description:"Le projet How are you ? est une application qui a été réaliser en groupe pour la fin d'étude. Il a pour but de suivre la santé mentale des utilisateurs."
  },
  {
    id:3,
    image:IMG3,
    title:'Projet3',
    github:'https://github.com',
    githubback:'https://github.com/GitProjetHTL/Locapic',
    demo:'',
    technologie:' React , Redux, Express , Node JS',
    description:''
  }
  
]






const Portfolio = () => {
  const [githubBackend,setGithuBackend]=useState("");



  

  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image , title, github, demo, githubback, description, technologie}) =>{
          
          

           console.log(githubBackend)
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
    
              <p>{description}</p>

              <p>Technologie utilisées : {technologie}</p>

              
              <a href={github} className='btn'>GitHub Frontend</a>
              {githubBackend !== githubback && (
                <a href={githubback} className='btn'>GitHub Backend</a>
              )}
              <div className="portfolio__item-cta">
              {/* <a  href={demo} 
                  className='btn btn-primary'
                  target='_blank'>Live Demo</a> */}
              </div>
          </article>
          )
        })
       }

        
      </div>
    </section>
  )
}

export default Portfolio