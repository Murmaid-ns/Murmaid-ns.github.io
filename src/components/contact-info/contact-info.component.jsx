import React from "react";
import Fade from 'react-reveal/Fade';

import './contact-info.style.scss';
const ContactInfo = () => {
  return (
    <div id='contact-info'>
      <Fade>
        <div className="contacts">
          <h1>Contact Info</h1>
          <div className='__list'>
            <hr/>
            <p>Phone: <a className="contacts-link" href="tel:+390957348895">+380957348895</a></p>
            <hr/>
            <p>Email: <a className="contacts-link" href="mailto:19uvs99@gmail.com">19uvs99@gmail.com</a></p>
            <hr/>
            <p>Telegram: <a href="https://t.me/NidilkoViacheslav">@NidilkoViacheslav</a></p>
            <hr/>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/viacheslav-nidilko-798028190/">Click</a></p>
            <hr/>
          </div>
        </div>
      </Fade>
    </div>
  )
}
export default ContactInfo;
