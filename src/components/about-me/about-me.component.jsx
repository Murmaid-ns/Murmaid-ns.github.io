import React from "react";
import Fade from 'react-reveal/Fade';
import './about-me.style.scss';


const AboutMe = () => {
    return (
        <div id='about-me'>
            <Fade left big>
                <div className='summary'>
                    <h1>About me</h1>
                    <span>
                        I'm junior Front end developer from Kyiv experienced with building websites using HTML, CSS, JavaScript and JS Frameworks.Seeking a new opportunity and experience in these sphere. I have such qualities as good learning ability and stress tolerance. Unfortunately, I don`t have commercial experience in IT industry.
                    </span>
                </div>
            </Fade>
            <Fade right big>
                <div className='prof-skills'>
                    <h1>Professional Skills</h1>
                    <ul>
                        <li>Technologies: HTML, CSS, JSON, AJAX, jQuery, Bootstrap, Sass/Scss</li>
                        <li>Tools: Git, Photoshop, Chrome DevTools</li>
                        <li>Programming languages: JavaScript</li>
                        <li>Operating systems: Windows, Mac OS</li>
                        <li>Methodologies: Scrum, Agile</li>
                        <li>Languages: Ukrainian, Russian, English (Intermediate)</li>
                    </ul>
                </div>
            </Fade>
        </div>)
}
export default AboutMe;
