import React from 'react'
import './Carousal.css'
import rapunzel from '../../images/rapunzel.avif'
import mirabel from '../../images/mirabel.avif'
import up from '../../images/up.webp'
import jasmine from '../../images/jasmine.avif'
import harry from '../../images/harry.avif'
import hagrid from '../../images/hagrid.avif'
import voldemort from '../../images/voldemort.avif'
import dobby from '../../images/dob.avif'


export default function Carousal() {
  return (
    <>
    <div className='carousal'>
      <div className='wrap'>
            <img src={rapunzel} alt="crochet rapunzel" />
            <img src={jasmine} alt="crochet jasmine" />
            <img src={up} alt="crochet carl fredrickson" />
            <img src={mirabel} alt="crochet mirabel" />
            <img src={hagrid} alt="crochet hagrid" />
            <img src={harry} alt="crochet harry potter" />
            <img src={voldemort} alt="crochet voldemort" />
            <img src={dobby} alt="crochet dobby the elf" />
      </div>
    </div>
    </>
  )
}
