import React, { useState } from "react";

import pic from "../img/message.png";

import emailjs from "@emailjs/browser";

const ContactMe = () => {
  // const [values, setValues] = useState({
  //   name: "",
  //   gmail: "",
  //   text: "",
  // });

  // const handleChange = (e) => {
  //   setValues((state) => ({
  //     ...state,
  //     [e.target.name]: e.target.values,
  //   }));
  // };

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .send(
        "service_kuo3w4o",
        "template_o07hi8b",
        {
          name,
          email,
          message
        },
        "TYwNg2nV1uMYsHCdH"
      )
      .then(
        (result) => {
          console.log(result);
          window.location.reload()
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div className="marginBottom__contact">
      <div className="c">
        <div className="co">
          <div className="image-box">
            <img src={pic} alt="" />
          </div>
          <form onSubmit={sendEmail}>
            <div className="topic">Send us a message</div>
            <div className="input-box">
              <input
                type="text"
                required

                name="name"

                placeholder="Enter name..."
                value={name}
                onChange={(e) => setName(e.target.value) }
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                required

                name="email"

                placeholder="Enter email..."
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div className="message-box">
              <textarea
                className="message-box"
                placeholder="Enter your message..."
                
                name="message"

                value={message}
                onChange={(e) => { setMessage(e.target.value) }}
              ></textarea>
            </div>
            <div className="input-box">
              <input type="submit" defaultValue="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
