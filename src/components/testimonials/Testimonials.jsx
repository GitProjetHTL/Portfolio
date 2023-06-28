import React from 'react'
import './testimonials.css'
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// core version + navigation, pagination modules:
import { Pagination } from 'swiper';

import {Swiper,SwiperSlide} from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';


const data= [
  {
    avatar: AVTR1,
    name:'Jhon DOE',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste reprehenderit iure. Obcaecati est porro provident sapiente earum non eum laboriosam ipsam doloremque minima. Maiores minima optio ipsa molestiae voluptatibus.'
  },
  {
    avatar: AVTR2,
    name:'Jhon DOE',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste reprehenderit iure. Obcaecati est porro provident sapiente earum non eum laboriosam ipsam doloremque minima. Maiores minima optio ipsa molestiae voluptatibus.'
  },
  {
    avatar: AVTR3,
    name:'Jhon DOE',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste reprehenderit iure. Obcaecati est porro provident sapiente earum non eum laboriosam ipsam doloremque minima. Maiores minima optio ipsa molestiae voluptatibus.'
  },
  {
    avatar: AVTR4,
    name:'Jhon DOE',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste reprehenderit iure. Obcaecati est porro provident sapiente earum non eum laboriosam ipsam doloremque minima. Maiores minima optio ipsa molestiae voluptatibus.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                   <img src={avatar} alt="Avatar One" />
                </div>
                <h5>{name}</h5>
                 <small className='client_review'>
                    {review}
                  </small>
        </SwiperSlide>
            )
            
          })
        }
      
      </Swiper>
    </section>
  )
}

export default Testimonials