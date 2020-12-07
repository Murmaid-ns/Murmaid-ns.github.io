import React from "react";
import './contact-info.style.scss';

const ContactInfo = () => {
  return (
    <div id='contact-info'>
      <div className="contacts">
        <h1>Contact Info</h1>
        <ul className='__list'>
          <li>Phone: <a className="contacts-link" href="tel:+390957348895">+390957348895</a></li>
          <li>Email: <a className="contacts-link" href="mailto:19uvs99@gmail.com">19uvs99@gmail.com</a></li>
          <li>Telegram: <a href="https://t.me/NidilkoViacheslav">@NidilkoViacheslav</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/viacheslav-nidilko-798028190/">Link</a></li>
        </ul>
      </div>
    </div>
  )
}
export default ContactInfo;
