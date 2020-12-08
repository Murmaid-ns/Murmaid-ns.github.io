import React from "react";
import Fade from 'react-reveal/Fade';
import './header.style.scss';
import MyPhoto from './photo.jpeg';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <Fade>
          <div className='photo' style={{backgroundImage: `url(${MyPhoto})`}}/>
          <div className='name-surname'>
            <h1>Nidilko Viacheslav</h1>
            <h2>Junior Front-end developer</h2>
          </div>
        </Fade>
      </div>
    </header>

  )
}
export default Header;
