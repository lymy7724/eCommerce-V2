import React from 'react'
import './Home.css'
import {Link, Outlet} from "react-router-dom"
import ronaldo from '../../images/ronaldo2.webp'
import messi from '../../images/messi.avif'
import rapunzel from '../../images/rapunzel.avif'
import mirabel from '../../images/mirabel.avif'
import up from '../../images/up.webp'
import jasmine from '../../images/jasmine.avif'
import harry from '../../images/harry.avif'
import hagrid from '../../images/hagrid.avif'
import voldemort from '../../images/voldemort.avif'
import dobby from '../../images/dob.avif'



export default function Home() {
  return (
    <div>
      <div className="greetings">
          <h3>Welcome to Crochetopia</h3>
          <p>Step into a world of handmade charm and crochet wonders. Each stitch is
              crafted with
              love and care, just for
              you. Explore our cozy creations and find the perfect piece to add warmth and style to your life. Happy
              browsing!
          </p>
      </div>
      <div className="popular">
        <div className="showcase">
            <img src={ronaldo} alt="crochet ronaldo" class="popularimg"/>
            <div className="showcase-text">
                <h5 className="fanitem" style={{fontSize: "20px", color: "rgb(83, 81, 234)", paddingBottom: "50px"}}>Our Fan
                    Favorites</h5>
                <h6 className="fanitem">Cristiano Ronaldo</h6>
                <p className="fanitemp">A miniature yarn rendition capturing the essence of the legendary footballer
                    Cristiano Ronaldo,
                    meticulously crafted with colorful threads, showcasing his iconic pose and fierce determination
                    on
                    the field.</p>
                <div className="cart2" style={{paddingTop: "30px"}}><Link to="/shop"><button className="cart">SHOP
                            NOW</button></Link></div>
            </div>
        </div>
        <div className="showcase2">
            <div className="showcase-text2">
                <h5 className="fanitem">Lionel Messi</h5>
                <p className="fanitemp">A charmingly crafted tribute to the soccer maestro Lionel Messi, intricately woven
                    with soft yarn, capturing his unmistakable style, skill, and everlasting impact on the beautiful
                    game.</p>

                <div className="cart2" style={{paddingTop: "30px"}}><Link to="/shop"><button className="cart">SHOP
                            NOW</button></Link></div>

            </div>
            <img src={messi} alt="crochet messi" className="popularimg2"/>
        </div>
    </div>
    <div className="main-disney">
        <div className="disneycoll">
            <h3
                style={{fontFamily: 'Trebuchet MS'}}>
                Shop the Disney
                Collection</h3>
        </div>
        <div className="disneycont">
            <img src={rapunzel} alt="crochet rapunzel" className="disney"/>
            <img src={jasmine} alt="crochet jasmine" className="disney"/>
            <img src={up} alt="crochet carl fredrickson" className="disney"/>
            <img src={mirabel} alt="crochet mirabel" className="disney"/>
        </div>
    </div>


    <div className="harry">
        <div className="disneycoll">
            <h3
                style={{fontFamily: "Trebuchet MS"}}>
                Shop the Harry Potter
                Collection</h3>
        </div>
        <div className="disneycont">
            <img src={hagrid} alt="crochet hagrid" className="disney"/>
            <img src={harry} alt="crochet harry potter" className="disney"/>
            <img src={voldemort} alt="crochet voldemort" className="disney"/>
            <img src={dobby} alt="crochet dobby the elf" className="disney"/>
        </div>
    </div>

    <div id="bgContainer">
    <div className="bg-image"></div>
    <div className="bg-text">
    <h1>Want to be the first to hear about new releases?</h1>
    <p>Subscribe to our newsletter!</p>
    <input placeholder="YOUR EMAIL ADDRESS" id="news"/>
    <input type="submit" value="SUBSCRIBE" id="submit"/>
    </div>
    </div>
    <Outlet />
    </div>
  )
}
