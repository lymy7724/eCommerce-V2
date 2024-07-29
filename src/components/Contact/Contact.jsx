import React, { useState } from 'react'
import './Contact.css'
import frida from '../../images/frida.avif'
import Accordion from '../Accordion/Accordian.jsx'
import { accordionData } from '../Accordion/utils.jsx'
import '../Accordion/Accordian.css'
import axios from 'axios'



export default function Contact() {

  // create state variables for each field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  

  const send = () => {
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
    // handle form submission
  const handleSubmit = (e) => {
      e.preventDefault();
      if (name) {
        if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
          if (message) {
            setSubmitted(true);
            send();
          } else {
            alert ("Please write a message!")
          }
        } else {
          alert ('Please enter a valid email address')
        }
      } 
      else{
        alert('Please enter your name')
      }
       

  }


  
  return (
    <>
    <div id="form-cont">
      <img src={frida} className="frida" alt="crochet frida khalo"/>
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
            onChange={(e) => setEmail(e.target.value)} />
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

