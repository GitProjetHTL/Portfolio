import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href="https://fr.linkedin.com/in/tan-luc-ha-720431218" target='_blank'><BsLinkedin/></a>
       <a href="https://github.com/GitProjetHTL?tab=repositories" target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials