import React from "react";
import './header.style.scss';
import MyPhoto from './photo.jpeg'
import Particles from "react-tsparticles";

const Header = () => {
    return (
            <header>
                <div className='ball' style={{backgroundImage: `url(${MyPhoto})`}}/>
                <div className='name-surname'>
                    <h1>Nidilko Viacheslav</h1>
                    <h2>Junior Front-end developer</h2>
                </div>
            </header>

    )
}
export default Header;
