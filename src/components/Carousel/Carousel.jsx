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

export default function Carouselslider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className='slider'>
      <div className='slider-container'>
        <h3
        style={{fontFamily: 'Trebuchet MS', paddingLeft: "0"}}>YOU MAY ALSO LIKE</h3>
        <Carousel swipeable={false}
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
          <img src={rapunzel} alt="crochet rapunzel" />
          <img src={jasmine} alt="crochet jasmine" />
          <img src={up} alt="crochet carl fredrickson" />
          <img src={mirabel} alt="crochet mirabel" />
          <img src={hagrid} alt="crochet hagrid" />
          <img src={harry} alt="crochet harry potter" />
          <img src={voldemort} alt="crochet voldemort" />
          <img src={dobby} alt="crochet dobby the elf" />
        </Carousel>
      </div>
    </div>
  )
}