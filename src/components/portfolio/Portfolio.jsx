import React from 'react'
import './portfolio.css'
import {useState} from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'


const data= [
  {
    id:1,
    image:IMG1,
    title:'Locapic',
    github:'https://github.com/GitProjetHTL/Locapic',
    githubback:'',
    demo:'https://drive.google.com/file/d/12WJs_sRZCCx7Byv6P-vRejdgZF7wJx3S/view?usp=sharing',
    technologie:'React Native , Redux, Express , Node JS ',
    description:"Le projet 'Locapic' est une application de géolocalisation réalisée lors de ma formation développeur web et application.Il a pour but d'enregister les différentes localisations de l'utilisateur.",
    
  },
  {
    id:2,
    image:IMG2,
    title:'How are you ?',
    github:'https://github.com/GitProjetHTL/how-are-you-frontend',
    githubback:'https://github.com/GitProjetHTL/how-are-you-backend',
    demo:'https://drive.google.com/file/d/1fnSvRFWmiB_KAXVmbUDzM2RKGxGS_AMh/view',
    technologie:' React Native , Redux, Express , Node JS ',
    description:"Le projet 'How are you?' est une application qui a été réalisée en groupe en tant que projet de fin d'études. Il a pour but de contribuer à une meilleure santé mentale des utilisateurs.",
    
  },
  {
    id:3,
    image:IMG3,
    title:'My moviz',
    github:'https://github.com/GitProjetHTL/my-movies-frontend',
    githubback:'https://github.com/GitProjetHTL/my-movies-backend',
    demo:'https://frontend-mymoviz-hrh8.vercel.app/',
    technologie:' React , Redux, Express , Node JS',
    description:"Le projet 'My moviz' est un site de streaming réalisé lors de ma formation développeur web et application. Il a pour but d'enregister les différents avis de l'utilisateur sur les derniers films sortis.",
    
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
          
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
    
              <p>{description}</p>

              <p>Technologie utilisées : {technologie}</p>

              
              <a href={github} className='btn' target='_blanck'>GitHub Frontend</a>
              {githubBackend !== githubback && (
                <a href={githubback} className='btn' target='_blanck'>GitHub Backend</a>
              )}

                {githubBackend !== demo && (
                <a href={demo} className='btn' target='_blanck'>Demo</a>
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