import React, { useState } from 'react'
import './Contact.css'
import frida from '../../images/frida.avif'
import Accordion from '../Accordion/Accordian.jsx'
import { accordionData } from '../Accordion/utils.jsx'
import '../Accordion/Accordian.css'



export default function Contact() {
  
  return (
    <>
    <div id="form-cont">
      <img src={frida} class="frida" alt="crochet frida khalo"/>
      <div className="small-form-cont">
          <h5>Leave us a question or comment!</h5>
          <form action="/submit-info" name="myForm" onsubmit="return validateForm()">
              <div className="name-email">
                  <div>
                      <p>NAME</p>
                      <input id="name" type="text" name="name"/>
                  </div>
                  <div>
                      <p>EMAIL *</p>
                      <input id="email" type="email" name="email"/>
                  </div>
              </div>
              <p>MESSAGE *</p>
              <input id="message" name="message"/>
              <button type="submit" id="submit-form">SEND MESSAGE</button>
          </form>
      </div>
      
    </div>

    <div>
      <h1>FREQUENTLY ASKED</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
    
  </>
  )
}

