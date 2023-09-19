import React from 'react'
import "./header.css"
import CTA from './CTA'
// import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>HA Tan Luc</h1>
        <h5 className="text-light">Developper web Junior</h5>
        <CTA></CTA>
          {/* <div className='content'>


<div className="me">
<img src={ME} alt="me" />
</div>
<a href="#contact" className='scroll__down'>Scroll Down</a>
</div> */}
         
        </div>
<HeaderSocials></HeaderSocials>

    </header>
  )
}

export default Header