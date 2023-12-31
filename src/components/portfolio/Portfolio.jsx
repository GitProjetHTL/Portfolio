import React from 'react'
import './portfolio.css'
import {useState} from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'


const data= [
  {
    id:5,
    image:IMG5,
    title:'Moderering.com',
    github:'',
    githubback:'',
    demo:'https://www.moderering.com/',
    technologie:' React , Vu, Boostrap, EmailJs',
    description:"Site officiel de Moderering. Moderering est une start-up qui a pour but de révolutionner le monde de la modération. ",
    
  },
 
  {
    id:4,
    image:IMG4,
    title:'Warhammer',
    github:'https://github.com/GitProjetHTL/warhammer_frontend',
    githubback:'https://github.com/GitProjetHTL/warhammer_backend',
    demo:'https://warhammer-frontend.vercel.app/',
    technologie:' React , Redux, Express , Node JS',
    description:"Le projet 'Warhammer' est un de e-market qui pour but d'enregister les différents produit de l'utilisateur dans un panier.",
    
  },
  {
    id:3,
    image:IMG3,
    title:'My moviz',
    github:'https://github.com/GitProjetHTL/my-movies-frontend',
    githubback:'https://github.com/GitProjetHTL/my-movies-backend',
    demo:'https://frontend-mymoviz-hrh8.vercel.app/',
    technologie:' React , Redux, Express , Node JS',
    description:"Le projet 'My moviz' est un site de streaming qui permet d'enregister les différents avis de l'utilisateur sur les derniers films sortis.",
    
  },

  {
    id:2,
    image:IMG2,
    title:'How are you ?',
    github:'https://github.com/GitProjetHTL/how-are-you-frontend',
    githubback:'https://github.com/GitProjetHTL/how-are-you-backend',
    demo:'https://drive.google.com/file/d/1fnSvRFWmiB_KAXVmbUDzM2RKGxGS_AMh/view',
    technologie:' React Native , Redux, Express , Node JS ',
    description:"Le projet 'How are you?' est une application qui a but de contribuer à une meilleure santé mentale des utilisateurs.",
    
  },
  {
    id:1,
    image:IMG1,
    title:'Locapic',
    github:'https://github.com/GitProjetHTL/Locapic',
    githubback:'',
    demo:'https://drive.google.com/file/d/12WJs_sRZCCx7Byv6P-vRejdgZF7wJx3S/view?usp=sharing',
    technologie:'React Native , Redux, Express , Node JS ',
    description:"Le projet 'Locapic' est une application de géolocalisation qui a pour but d'enregister les différentes localisations de l'utilisateur.",
    
  },
  
  
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
              <img src={image} alt={title} className='img_portfolio' />
              </div>
              <h3>{title}</h3>
              <div className='content_portfolio'>
                <p>{description}</p>
              </div>

              <p>Technologie utilisées : {technologie}</p>

              {githubBackend !== demo && (
              <a href={demo} className='btn btn_Demo' target='_blanck'>Demo</a>
              )}
              <div>
                {github !== "" && (
                  <a href={github} className='btn' target='_blanck'>GitHub Frontend</a>
                )}

                {githubBackend !== githubback && (
                  <a href={githubback} className='btn' target='_blanck'>GitHub Backend</a>
                )}

              </div>


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