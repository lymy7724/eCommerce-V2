import React, { useState, useEffect } from 'react'
import './Home.css'
import {Link, Outlet} from "react-router-dom"
import ronaldo from '../../images/ronaldo2.webp'
import messi from '../../images/messi.avif'
import axios from 'axios'
import Carousel from '../Carousel/Carousel'




export default function Home() {
    
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (submitted) {
          console.log("form submitted:", email);
        }
      }, [ email, submitted]);
    
      // handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
          setSubmitted(true);
        }

    axios.post('http://localhost:9000/newsletter', {
        signup: email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  return (
    <div>
        <div className='heroImage'>
            <h1 id='main-message'>CRAFTED WITH CARE</h1>
            <div style={{paddingTop: "30px"}}><Link to="/shop"><button className="main-button">SHOP NOW</button></Link></div>
        </div>
      <div id="greetings">
          <h3>Welcome to Crochetopia</h3>
          <p className='introduction'>Step into a world of handmade charm and crochet wonders. Each stitch is
              crafted with
              love and care, just for
              you. Explore our cozy creations and find the perfect piece to add warmth and style to your life. Happy
              browsing!
          </p>
      </div>

      <div className="popular">
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
          <h5 className="fanitem" style={{fontSize:"50px"}}>OUR FAN FAVORITES</h5>
          <div style={{paddingRight:"190px"}}><Link to="/shop"><button className="cart-main">SHOP NOW</button></Link></div>
        </div>
        <div className="showcase">
            <div className='showcase-img'>
              <img src={ronaldo} alt="crochet ronaldo" class="popularimg"/></div>
            <div className='showcase-img'><img src={messi} alt="crochet messi" className="popularimg"/></div>
        </div>
      </div>

     
    <Carousel/>
   
    
    <div id="bgContainer">
    <div className="bg-image"></div>
    <div className="bg-text">
    <h1>Want to be the first to hear about new releases?</h1>
    <p>Subscribe to our newsletter!</p>
    <form onSubmit={handleSubmit} id="newsletter-form">
        <input value={email}
            onChange={(e) => setEmail(e.target.value)} name="signup" type="text" placeholder="YOUR EMAIL ADDRESS" id="news"/>
        <input type="submit" value="SUBSCRIBE" id="submit"/>
    </form>
    {submitted && <p>Thanks for subscribing!</p>}
    </div>
    </div>
    <Outlet />
    </div>
  )
}
