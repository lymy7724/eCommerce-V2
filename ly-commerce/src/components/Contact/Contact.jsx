import React from 'react'
import './Contact.css'
import frida from '../../images/frida.avif'
import Accordian from './Accordian.jsx'

export default function Contact() {
  return (
    <div id="form-container">
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
              <button type="submit" id="submit">SEND MESSAGE</button>
          </form>
      </div>
      <div>
        <h6>FREQUENTLY ASKED</h6>
        <Accordian/>
      </div>
    </div>
  )
}
