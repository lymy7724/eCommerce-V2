import React, { useState, useEffect } from 'react'
import './Contact.css'
import frida from '../../images/frida.avif'
import Accordion from '../Accordion/Accordian.jsx'
import { accordionData } from '../Accordion/utils.jsx'
import '../Accordion/Accordian.css'
import axios from 'axios'



export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
      if (submitted) {
        console.log("form submitted:", name, email, message);
      }
    }, [ name, email, message, submitted]);
  
    // handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name) {
        setSubmitted(true);
      }
      if (email) {
        setSubmitted(true);
      }
      if (message) {
        setSubmitted(true);
      }
      
  //axios.post('http://localhost:9000/form', {
  axios.post('https://ecommerce-v2-loko.onrender.com/form', {
      name: name,
      email: email,
      message: message
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  
  return (
    <>
    <div id="form-cont">
      <img src={frida} class="frida" alt="crochet frida khalo"/>
      <div className="small-form-cont">
          <h5>Leave us a question or comment!</h5>
          <form action="/form" onSubmit={handleSubmit}>
              <div className="name-email">
                  <div>
                      <p>NAME</p>
                      <input id="name" type="text" name="name" value={name}
            onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                      <p>EMAIL *</p>
                      <input id="email" type="email" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
                  </div>
              </div>
              <p>MESSAGE *</p>
              <input id="message" name="message" value={message}
            onChange={(e) => setMessage(e.target.value)}/>
              <button type="submit" id="submit-form">SEND MESSAGE</button>
          </form>
          {submitted && <p>Thank you! We'll get back to you shortly!</p>}
      </div>
      
    </div>

    <div id='freq-asked'>
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

