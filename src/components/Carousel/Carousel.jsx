import './Carousel.css'
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import harry from '../../images/harry.avif'
import hagrid from '../../images/hagrid.avif'
import voldemort from '../../images/voldemort.avif'
import dobby from '../../images/dob.avif'
import rapunzel from '../../images/rapunzel.avif'
import mirabel from '../../images/mirabel.avif'
import up from '../../images/up.webp'
import jasmine from '../../images/jasmine.avif'
import Carousel from "react-multi-carousel";
import {Link} from "react-router-dom"

export default function Carouselslider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className='slider'>
      <div className='slider-container'>
        <h3
        style={{fontFamily: 'Trebuchet MS', paddingLeft: "0"}}>YOU MAY ALSO LIKE</h3>
        <Carousel
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
          <div className='slider-box'>
            <img src={rapunzel} alt="crochet rapunzel" className='sliderimg'/>
            <Link to="/shop" className='hoverbutton'>Buy Now</Link>
          </div>
          <div className='slider-box'>
          <img src={jasmine} alt="crochet jasmine" className='sliderimg'/>
          <Link to="/shop" className='hoverbutton'>Buy Now</Link>
          </div>
          <div className='slider-box'>
          <img src={up} alt="crochet carl fredrickson" className='sliderimg'/>
          <Link to="/shop" className='hoverbutton'>Buy Now</Link>
          </div>
          <div className='slider-box'>
          <img src={mirabel} alt="crochet mirabel" className='sliderimg'/>
          <Link to="/shop" className='hoverbutton'>Buy Now</Link>
          </div>
          <div className='slider-box'>
          <img src={hagrid} alt="crochet hagrid" className='sliderimg'/>
          <Link to="/shop" className='hoverbutton'>Buy Now</Link>
          </div>
          <div className='slider-box'>
          <img src={harry} alt="crochet harry potter" className='sliderimg'/>
          <Link to="/shop" className='hoverbutton'>Buy Now</Link>
          </div>
          <div className='slider-box'>
          <img src={voldemort} alt="crochet voldemort" className='sliderimg'/>
          <Link to="/shop" className='hoverbutton'>Buy Now</Link>
          </div>
          <div className='slider-box'>
          <img src={dobby} alt="crochet dobby the elf" className='sliderimg' />
          <Link to="/shop" className='hoverbutton'>Buy Now</Link>
          </div>
        </Carousel>
      </div>
    </div>
  )
}